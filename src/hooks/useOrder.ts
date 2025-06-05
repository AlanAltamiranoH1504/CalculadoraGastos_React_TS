import {useState} from "react";
import type {MenuItem, OrderItem} from "../types";

function useOrder() {
    const [orden, setOrden] = useState<OrderItem[]>([]);

    const addItem = (item: MenuItem) => {
        const itemExistente = orden.findIndex((producto) => {
            return item.id === producto.id;
        });
        if (itemExistente >= 0){
            // const updateOrden = orden.map(producto => producto.id === item.id ? {...producto, cantidad: producto.cantidad +1} : producto);
            // setOrden(updateOrden);
            const updatedItem = [...orden];
            updatedItem[itemExistente].cantidad++;
            setOrden(updatedItem);
        } else {
            const newItem: OrderItem = {
                ...item,
                cantidad: 1
            }
            setOrden([...orden, newItem]);
        }
    }

    return {
        addItem,
        orden
    }
}

export default useOrder;
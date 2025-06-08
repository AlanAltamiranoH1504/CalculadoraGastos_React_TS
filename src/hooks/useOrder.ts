import {useState} from "react";
import type {MenuItem, OrderItem} from "../types";

function useOrder() {
    const [orden, setOrden] = useState<OrderItem[]>([]);
    const [propina, setPropina] = useState(0);

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

    const removeItem = (id: MenuItem['id']) => {
        const nuevaOrden =orden.filter((producto) => {
            return producto.id !== id;
        })
        setOrden(nuevaOrden);
    }

    function costoTotalOrden() {
        return orden.reduce((total, item) => {
            return total = total + (item.cantidad * item.price);
        }, 0);
    }

    const calcularTotalConPropina = (): number =>{
        return calcularPropina() + costoTotalOrden();
    }

    const calcularPropina = ()=> {
        return costoTotalOrden() * propina;
    }

    const reiniciarOrden = (): void => {
        setPropina(0);
        setOrden([]);
        console.log("Reiniciando")
    }

    return {
        addItem,
        orden,
        removeItem,
        costoTotalOrden,
        calcularTotalConPropina,
        calcularPropina,
        propina,
        setPropina,
        reiniciarOrden
    }
}

export default useOrder;
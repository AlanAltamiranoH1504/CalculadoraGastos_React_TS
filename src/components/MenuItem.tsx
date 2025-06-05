import {Fragment} from "react";
import type {MenuItem} from "../types";

//Types de Componente
type MenuItemProps = {
    item: MenuItem,
    addItem: (item: MenuItem) => void
}

const MenuItem = ({item, addItem}: MenuItemProps) => {
    return (
        <Fragment>
            <button
                className="border-2 border-teal-400 w-full p-3 flex justify-between items-center hover:bg-teal-200 rounded-xl"
                onClick={() => {
                    addItem(item);
                }}
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>
        </Fragment>
    );
}

export default MenuItem;
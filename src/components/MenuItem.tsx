import {Fragment} from "react";
import type {MenuItem} from "../types";

//Types de Componente
type MenuItemProps = {
    item: MenuItem
}

const MenuItem = ({item} : MenuItemProps) => {
    return (
        <Fragment>
            <button
                className="border-2 border-teal-400 w-full p-3 flex justify-between items-center hover:bg-teal-200 "
            >
                <p>{item.name}</p>
                <p className="font-black">${item.price}</p>
            </button>
        </Fragment>
    );
}

export default MenuItem;
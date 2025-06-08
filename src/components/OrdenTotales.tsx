import {Fragment} from "react";
import {formatCurrency} from "../helpers";

type OrdenTotalesProps = {
    costoTotalOrden: () => number
    propina: number
}

const OrdenTotales = ({costoTotalOrden, propina}: OrdenTotalesProps) => {
    // console.log(calcularPropina)
    return(
        <Fragment>
            <div className="space-y-3">
                <h2 className="font-black text-2xl text-center">Totales y Propina</h2>
                <p className="">Subtotal a Pagar: <span className="font-bold">{formatCurrency(costoTotalOrden())}</span></p>
                <p className="">Propina:</p>
                <p>Total a Pagar: {formatCurrency(propina)}</p>
            </div>
            <button></button>
        </Fragment>
    );
}

export default OrdenTotales;
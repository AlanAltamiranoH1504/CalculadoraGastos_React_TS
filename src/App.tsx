import Header from "./components/Header.tsx";
import {menuItems} from "./data/db.ts";
import {Fragment} from "react";
import MenuItem from "./components/MenuItem.tsx";
import useOrder from "./hooks/useOrder.ts";
import OrderContent from "./components/OrderContent.tsx";
import OrdenTotales from "./components/OrdenTotales.tsx";
import PropinasFormulario from "./components/PropinasFormulario.tsx";


function App() {
    const {addItem, orden, removeItem, costoTotalOrden, calcularTotalConPropina, calcularPropina, propina, setPropina, reiniciarOrden} = useOrder();
    return (
        <>
            <Fragment>
                <Header/>
            </Fragment>

            <main className="max-w-7xl mx-auto py-20 grid md:grid-cols-2">
                <div className="p-5">
                    <h2 className="text-center text-3xl font-black mb-4">Menú</h2>
                    <div className="space-y-3">
                        {menuItems.map((item) => {
                            return (
                                <MenuItem
                                    key={item.id}
                                    item={item}
                                    addItem={addItem}
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="border border-dashed border-slate-300 p-5 rounded-lg space-y-10">
                    <h2 className="text-center text-3xl font-black mb-4">Consumo</h2>
                    <OrderContent
                        orden={orden}
                        removeItem={removeItem}
                    />
                    {orden.length > 0 ? (
                        <Fragment>
                            <PropinasFormulario
                                setPropina={setPropina}
                            />
                            <OrdenTotales
                                costoTotalOrden={costoTotalOrden}
                                calcularPropina={calcularPropina}
                                calcularTotalConPropina={calcularTotalConPropina}
                                reiniciarOrden={reiniciarOrden}
                            />
                        </Fragment>
                    ):(
                        <Fragment></Fragment>
                    )}
                </div>
            </main>
        </>
    )
}

export default App

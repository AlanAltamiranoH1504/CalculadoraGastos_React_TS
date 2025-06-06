import Header from "./components/Header.tsx";
import {menuItems} from "./data/db.ts";
import {Fragment, useEffect} from "react";
import MenuItem from "./components/MenuItem.tsx";
import useOrder from "./hooks/useOrder.ts";
import OrderContent from "./components/OrderContent.tsx";


function App() {
    const {addItem, orden} = useOrder();

    // useEffect(() => {
    //
    // })

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
                    />
                </div>
            </main>
        </>
    )
}

export default App

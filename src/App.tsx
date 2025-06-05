import Header from "./components/Header.tsx";
import {menuItems} from "./data/db.ts";
import {Fragment} from "react";
import MenuItem from "./components/MenuItem.tsx";

function App() {

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
                                />
                            );
                        })}
                    </div>
                </div>
                <div className="p-5">
                    <h2 className="text-center text-3xl font-black mb-4">Consumo</h2>
                </div>
            </main>
        </>
    )
}

export default App

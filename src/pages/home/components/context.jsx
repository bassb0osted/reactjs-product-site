import { createContext, useState } from "react";

export const StoreContext = createContext(null);

export default function StoreProvider({children}) {

    const [sort, setSort] = useState('ціні(за спаданням)');
    const [filter, setFilter] = useState([]);
    const [goods, setGoods] = useState({
        totalAmount: 0,
        totalPrice: 0,
        goods: []
    });

    const store = {
        sort: [sort, setSort],
        filter: [filter, setFilter],
        goods: [goods, setGoods]
    };

    return (
        <StoreContext.Provider value={store}>
            {children}
        </StoreContext.Provider>
    );

}
import React, { useState } from "react";

import BuyActionWindow from "./BuyActionWindow";
import SellActionWindow from "./SellActionWindow";

const GeneralContext = React.createContext({
    openBuyWindow: (uid) => {},
    closeBuyWindow: () => {},
    openSellWindow: (uid) => {},
    closeSellWindow: () => {},
});

export const GeneralContextProvider = ({ children }) => {
    const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
    const [selectedStockUID, setSelectedStockUID] = useState("");
    const [isSellWindowOpen, setIsSellWindowOpen] = useState(false);

    const handleOpenBuyWindow = (uid) => {
        setIsBuyWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseBuyWindow = () => {
        setIsBuyWindowOpen(false);
        setSelectedStockUID("");
    };

    const handleOpenSellWindow = (uid) => {
        setIsSellWindowOpen(true);
        setSelectedStockUID(uid);
    };

    const handleCloseSellWindow = () => {
        setIsSellWindowOpen(false);
        setSelectedStockUID("");
    };

    return (
        <GeneralContext.Provider
            value={{
                openBuyWindow: handleOpenBuyWindow,
                closeBuyWindow: handleCloseBuyWindow,

                openSellWindow: handleOpenSellWindow,
                closeSellWindow: handleCloseSellWindow,
            }}
        >
            {children}
            {isBuyWindowOpen && <BuyActionWindow uid={selectedStockUID} />}
            {isSellWindowOpen && <SellActionWindow uid={selectedStockUID} />}
        </GeneralContext.Provider>
    );
};

export default GeneralContext;

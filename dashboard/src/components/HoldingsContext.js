import React, { createContext, useState } from "react";

const HoldingsContext = createContext();

export const HoldingsProvider = ({ children }) => {
    const [holdings, setHoldings] = useState([]);

    return (
        <HoldingsContext.Provider value={{ holdings, setHoldings }}>
            {children}
        </HoldingsContext.Provider>
    );
};

export default HoldingsContext;

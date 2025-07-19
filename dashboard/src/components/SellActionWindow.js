import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";

import axios from "axios";

import GeneralContext from "./GeneralContext";

import "./SellActionWindow.css";
import HoldingsContext from "./HoldingsContext";

const SellActionWindow = ({ uid }) => {
    const [stockQuantity, setStockQuantity] = useState(1);
    const [stockPrice, setStockPrice] = useState(0.0);
    const generalContext = useContext(GeneralContext);
    const { setHoldings } = useContext(HoldingsContext);

    const updateHoldings = async () => {
        try {
            const response = await axios.get(
                "http://localhost:3000/addHoldings"
            );
            const holdings = response.data;
            const existingHolding = holdings.find(
                (holding) => holding.name === uid
            );
            if (existingHolding) {
                if (stockQuantity > existingHolding.qty) {
                    alert("You cannot sell more than you hold.");
                    return;
                }

                await axios.put(
                    `http://localhost:3000/addHoldings/${existingHolding._id}`,
                    {
                        qty: existingHolding.qty - stockQuantity,
                        avg: existingHolding.avg,
                    }
                );
            } else {
                console.error("Holding not found for the stock:", uid);
            }
            const updated = await axios.get(
                "http://localhost:3000/addHoldings"
            );
            setHoldings(updated.data);
            console.log("Holdings updated successfully");
        } catch (error) {
            console.error("Failed to update holdings:", error);
        }
    };
    const handleSellClick = async () => {
        try {
            await axios.post("http://localhost:3000/sellOrder", {
                name: uid,
                qty: stockQuantity,
                price: stockPrice,
                mode: "SELL",
            });
            await updateHoldings();
        } catch (error) {
            console.error("Order failed:", error);
        }
        generalContext.closeSellWindow();
    };

    const handleCancelClick = () => {
        generalContext.closeSellWindow();
    };

    return (
        <div className="container" id="sell-window" draggable="true">
            <div className="regular-order">
                <div className="inputs">
                    <fieldset>
                        <legend>Qty.</legend>
                        <input
                            type="number"
                            name="qty"
                            id="qty"
                            onChange={(e) => setStockQuantity(e.target.value)}
                            value={stockQuantity}
                        />
                    </fieldset>
                    <fieldset>
                        <legend>Price</legend>
                        <input
                            type="number"
                            name="price"
                            id="price"
                            step="0.05"
                            onChange={(e) => setStockPrice(e.target.value)}
                            value={stockPrice}
                        />
                    </fieldset>
                </div>
            </div>

            <div className="buttons">
                <span>Margin required ₹140.65</span>
                <div>
                    <Link
                        className="btn btn-dark-orange"
                        onClick={handleSellClick}
                    >
                        Sell
                    </Link>
                    <Link
                        to=""
                        className="btn btn-grey"
                        onClick={handleCancelClick}
                    >
                        Cancel
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default SellActionWindow;

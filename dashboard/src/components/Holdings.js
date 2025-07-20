import React, { useContext, useEffect } from "react";
import axios from "axios";
import HoldingsContext from "./HoldingsContext";
import { VerticalGraph } from "./VerticalGraph";

const Holdings = () => {
    const { holdings, setHoldings } = useContext(HoldingsContext);

    useEffect(() => {
        axios.get("http://localhost:3000/addHoldings").then((res) => {
            setHoldings(res.data);
        });
    }, [setHoldings]);

    const labels = holdings.map((stock) => stock["name"]);

    const data = {
        labels,
        datasets: [
            {
                label: "Stock Prices",
                data: holdings.map((stock) => stock.price),
                backgroundColor: "rgba(53, 162, 235, 0.5)",
            },
        ],
    };

    return (
        <>
            <h3 className="title">Holdings ({holdings.length})</h3>

            <div className="order-table">
                <table>
                    <tr>
                        <th>Instrument</th>
                        <th>Qty.</th>
                        <th>Avg. cost</th>
                        <th>LTP</th>
                        <th>Cur. val</th>
                        <th>P&L</th>
                        <th>Net chg.</th>
                        <th>Day chg.</th>
                    </tr>

                    {holdings.map((stock, index) => {
                        const currVal = stock.price * stock.qty;
                        const isProfit = currVal - stock.avg * stock.qty >= 0.0;
                        const profClass = isProfit ? "profit" : "loss";
                        const dayClass = stock.isLoss ? "loss" : "profit";

                        return (
                            <tr key={index}>
                                <td>{stock.name}</td>
                                <td>{stock.qty}</td>
                                <td>{stock.avg.toFixed(2)}</td>
                                <td>{stock.price.toFixed(2)}</td>
                                <td>{currVal.toFixed(2)}</td>
                                <td className={profClass}>
                                    {(currVal - stock.avg * stock.qty).toFixed(
                                        2
                                    )}
                                </td>
                                <td className={profClass}>{stock.net}</td>
                                <td className={dayClass}>{stock.day}</td>
                            </tr>
                        );
                    })}
                </table>
            </div>

            <div className="row">
                <div className="col">
                    <h5>
                        29,875.<span>55</span>{" "}
                    </h5>
                    <p>Total investment</p>
                </div>
                <div className="col">
                    <h5>
                        31,428.<span>95</span>{" "}
                    </h5>
                    <p>Current value</p>
                </div>
                <div className="col">
                    <h5>1,553.40 (+5.20%)</h5>
                    <p>P&L</p>
                </div>
            </div>
            <VerticalGraph data={data} />
        </>
    );
};

export default Holdings;

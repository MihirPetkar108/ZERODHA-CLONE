import React, { useState, useContext } from "react";
import GeneralContext from "./GeneralContext";
import { Tooltip, Zoom } from "@mui/material";
import { watchlist } from "../data/data";
import {
    BarChartOutlined,
    KeyboardArrowDown,
    KeyboardArrowUp,
    MoreHoriz,
} from "@mui/icons-material";
import { DoughnutChart } from "./DoughnutChart";

const WatchList = () => {
    const labels = watchlist.map((stock) => stock["name"]);

    const data = {
        labels,
        datasets: [
            {
                label: "Prices",
                data: watchlist.map((stock) => stock.price),
                backgroundColor: [
                    "rgba(255, 99, 132, 0.5)",
                    "rgba(54, 162, 235, 0.5)",
                    "rgba(255, 206, 86, 0.5)",
                    "rgba(75, 192, 192, 0.5)",
                    "rgba(153, 102, 255, 0.5)",
                    "rgba(255, 159, 64, 0.5)",
                ],
                borderColor: [
                    "rgba(255, 99, 132, 1)",
                    "rgba(54, 162, 235, 1)",
                    "rgba(255, 206, 86, 1)",
                    "rgba(75, 192, 192, 1)",
                    "rgba(153, 102, 255, 1)",
                    "rgba(255, 159, 64, 1)",
                ],
                borderWidth: 1,
            },
        ],
    };

    return (
        <div className="watchlist-container">
            <div className="search-container">
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search eg:infy, bse, nifty fut weekly, gold mcx"
                    className="search"
                />
                <span className="counts"> {watchlist.length} / 50</span>
            </div>

            <ul className="list">
                {watchlist.map((stock, index) => {
                    return <WatchListItem stock={stock} key={index} />;
                })}
            </ul>
            <DoughnutChart data={data} />
            <br />
        </div>
    );
};

export default WatchList;

const WatchListItem = ({ stock }) => {
    const [showWatchlistActions, setShowWatchlistActions] = useState(false);

    const handleMouseEnter = (e) => {
        setShowWatchlistActions(true);
    };

    const handleMouseLeave = (e) => {
        setShowWatchlistActions(false);
    };

    return (
        <li onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
            <div className="item">
                <p className={stock.isDown ? "down" : "up"}>{stock.name}</p>
                <div className="itemInfo">
                    <span
                        className="percent"
                        style={{ position: "relative", bottom: "0.4rem" }}
                    >
                        {stock.percent}
                    </span>
                    {stock.isDown ? (
                        <KeyboardArrowDown className="down" />
                    ) : (
                        <KeyboardArrowUp className="up" />
                    )}
                    <span
                        className="price"
                        style={{ position: "relative", bottom: "0.4rem" }}
                    >
                        {stock.price}
                    </span>
                </div>
            </div>
            {showWatchlistActions && <WatchListACtions uid={stock.name} />}
        </li>
    );
};

const WatchListACtions = ({ uid }) => {
    const generalContext = useContext(GeneralContext);

    const handleBuyClick = () => {
        generalContext.openBuyWindow(uid);
    };

    const handleSellClick = () => {
        generalContext.openSellWindow(uid);
    };
    return (
        <span className="actions">
            <div className="action-buttons">
                <Tooltip
                    title="Buy(B)"
                    placement="top"
                    arrow
                    TransitionComponent={Zoom}
                    onClick={handleBuyClick}
                >
                    <button className="buy">Buy</button>
                </Tooltip>

                <Tooltip
                    title="Sell(S)"
                    placement="top"
                    arrow
                    TransitionComponent={Zoom}
                    onClick={handleSellClick}
                >
                    <button className="sell">Sell</button>
                </Tooltip>

                <Tooltip
                    title="Analytics(A)"
                    placement="top"
                    arrow
                    TransitionComponent={Zoom}
                >
                    <button className="action">
                        <BarChartOutlined className="icon" />
                    </button>
                </Tooltip>

                <Tooltip
                    title="More"
                    placement="top"
                    arrow
                    TransitionComponent={Zoom}
                >
                    <button className="action">
                        <MoreHoriz className="icon" />
                    </button>
                </Tooltip>
            </div>
        </span>
    );
};

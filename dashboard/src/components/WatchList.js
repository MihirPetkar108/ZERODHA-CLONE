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

const WatchList = () => {
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

import React from "react";

function OpenAccount() {
    return (
        <div className="container p-5 mb-5">
            <div className="row text-center">
                <h1 className="mt-3 mb-4">Open a Zerodha account</h1>
                <p className="mb-5">
                    Modern platforms and apps, ₹0 investments, and flat ₹20
                    intraday and F&O trades.
                </p>
                <button
                    className="p-2 btn btn-primary fs-5 mb-5"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default OpenAccount;

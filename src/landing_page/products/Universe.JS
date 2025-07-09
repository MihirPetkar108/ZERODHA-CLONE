import React from "react";

function Universe({ imageURL }) {
    return (
        <div className="container mt-5">
            <div className="row text-center">
                <h1 style={{ color: "#424242" }}>The Zerodha Universe</h1>
                <p className="mb-5 mt-2" style={{ color: "#424242" }}>
                    Extend your trading and investment experience even further
                    with our partner platforms
                </p>

                <div className="col-4">
                    <img
                        src="media/images/smallcaseLogo.png"
                        style={{ width: "50%" }}
                    />
                    <p className="text-small text-muted p-3">
                        Thematic investing platform
                    </p>
                </div>

                <div className="col-4">
                    <img
                        src="media/images/streakLogo.png"
                        style={{ width: "40%" }}
                    />
                    <p className="text-small text-muted p-3">
                        Algo & strategy platform
                    </p>
                </div>

                <div className="col-4">
                    <img
                        src="media/images/sensibullLogo.svg"
                        style={{ width: "60%" }}
                    />
                    <p className="text-small text-muted p-4">
                        Options trading platform
                    </p>
                </div>

                <div className="col-4 mt-5">
                    <img
                        src="media/images/zerodhaFundhouse.png"
                        style={{ width: "50%" }}
                    />
                    <p className="text-small text-muted p-3">
                        Asset management
                    </p>
                </div>

                <div className="col-4 mt-5">
                    <img
                        src="media/images/goldenpiLogo.png"
                        style={{ width: "50%" }}
                    />
                    <p className="text-small text-muted p-3">
                        Bonds trading platform
                    </p>
                </div>

                <div className="col-4 mt-5">
                    <img
                        src="media/images/dittoLogo.png"
                        style={{ width: "35%" }}
                    />
                    <p className="text-small text-muted p-3">Insurance</p>
                </div>

                <button
                    className="p-2 btn btn-primary fs-5 mb-5 mt-4"
                    style={{ width: "20%", margin: "0 auto" }}
                >
                    Sign up for free
                </button>
            </div>
        </div>
    );
}

export default Universe;

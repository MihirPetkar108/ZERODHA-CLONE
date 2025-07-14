import React from "react";

function LeftSection({
    imageURL,
    productName,
    productDescription,
    tryDemo,
    learnMore,
    googlePlay,
    appStore,
}) {
    return (
        <div className="container mt-5 p-5">
            <div className="row">
                <div className="col-1"></div>

                <div className="col-5">
                    <img src={imageURL} />
                </div>

                <div className="col-2"></div>

                <div
                    className="col-4 text-muted"
                    style={{
                        width: "25rem",
                        lineHeight: "2",
                    }}
                >
                    <h1 className=" mb-4">{productName}</h1>
                    <p className=" mb-4">{productDescription}</p>

                    <div className=" mb-4">
                        <a
                            href={tryDemo}
                            className="leftSectionLink"
                            style={{ textDecoration: "none", color: "#387ed1" }}
                        >
                            Try Demo
                            <i class="fa fa-long-arrow-right ms-1"></i>
                        </a>
                        <a
                            href={learnMore}
                            className="link"
                            style={{
                                marginLeft: "50px",
                                textDecoration: "none",
                                color: "#387ed1",
                            }}
                        >
                            Learn More
                            <i class="fa fa-long-arrow-right ms-1"></i>
                        </a>
                    </div>

                    <div className="mt-3">
                        <a href={googlePlay}>
                            <img src="media/images/googlePlayBadge.svg" />
                        </a>
                        <a href={appStore} style={{ marginLeft: "50px" }}>
                            <img src="media/images/appstoreBadge.svg" />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default LeftSection;

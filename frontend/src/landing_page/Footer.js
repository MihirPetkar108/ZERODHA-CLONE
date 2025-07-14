import React from "react";
import { nanoid } from "nanoid";

function Footer() {
    const accountLinks = [
        "Open demat account",
        "Minor demat account",
        "NRI demat account",
        "Commodity",
        "Dematerialisation",
        "Fund transfer",
        "MTF",
        "Referral program",
    ];
    const supportLinks = [
        "Contact us",
        "Support portal",
        "How to file a complaint?",
        "Status of your complaints",
        "Bulletin",
        "Circular",
        "Z-Connect blog",
        "Downloads",
    ];
    const companyLinks = [
        "About",
        "Philosophy",
        "Press & media",
        "Careers",
        "Zerodha Cares (CSR)",
        "Zerodha.tech",
        "Open source",
    ];
    const quickLinks = [
        "Upcoming IPOs",
        "Brokerage charges",
        "Market holidays",
        "Economic calendar",
        "Calculators",
        "Markets",
        "Sectors",
    ];

    const renderColumn = (title, links) => (
        <div className="col">
            <p style={{ color: "#444" }}>
                <b>
                    <u>{title}</u>
                </b>
            </p>
            {links.map((text) => (
                <a
                    key={nanoid()}
                    href=""
                    className="d-block mb-3 text-muted footer-a"
                    style={{
                        textDecoration: "none",
                        fontSize: "14px",
                    }}
                >
                    {text}
                </a>
            ))}
        </div>
    );
    return (
        <footer
            className="border-top"
            style={{ backgroundColor: "rgb(250,250,250)" }}
        >
            <div
                className="container mt-5 ps-5 pe-5"
                style={{ margin: "0 80px" }}
            >
                <div className="row mt-5">
                    <div className="col" style={{ marginRight: "4rem" }}>
                        <img
                            src="media/images/logo.svg"
                            style={{ width: "65%" }}
                            className="mb-3"
                        ></img>
                        <p className="text-muted" style={{ fontSize: "14px" }}>
                            &copy; 2010 - 2025, Zerodha Broking Ltd. <br />
                            All rights reserved.
                        </p>
                    </div>
                    {renderColumn("Account", accountLinks)}
                    {renderColumn("Support", supportLinks)}
                    {renderColumn("Company", companyLinks)}
                    {renderColumn("Quick Links", quickLinks)}
                </div>

                <div
                    className="row mt-5 text-muted"
                    style={{ fontSize: "11px", lineHeight: "1.8" }}
                >
                    <p>
                        Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI
                        Registration no.: INZ000031633 CDSL/NSDL: Depository
                        services through Zerodha Broking Ltd. – SEBI
                        Registration no.: IN-DP-431-2019 Commodity Trading
                        through Zerodha Commodities Pvt. Ltd. MCX: 46025;
                        NSE-50001 – SEBI Registration no.: INZ000038238
                        Registered Address: Zerodha Broking Ltd., #153/154, 4th
                        Cross, Dollars Colony, Opp. Clarence Public School, J.P
                        Nagar 4th Phase, Bengaluru - 560078, Karnataka, India.
                        For any complaints pertaining to securities broking
                        please write to{" "}
                        <a href="" className="footer-p">
                            complaints@zerodha.com
                        </a>
                        , for DP related to{" "}
                        <a href="" className="footer-p">
                            dp@zerodha.com
                        </a>
                        . Please ensure you carefully read the Risk Disclosure
                        Document as prescribed by SEBI | ICF
                    </p>

                    <p>
                        Procedure to file a complaint on{" "}
                        <a href="" className="footer-p">
                            SEBI SCORES
                        </a>
                        : Register on SCORES portal. Mandatory details for
                        filing complaints on SCORES: Name, PAN, Address, Mobile
                        Number, E-mail ID. Benefits: Effective Communication,
                        Speedy redressal of the grievances
                    </p>

                    <p>
                        <a href="" className="footer-p">
                            Smart Online Dispute Resolution
                        </a>{" "}
                        |{" "}
                        <a href="" className="footer-p">
                            Grievances Redressal Mechanism{" "}
                        </a>
                    </p>

                    <p>
                        Investments in securities market are subject to market
                        risks; read all the related documents carefully before
                        investing.
                    </p>

                    <p>
                        Attention investors: 1) Stock brokers can accept
                        securities as margins from clients only by way of pledge
                        in the depository system w.e.f September 01, 2020. 2)
                        Update your e-mail and phone number with your stock
                        broker / depository participant and receive OTP directly
                        from depository on your e-mail and/or mobile number to
                        create pledge. 3) Check your securities / MF / bonds in
                        the consolidated account statement issued by NSDL/CDSL
                        every month.
                    </p>

                    <p>
                        "Prevent unauthorised transactions in your account.
                        Update your mobile numbers/email IDs with your stock
                        brokers. Receive information of your transactions
                        directly from Exchange on your mobile/email at the end
                        of the day. Issued in the interest of investors. KYC is
                        one time exercise while dealing in securities markets -
                        once KYC is done through a SEBI registered intermediary
                        (broker, DP, Mutual Fund etc.), you need not undergo the
                        same process again when you approach another
                        intermediary." Dear Investor, if you are subscribing to
                        an IPO, there is no need to issue a cheque. Please write
                        the Bank account number and sign the IPO application
                        form to authorize your bank to make payment in case of
                        allotment. In case of non allotment the funds will
                        remain in your bank account. As a business we don't give
                        stock tips, and have not authorized anyone to trade on
                        behalf of others. If you find anyone claiming to be part
                        of Zerodha and offering such services, please{" "}
                        <a href="" className="footer-p">
                            create a ticket here.
                        </a>
                    </p>
                </div>
                <div className="row mb-3 text-center text-muted">
                    <span className="">
                        <a href="" className="footer-link">
                            NSE
                        </a>
                        <a href="" className="footer-link">
                            BSE
                        </a>
                        <a href="" className="footer-link">
                            MCX
                        </a>
                        <a href="" className="footer-link">
                            Terms & conditions
                        </a>
                        <a href="" className="footer-link">
                            Policies & procedures
                        </a>
                        <a href="" className="footer-link">
                            Privacy policy
                        </a>
                        <a href="" className="footer-link">
                            Disclosure
                        </a>
                        <a href="" className="footer-link">
                            For investor's attention
                        </a>
                        <a href="" className="footer-link">
                            Investor charter
                        </a>
                    </span>
                </div>
            </div>
        </footer>
    );
}

export default Footer;

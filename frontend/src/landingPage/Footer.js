import React from 'react';
import { Link } from 'react-router-dom';
function Footer() {
    let go = ()=>{
        window.scrollTo(0,0);
    }
    return ( 
        <footer className="border-top">
        <div className="container">
            <div className='row  p-lg-5'>
                <div className='col'>
                    <img src="images/logo.svg" alt="logo" style={{width:"40%"}}></img>
                    <br/><br/>
                    <p>&copy; 2010 - 2024, Zerodha Broking Ltd.All rights reserved.</p>
                </div>
                <div className='col-lg col-sm-12'>
                    <p className='fs-5'>company</p>
                    <a href="*" className='text-muted' style={{color:"black"}}>About</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Products</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Pricing</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Referral programme</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Careers</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Zerodha.tech</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Press & media</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Zerodha Cares (CSR)</a> <br/>
                </div>
                <div className='col-lg col-sm-12'>
                    <p className='fs-5'>support</p>
                    <a href="*" className='text-muted' style={{color:"black"}}>Contact us</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Support portal</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Z-Connect blog</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>List of charges</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Downloads & resources</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Videos</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Market overview</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>How to file a complaint?</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Status of your complaints</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Account</a> <br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Open an account</a> <br/>

                </div>
                <div className='col-lg col-sm-12'>
                    <p className='fs-5'>Account</p>
                   <a href="*" className='text-muted' style={{color:"black"}}>Open an account</a><br/>
                    <a href="*" className='text-muted' style={{color:"black"}}>Fund transfer</a><br/>
                </div>

            </div>
            <div class="small-text fs-8 text-muted px-lg-5" style={{fontSize:"0.8rem"}}>
            <p>Zerodha Broking Ltd.: Member of NSE, BSE​ &​ MCX – SEBI Registration no.: INZ000031633 CDSL/NSDL: Depository services through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019 Commodity Trading through Zerodha Commodities Pvt. Ltd. MCX: 46025; NSE-50001 – SEBI Registration no.: INZ000038238 Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross, Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase, Bengaluru - 560078, Karnataka, India. For any complaints pertaining to securities broking please write to <a href="complaints@zerodha.com">complaints@zerodha.com</a>, for DP related to <a href='dp@zerodha.com'>dp@zerodha.com</a>. Please ensure you carefully read the Risk Disclosure Document as prescribed by SEBI | ICF</p>

            <p>Procedure to file a complaint on <a href='https://scores.sebi.gov.in/'>SEBI SCORES</a>: Register on SCORES portal. Mandatory details for filing complaints on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits: Effective Communication, Speedy redressal of the grievances</p>

            <p><a href='https://smartodr.in/login'>Smart Online Dispute Resolution</a> | <a href="*">Grievances Redressal Mechanism</a></p>

            <p>Investments in securities market are subject to market risks; read all the related documents carefully before investing.</p>

            <p>Attention investors: 1 Stock brokers can accept securities as margins from clients only by way of pledge in the depository system w.e.f September 01, 2020. 2) Update your e-mail and phone number with your stock broker / depository participant and receive OTP directly from depository on your e-mail and/or mobile number to create pledge. 3) Check your securities / MF / bonds in the consolidated account statement issued by NSDL/CDSL every month.</p>

            <p>"Prevent unauthorised transactions in your account. Update your mobile numbers/email IDs with your stock brokers. Receive information of your transactions directly from Exchange on your mobile/email at the end of the day. Issued in the interest of investors. KYC is one time exercise while dealing in securities markets - once KYC is done through a SEBI registered intermediary (broker, DP, Mutual Fund etc.), you need not undergo the same process again when you approach another intermediary." Dear Investor, if you are subscribing to an IPO, there is no need to issue a cheque. Please write the Bank account number and sign the IPO application form to authorize your bank to make payment in case of allotment. In case of non allotment the funds will remain in your bank account. As a business we don't give stock tips, and have not authorized anyone to trade on behalf of others. If you find anyone claiming to be part of Zerodha and offering such services, please <Link onClick={go} to={"/support"}>create a ticket here.</Link></p>
            </div>
            <div className="px-lg-5 d-flex flex-wrap justify-content-around">
                <a href="*" className='text-muted order-1 m-2' style={{color:"black"}}>NSE </a>
                <a href="*" className='text-muted order-2 m-2' style={{color:"black"}}>BSE </a>
                <a href="*" className='text-muted order-3 m-2' style={{color:"black"}}>MCX </a>
                <a href="*" className='text-muted order-4 m-2' style={{color:"black"}}>Terms & conditions </a>
                <a href="*" className='text-muted order-5 m-2' style={{color:"black"}}>Policies & procedures </a>
                <a href="*" className='text-muted order-6 m-2' style={{color:"black"}}>Privacy policy </a>
                <a href="*" className='text-muted order-7 m-2' style={{color:"black"}}>Disclosure </a>
                <a href="*" className='text-muted order-8 m-2' style={{color:"black"}}>For investor's attention </a>
                <a href="*" className='text-muted order-9 m-2' style={{color:"black"}}>Investor charter</a>
            </div>
        </div>
        </footer>
    );
}

export default Footer;
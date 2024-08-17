import React from 'react';
import Hero from './hero';
import RightSection from './rightSection';
import LeftSection from './leftSection';
import Universe from './Universe';
function ProductPage() {
    return ( 
        <>
      
        <Hero/>
        <hr/>
        <LeftSection image={"images/kite.png"} title={"Kite"} para={"Our ultra-fast flagship trading platform with streaming market data, advanced charts, an elegant UI, and more. Enjoy the Kite experience seamlessly on your Android and iOS devices."} a1={"Try demo"} h1={"*"} a2={"Learn More"} h2={"&"}/>

        <RightSection image={"images/console.png"} title={"Console"} para={"The central dashboard for your Zerodha account. Gain insights into your trades and investments with in-depth reports and visualisations."} a1={"Learn more"} h1={"*"} />

        <LeftSection image={"images/coin.png"} title={"Coin"} para={"Buy direct mutual funds online, commission-free, delivered directly to your Demat account. Enjoy the investment experience on your Android and iOS devices."} a1={"Coin"} h1={"*"}/>

        <RightSection image={"images/kiteconnect.png"} title={"Kite Connect API"} para={"Build powerful trading platforms and experiences with our super simple HTTP/JSON APIs. If you are a startup, build your investment app and showcase it to our clientbase."} a1={"Kite Connect"} h1={"*"} />

        <LeftSection image={"images/varsity.png"} title={"Varsity Mobile"} para={"An easy to grasp, collection of stock market lessons with in-depth coverage and illustrations. Content is broken down into bite-size cards to help you learn on the go."}/>
        <Universe/>
        </>

     );
}

export default ProductPage;
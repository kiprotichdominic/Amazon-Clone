import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className='home'>
      <img
        className='home__image'
        src='https://images-na.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg'
        alt=''
      />
      <div className='home__row'>
        <Product
          id='1'
          title='livho 2 Pack Blue Light Blocking Glasses, Computer Reading/Gaming/TV'
          price={7.5}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/51VSlutsg9L._AC_SL1080_.jpg'
        />
        <Product
          id='2'
          title="Men's Polar Fleece Jacket, Amazon Exclusive"
          price={16.2}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/91Cx6VJTmtL._AC_UY879_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='3'
          title="Starter Men's Double Knit Colorblocked Jogger Sweatpants, Amazon Exclusive"
          price={18.14}
          rating={5}
          image='https://m.media-amazon.com/images/I/71lgtdzboJL._AC_SX522._SX._UX._SY._UY_.jpg'
        />
        <Product
          id='4'
          title='Wireless Earbuds TaoTronics SoundLiberty 80, Bluetooth 5.0 Earbuds with AI Noise Canceling Mic'
          price={63.99}
          rating={4}
          image='https://images-na.ssl-images-amazon.com/images/I/61BkdV%2Bu-6L._AC_SL1500_.jpg'
        />
        <Product
          id='5'
          title='Kasa Smart HS200P3 Wi-Fi Switch by TP-Link (3-Pack) Control Lighting from Anywhere'
          price={36.99}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/61VvqSdT5OL._AC_SL1500_.jpg'
        />
      </div>
      <div className='home__row'>
        <Product
          id='6'
          title='SAMSUNG QN32Q50RAFXZA Flat 32" QLED 4K 32Q50 Series Smart TV'
          price={447.99}
          rating={3}
          image='https://images-na.ssl-images-amazon.com/images/I/51NKhnjhpGL._AC_SL1024_.jpg'
        />
      </div>
    </div>
  );
}

export default Home;

import React from "react";
import facebookLogo from "../assets/Logo/facebookLogo.svg";
import instagramLogo from "../assets/Logo/instagramLogo.svg";
import tiktokLogo from "../assets/Logo/tiktokLogo.svg";
import GoogleLogo from "../assets/Logo/GoogleLogo.svg";
import SnapchatLogo from "../assets/Logo/snapchatLogo.svg";

function NewOrder() {
  return (
    <div className="section p-16  rounded-lg mt-16 ml-12">
      <div className="text-2xl mb-4"> 01 Choose your Platform</div>
      <div className="orders flex justify-center bg-white rounded-lg p-12 ">
        <div className="order w-32 text-center mx-6 flex flex-col items-center">
          <div className="order-header-name-icon mb-2">
            <img src={facebookLogo} alt="facebook-logo" />
          </div>
          <div className="order-header-name-text mb-8 text-base font-semibold">
            Facebook
          </div>
          <div className="order-button  bg-main_red text-white px-2 py-1 rounded-lg cursor-pointer w-32 text-xl">
            Order
          </div>
        </div>
        <div className="order w-32 text-center mx-6 flex flex-col items-center">
          <div className="order-header-name-icon mb-2">
            <img src={tiktokLogo} alt="tiktok" />
          </div>
          <div className="order-header-name-text mb-8 font-semibold">
            TikTok
          </div>
          <div className="order-button  bg-main_red text-white px-2 py-1 rounded-lg cursor-pointer w-32 text-xl">
            Order
          </div>
        </div>
        <div className="order w-32 text-center mx-6 flex flex-col items-center">
          <div className="order-header-name-icon mb-2">
            <img src={instagramLogo} alt="Instagram" />
          </div>
          <div className="order-header-name-text mb-8 font-semibold">
            Instagram
          </div>
          <div className="order-button  bg-main_red text-white px-2 py-1 rounded-lg cursor-pointer w-32 text-xl">
            Order
          </div>
        </div>
        <div className="order w-32 text-center mx-6 flex flex-col items-center">
          <div className="order-header-name-icon mb-2">
            <img src={GoogleLogo} alt="Google" />
          </div>
          <div className="order-header-name-text mb-8 font-semibold">
            Google
          </div>
          <div className="order-button  bg-main_red text-white px-2 py-1 rounded-lg cursor-pointer w-32 text-xl">
            Order
          </div>
        </div>
        <div className="order w-32 text-center mx-6 flex flex-col items-center">
          <div className="order-header-name-icon mb-2">
            <img src={SnapchatLogo} alt="snapchat" />
          </div>
          <div className="order-header-name-text mb-8 font-semibold">
            snapchat
          </div>
          <div className="order-button  bg-main_red text-white px-2 py-1 rounded-lg cursor-pointer w-32 text-xl">
            Order
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewOrder;

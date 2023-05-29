import React from "react";
import adzmania from "./images/adzmania-home.svg";
import hero from "./images/hero.svg";
import about from "./images/about.svg";
import { UsersIcon } from "@heroicons/react/20/solid";
import { RocketLaunchIcon } from "@heroicons/react/20/solid";
import { BanknotesIcon } from "@heroicons/react/20/solid";
import { WrenchScrewdriverIcon } from "@heroicons/react/20/solid";
import { Bars3Icon } from "@heroicons/react/24/outline";
import meta from "../assets/Logo/metaLogo.svg";
import tiktok from "../assets/Logo/tiktokLogo.svg";
import snapchat from "../assets/Logo/snapchatLogo.svg";
import google from "../assets/Logo/GoogleLogo.svg";

import { Link } from "react-router-dom";

const home = () => {
  return (
    <div className=" ">
      <header className=" w-full max-w-7xl mx-auto  ">
        <div className="flex justify-between items-center mx-4 md:mx-0">
          <div className=" ">
            <img src={adzmania} alt="logo" className=" h-12 md:ml-5  mt-4" />
          </div>

          <div className="mr-5 text-black capitalize mt-5 ">
            <div className="md:hidden">
              <Bars3Icon className="h-8 w-8 text-red-600" />
            </div>

            <ul className="hidden md:block">
              <li className="inline-block lg:mr-8 mr-4">
                <a href="#home" className="hover:text-red-500">
                  Home
                </a>
              </li>
              <li className="inline-block lg:mr-8 mr-4">
                <a href="#about" className="hover:text-red-500">
                  About us
                </a>
              </li>
              <li className="inline-block lg:mr-8 mr-4">
                <a href="#services" className="hover:text-red-500">
                  services
                </a>
              </li>
              <li className="inline-block lg:mr-8 mr-4">
                <a href="#partners" className="hover:text-red-500">
                  partners
                </a>
              </li>

              <li className="inline-block mr-8">
                <Link
                  to="/signup"
                  href="#"
                  className="text-main_red bg-white border border-main_red transition-all rounded-2xl hover:text-white hover:bg-main_red py-3 px-8"
                >
                  Sign up
                </Link>
              </li>
              <li className="inline-block mr-8">
                <Link
                  to="/login"
                  href="#"
                  className="hover:text-main_red hover:bg-white border border-main_red transition-all rounded-2xl text-white bg-main_red py-3 px-8"
                >
                  Login
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </header>
      <section className="flex justify-between items-center md:px-32 px-16 mt-20www md:mt-32">
        <div className="md:w-2/3">
          <div className="md:text-4xl text-3xl font-bold text-black capitalize md:ml-5 leading-10 text-center md:text-left">
            Stand out with your social media{" "}
            <span className=" mt-4">
              advertising with <span className="text-main_red">Adzmania</span>
            </span>
            <p className=" text-base font-normal text-gray-600 mt-2">
              the perfect agent to create and manage your advertising accounts
            </p>
          </div>
          <div className="md:ml-8 text-center md:text-left mt-12 ">
            <Link
              to="/signup"
              href="#"
              className="hover:text-main_red  hover:bg-white border border-main_red transition-all rounded-full text-white bg-main_red py-3 px-8 "
            >
              Get started
            </Link>
          </div>
        </div>
        <div className="w-1/3 hidden md:block">
          <img src={hero} alt="hero" className="w-full" />
        </div>
      </section>
      <section id="services">
        <div className=" mx-auto w-full text-center  py-16 mt-32 bg-red-600">
          <div className="text-3xl font-bold text-white mx-auto">
            {" "}
            Innovative, Professional, and Passionate: <br /> AdzMania Delivers
            Exceptional Services
          </div>
          <p className="text-gray-200  font-normal mx-auto w-2/3 mt-4 ">
            To stay ahead of the competition and drive revenue growth,
            businesses require the expertise of a digital marketing professional
            - just like the team at AdzMania
          </p>
        </div>
      </section>
      <section className="flex justify-between items-center px-32 mt-32">
        <div className="md:w-1/2">
          <div className="text-4xl font-bold text-black capitalize ml-5 leading-10">
            All Our Members Are Absolutely Professionals
            <p className=" text-base font-normal text-gray-600 mt-4">
              We are a passionate team brimming with innovative ideas. Our joy
              comes from supporting our clients by delivering top-quality
              services
            </p>
          </div>
          <div className="ml-5  grid-cols-2 mt-5  grid">
            <div className="">
              <div className="text-main_red text-4xl">+150</div>
              <div className="text-gray-500">Happy Clients</div>
            </div>
            <div className="">
              <div className="text-main_red text-4xl">+5 </div>
              <div className="text-gray-500"> Years of experience</div>
            </div>{" "}
            <div className="">
              <div className="text-main_red text-4xl mt-5">+50</div>
              <div className="text-gray-500">Business Partner</div>
            </div>
          </div>
        </div>

        <div className="md:w-1/2 md:block hidden">
          <img src={about} alt="about" className="w-full" />
        </div>
      </section>
      <section className=" mt-32" id="about">
        <div className="text-4xl font-bold text-black text-center capitalize  leading-10 mx-auto  w-7/12">
          We Can Improve Your Business Performance And Gain More Customers
        </div>
      </section>
      <section className=" px-32 mt-32    grid lg:grid-cols-2 grid-cols-1 gap-3  ">
        <div className="group transition-all p-16 shadow text-black bg-white rounded-lg hover:bg-main_red hover:text-white text-center cursor-pointer  ">
          <div className="    text-main_red group-hover:text-white">
            <UsersIcon className="h-12 w-12 mx-auto" />
          </div>
          <div className="text-2xl mt-5 font-bold  capitalize ml-5 leading-10">
            Reach More Customers{" "}
          </div>
          <div className="text-base font-normal  mt-4">
            We can help you reach more customers by creating and managing your
            social media accounts
          </div>
        </div>
        <div className="group transition-all p-16 shadow text-black bg-white rounded-lg hover:bg-main_red hover:text-white text-center cursor-pointer  ">
          <div className="    text-main_red group-hover:text-white">
            <RocketLaunchIcon className="h-12 w-12 mx-auto" />
          </div>
          <div className=" text-2xl mt-5 font-bold  capitalize ml-5 leading-10">
            Increase Your Sales{" "}
          </div>
          <div className="text-base font-normal  mt-4">
            We can help you increase your sales by creating and managing your
            social media accounts
          </div>
        </div>
        <div className="group transition-all p-16 shadow text-black bg-white rounded-lg hover:bg-main_red hover:text-white text-center cursor-pointer  ">
          <div className="    text-main_red group-hover:text-white">
            <BanknotesIcon className="h-12 w-12 mx-auto" />
          </div>
          <div className="text-2xl mt-5 font-bold  capitalize ml-5 leading-10">
            Increase Your Revenue{" "}
          </div>
          <div className="text-base font-normal  mt-4">
            We can help you increase your revenue by creating and managing your
            social media accounts
          </div>
        </div>
        <div className="group transition-all p-16 shadow text-black bg-white rounded-lg hover:bg-main_red hover:text-white text-center cursor-pointer  ">
          <div className="text-main_red group-hover:text-white ">
            <WrenchScrewdriverIcon className="h-12 w-12 mx-auto " />
          </div>
          <div className="text-2xl mt-5 font-bold  capitalize ml-5 leading-10">
            Customized services{" "}
          </div>
          <div className="text-base font-normal  mt-4">
            We can help you customize your services by creating and managing
            your social media accounts
          </div>
        </div>
      </section>
      <section className=" mt-32" id="partners">
        <div className="section-header">
          <h2 className="text-4xl font-bold text-black text-center capitalize  leading-10 mx-auto  w-7/12">
            Our Partners
          </h2>
        </div>
        <div className="mx-auto w-8/12 flex items-center justify-between mt-16">
          <div className="   ">
            <img src={meta} alt="meta" />
          </div>
          <div className=" ">
            <img src={google} alt="google" />
          </div>
          <div className="  ">
            <img src={tiktok} alt="tiktok" />
          </div>
          <div className="  ">
            <img src={snapchat} alt="snapchat" />
          </div>
        </div>
      </section>
      <section>
        <div className=" mx-auto w-full text-center  py-16 mt-32 bg-red-600">
          <div className="text-3xl font-bold text-white mx-auto">
            {" "}
            Make your decision now to see the amazing final project{" "}
          </div>
          <p className="text-gray-200  font-normal mx-auto w-2/3 mt-4 ">
            To stay ahead of the competition and drive revenue growth,
            businesses require the expertise of a digital marketing professional
            - just like the team at AdzMania
          </p>
          <div className="sign mt-10">
            <Link
              to="/signup"
              href="#"
              className="text-main_red  bg-white border hover:border-main_red transition-all rounded-full hover:text-white hover:bg-main_red py-3 px-8 "
            >
              Get started
            </Link>
          </div>
        </div>
      </section>

      <footer className="bg-white dark:bg-gray-900">
        <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
          <div className="md:flex md:justify-between">
            <div className="mb-6 md:mb-0">
              <a href="#" className="flex items-center">
                <img src={adzmania} className="h-32" alt="FlowBite Logo" />
              </a>
            </div>
            <div className="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Contact Us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      larmo@agency.ma
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      +2120663054819
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Follow us
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline ">
                      instagram
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Facebook
                    </a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                  Legal
                </h2>
                <ul className="text-gray-600 dark:text-gray-400 font-medium">
                  <li className="mb-4">
                    <a href="#" className="hover:underline">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="#" className="hover:underline">
                      Terms &amp; Conditions
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <div className="sm:flex sm:items-center sm:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
              © 2023{" "}
              <a href="#" className="hover:underline">
                Adzmania™
              </a>
              . All Rights Reserved.
            </span>
            <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Facebook page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z"
                    clipRule="evenodd"
                  />
                </svg>
                <span className="sr-only">Instagram page</span>
              </a>
              <a
                href="#"
                className="text-gray-500 hover:text-gray-900 dark:hover:text-white"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
                <span className="sr-only">Twitter page</span>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default home;

import React from "react";
import { TbTruckDelivery, TbHeadphones, TbRefresh, TbWallet } from "react-icons/tb";
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <React.Fragment>
      <footer>

        {/* Features Div (Start) */}
        <div className="bg-slate-100">
          <div className="container py-16">
            <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-10 md:divide-x-2 divide-gray-600">

              <div className="flex items-center justify-center space-x-6">
                <div>
                  <TbTruckDelivery size={60} strokeWidth={1.5} className="stroke-web-ascent-dark" />
                </div>
                <div>
                  <h1 className="font-semibold text-lg pb-1">Free Shipping</h1>
                  <p className="text-sm leading-relaxed">Free shipping on all US order or <br />order above $99</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6">
                <div>
                  <TbHeadphones size={60} strokeWidth={1.5} className="stroke-web-ascent-dark" />
                </div>
                <div>
                  <h1 className="font-semibold text-lg pb-1">Online Support 24/7</h1>
                  <p className="text-sm leading-relaxed">Free shipping on all US order or <br />order above $99</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6">
                <div>
                  <TbRefresh size={60} strokeWidth={1.5} className="stroke-web-ascent-dark" />
                </div>
                <div>
                  <h1 className="font-semibold text-lg pb-1">7 Days Return</h1>
                  <p className="text-sm leading-relaxed">Free shipping on all US order or <br />order above $99</p>
                </div>
              </div>

              <div className="flex items-center justify-center space-x-6">
                <div>
                  <TbWallet size={60} strokeWidth={1.5} className="stroke-web-ascent-dark" />
                </div>
                <div>
                  <h1 className="font-semibold text-lg pb-1">Payment Secure</h1>
                  <p className="text-sm leading-relaxed">Free shipping on all US order or <br />order above $99</p>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Features Div (End) */}

        {/* Footer Content Div (Start) */}
        <div className="bg-slate-900">
          <div className="container md:py-16 sm:py-10">
            <div className="grid md:grid-cols-6 sm:grid-cols-1 gap-10">

              <div className="md:col-span-1 md:order-1 sm:order-2">
                <div className="space-y-7 text-left">
                  <h1 className="font-semibold text-white text-xl uppercase tracking-widest">Information</h1>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-400 hover:text-white text-base tracking-widest">About us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-base tracking-widest">Contact us</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-base tracking-widest">Privacy Policy</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-base tracking-widest">Terms & Conditions</a></li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-4 md:order-2 sm:order-1">
                <div className="space-y-7 md:text-center sm:text-left md:w-7/12 sm:w-full mx-auto">
                  <h1 className="font-semibold text-white text-xl uppercase tracking-widest leading-relaxed">Join Our Community</h1>
                  <p className="text-gray-200 text-sm">Subscribe to receive updates, access to exclusive deals, and more</p>
                  <div className="flex items-center justify-center space-x-2">
                    <input type="email" className="px-4 py-3 border text-sm outline-web-ascent border-slate-500 font-medium bg-transparent w-full" placeholder="Your Email Address" />
                    <button className="btn-primary-md">Subscribe</button>
                  </div>
                  <ul className="flex space-x-3 items-center md:justify-center sm:justify-start">
                    <li><a href="#" className="footer-social-media"><FaFacebookF size={20} className="fill-white" /></a></li>
                    <li><a href="#" className="footer-social-media"><FaTwitter size={20} className="fill-white" /></a></li>
                    <li><a href="#" className="footer-social-media"><FaLinkedinIn size={20} className="fill-white" /></a></li>
                    <li><a href="#" className="footer-social-media"><FaInstagram size={20} className="fill-white" /></a></li>
                  </ul>
                </div>
              </div>

              <div className="md:col-span-1 order-3">
                <div className="space-y-7 md:text-right sm:text-left">
                  <h1 className="font-semibold text-white text-xl uppercase tracking-widest">Quick Links</h1>
                  <ul className="space-y-4">
                    <li><a href="#" className="text-gray-400 hover:text-white text-base tracking-widest">My Account</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-base tracking-widest">Blogs</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-base tracking-widest">Characters</a></li>
                    <li><a href="#" className="text-gray-400 hover:text-white text-base tracking-widest">Customer Support</a></li>
                  </ul>
                </div>
              </div>

            </div>
          </div>
        </div>
        {/* Footer Content Div (End) */}

        {/* Copyright Div (Start) */}
        <div className="py-4 bg-black">
          <div className="container text-center">
            <p className="text-slate-100 text-xs tracking-wider leading-relaxed">Copyright © 2023 Ecommerce rights reserved</p>
          </div>
        </div>
        {/* Copyright Div (End) */}

      </footer>
    </React.Fragment>
  );
}

export default Footer;
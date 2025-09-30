import { FaInstagram, FaLinkedinIn, FaXTwitter } from "react-icons/fa6";
import { assets } from "../assets/assets";

export const Footer = () => {
  return (
    <>
      <div className="w-full max-w-7xl mx-auto px-6 md:px-10 lg:px-20 bg-[#F5F5F5] font-poppins selection:bg-[#C2F578] selection:text-black">
        <div className="block sm:flex justify-between w-full pt-20">
          <div className="sm:w-6/12 w-full">
            <a>
              <img src={assets.logo_img} className=" h-9 hidden sm:block" />
            </a>
            <div className="mt-4">
              <h2 className="font-semibold text-[#3E3E3E] text-lg">
                Subscribe
              </h2>
              <p className="font-light text-[#88868d] text-sm mt-2">
                Subscribe for the latest courses, tips, and updates. Join our
                learning community today!
              </p>
              <div className="bg-[#ffffff] w-fit rounded-lg p-2 mt-5 flex items-center">
                <input
                  type="text"
                  placeholder="Enter your email"
                  className="rounded-lg px-4 py-2 outline-none w-72"
                />
                <button className="bg-[#C2F578] rounded-lg px-4 py-3 h-full ml-2 text-xs font-semibold text-[#373636]">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          <div className="sm:3/12 sm:m-0 my-10">
            <h3 className="font-semibold text-[#373636] mb-2">
              ClassIQ Bussiness
            </h3>
            <ul className="text-[#373636] text-sm space-y-3">
              <li>Teach on ClassIQ</li>
              <li>Teaching Tools</li>
              <li>ClassIQ app</li>
              <li>Contact us</li>
            </ul>
          </div>
          <div className="sm:3/12">
            <h3 className="font-semibold text-[#373636] mb-2">Carrers</h3>
            <ul className="text-[#373636] text-sm space-y-3">
              <li>Blog</li>
              <li>Affiliate</li>
              <li>Support</li>
            </ul>
          </div>
        </div>
        <hr className="border-b border-[#EAEDEB] mt-10" />
        <div className="flex flex-col md:flex-row gap-y-4 justify-between items-center py-8">
          <p className="text-[#373636] text-sm text-center">
            © 2024 ClassIQ. All rights reserved.
          </p>
          <div className="space-x-3 flex">
            <a href="" className="bg-[#C2F578] p-2 rounded-sm">
              <FaInstagram />
            </a>
            <a href="" className="bg-[#C2F578] p-2 rounded-sm">
              <FaXTwitter />
            </a>
            <a href="" className="bg-[#C2F578] p-2 rounded-sm">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

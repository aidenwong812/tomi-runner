import React from "react";
import { FaGithub, FaTwitter } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";

const Footer = () => {
  return (
    <div className="border-t border-primary-300 bg-primary-200 py-10">
      <div className="container mx-auto flex justify-between">
        <div className="space-y-4">
          <div className="flex space-x-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-md bg-primary-100">
              <div className="h-7 w-7 rounded-md bg-text-100 flex items-center justify-center">
              <IoIosRocket className="text-primary-200" size={20} />
              </div>
            </div>
            <div>
              <h1 className="text-sm font-medium text-text-100">SlickCI</h1>
              <h3 className="text-sm text-text-200">For GitHub Actions</h3>
            </div>
          </div>
          <p className="text-sm text-text-200 font-medium">Managed high-performance runners for Github Actions</p>
          <div className="flex items-center space-x-4">
            <FaTwitter className="text-text-200 hover:text-text-100" size={16} />
            <FaGithub className="text-text-200 hover:text-text-100" size={16} />
          </div>
        </div>
        <div className="grid grid-cols-2 gap-24">
          <div className="space-y-3">
            <h3 className="text-text-100 text-sm font-medium">Product</h3>
            <ul className="space-y-2">
              <li className="text-text-200 text-sm">Features</li>
              <li className="text-text-200 text-sm">Pricing</li>
              <li className="text-text-200 text-sm">Documentation</li>
            </ul>
          </div>
          <div className="space-y-3">
            <h3 className="text-text-100 text-sm font-medium">Company</h3>
            <ul className="space-y-2">
              <li className="text-text-200 text-sm">About</li>
              <li className="text-text-200 text-sm">Contact</li>
              <li className="text-text-200 text-sm">Careers</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

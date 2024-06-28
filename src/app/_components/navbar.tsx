import Link from "next/link";
import React from "react";
import { FaGithub } from "react-icons/fa";
import { IoIosRocket } from "react-icons/io";
import Connect from "./connect-button";

const NavBar = () => {
  return (
    <div className="container mx-auto flex w-full items-center justify-between py-2">
      <div className="flex items-center space-x-12">
        <div className="flex space-x-2">
          <Link href='/' className="h-10 w-10 rounded-md bg-primary-100 flex items-center justify-center">
            <div className="h-8 w-8 rounded-md bg-text-100 flex items-center justify-center">
              <IoIosRocket className="text-primary-200" size={20} />
            </div>
          </Link>
          <div>
            <h1 className="font-medium text-text-100 text-sm">SlickCI</h1>
            <h3 className="text-sm text-text-200">For GitHub Actions</h3>
          </div>
        </div>
        <ul className="flex items-center gap-8 text-sm text-text-200">
          <li>Home</li>
          <Link href='/profile'>Profile</Link>
          {/* <li>Services</li>
          <li>Contact</li> */}
        </ul>
      </div>
      <div className="flex items-center gap-4">
        <Connect />
        <Link href='https://github.com/apps/slickci/installations/select_target' target="_blank" className="flex items-center justify-center gap-2 rounded-lg bg-primary-100 p-3 hover:bg-bg-300">
          <FaGithub className="inline" size={16} color="white" />
          <p className="rounded-md text-xs text-text-100">
            Add a Github Repo
          </p>
        </Link>
      </div>
    </div>
  );
};

export default NavBar;

import Image from "next/image";
import React from "react";
import heroImage from "@/assets/static/hero.png";
import { AiOutlineDatabase } from "react-icons/ai";
import { VscClearAll } from "react-icons/vsc";
import { IoKeyOutline } from "react-icons/io5";
import { FaLock } from "react-icons/fa";
import { FaUnlock } from "react-icons/fa";



const Info = () => {
  return (
    <div className="container mx-auto space-y-24 py-24">
      <div className="space-y-6 text-center">
        <h1 className="text-4xl text-text-100">
          Keep GitHub Actions, just not their runners
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-text-200">
          SlickCI for GitHub Actions gives you access to a secure and fast
          runner fleet. Simply change 1 line in your configuration file and
          you&apos;re ready to be more productive
        </p>
      </div>
      <div className="flex items-center justify-around gap-48">
        <Image src={heroImage} alt="hero" width={500} height={500} />
        <div className="space-y-4">
          <h3 className="text-3xl text-text-100">Incredibly easy to set up</h3>
          <p className="font-medium text-text-200">
            Installing SlickCI for GitHub Actions can&apos;t be easier. You simply
            sign in with your GitHub Account and authorize SlickCI to access
            your organization. Now you can add SlickCI for GitHub Actions where
            ever you see the runs-on property.
          </p>
        </div>
      </div>
      <div className="flex items-center justify-around gap-48">
        <div className="space-y-4">
          <h3 className="text-3xl text-text-100">
            Your security, our priority
          </h3>
          <p className="font-medium text-text-200">
            We believe people who use our service expect us to store their data
            securely, respect their business secrets and have their data
            security a primary priority. We pledge to keep your code secret and
            not accessed by anyone, including us.
          </p>
        </div>
        <div className="w-full space-y-8">
          <div className="flex items-center space-x-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-bg-300">
              <div className="h-10 w-10 rounded-md bg-primary-200 flex items-center justify-center">
                <AiOutlineDatabase className="text-text-100" size={18} />
              </div>
            </div>
            <p className="text-lg font-medium text-text-100">Isolated VM</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-bg-300">
            <div className="h-10 w-10 rounded-md bg-primary-200 flex items-center justify-center">
                <VscClearAll className="text-text-100" size={18} />
              </div>
            </div>
            <p className="text-lg font-medium text-text-100">Complete wipe after every job</p>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex h-11 w-11 items-center justify-center rounded-md bg-bg-300">
            <div className="h-10 w-10 rounded-md bg-primary-200 flex items-center justify-center">
                <IoKeyOutline className="text-text-100" size={18} />
              </div>
            </div>
            <p className="text-lg font-medium text-text-100">Heavily audited access</p>
          </div>
        </div>
      </div>
      <div className="flex gap-32 pt-8">
        <div className="flex flex-col justify-center w-full items-center space-y-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-bg-300">
            <div className="h-16 w-16 rounded-md bg-primary-200 flex items-center justify-center">
              <FaLock className="text-text-100" size={24} />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h4 className="text-2xl font-semibold text-accent-100">Current State: Permissioned</h4>
            <p className="text-text-200">
              Access is currently centralized and monopolized, by big players like AWS, Azure, and GCP.
            </p>
          </div>
        </div>
        <div className="flex flex-col justify-center w-full items-center space-y-4">
          <div className="flex h-20 w-20 items-center justify-center rounded-md bg-bg-300">
            <div className="h-16 w-16 rounded-md bg-primary-200 flex items-center justify-center">
              <FaUnlock className="text-text-100" size={24} />
            </div>
          </div>
          <div className="text-center space-y-2">
            <h4 className="text-2xl font-semibold text-primary-200">Future State: Permissionless</h4>
            <p className="text-text-200">
              We are on our way to creating a permissionless system, promoting open and unrestricted access.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;

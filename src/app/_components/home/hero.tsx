import React from "react";
import Image from "next/image";
import heroImage from "~/assets/static/hero.png";
import weset from "~/assets/logos/weset.webp";
import pxm from "~/assets/logos/pxm.svg";
import veme from "~/assets/logos/veme.svg";
import mygeotokens from "~/assets/logos/mygeotokens.gif";
import gang from "~/assets/logos/gang.png";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

const Hero = () => {
  return (
    <>
      <div className="container mx-auto flex items-center justify-between pb-20 pt-24">
        <div className="space-y-8">
          <div className="flex items-center space-x-4 rounded bg-bg-300 p-1 md:w-3/5 shadow shadow-primary-200">
            <div className="rounded bg-primary-200 px-3">
              <span className="text-xs text-text-100">WHAT&apos;S NEW</span>
            </div>
            <p className="text-text-200">
              Launching SlickCI for GitHub Actions
            </p>
          </div>
          <h1 className="text-6xl font-medium text-text-100 md:w-2/3">
            Make GitHub Actions Cheaper
          </h1>
          <p className="text-lg text-text-100">
          Easy deployment for CI workflows to decentralised cloud infrastructure
            <span className="mt-2 block font-semibold">
              Change 1 line, get 2x faster and cheaper builds.
            </span>
          </p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
            <Link href='https://github.com/apps/slickci/installations/select_target' target="_blank" className="rounded-lg bg-primary-100 flex items-center justify-center p-3 gap-2 hover:bg-bg-300">
                  <FaGithub className="inline" size={16} color="white" />
                <p className="rounded-md text-xs text-text-100">
                  Get Started for Free
                </p>
              </Link>
              <p className="rounded-md p-3 text-sm text-text-100">
                Read the docs
              </p>
            </div>
            <p className="text-xs text-text-200">
              Free trial minutes · No CC required
            </p>
          </div>
        </div>
        <div>
          <Image
            src={heroImage}
            alt="github-actions"
            width={500}
            height={500}
          />
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center justify-center gap-8">
        <h5 className="text-text-200 text-sm">
          SLICKCI IS SOON TO BE USED BY COMPANIES WORLDWIDE
        </h5>
        <div className="flex items-center gap-24">
          <Image
            src={weset}
            alt="github-actions"
            width={100}
            height={100}
          />
          <Image
            src={mygeotokens}
            alt="github-actions"
            width={125}
            height={125}
          />
          <Image
            src={pxm as string}
            alt="github-actions"
            width={75}
            height={75}
          />
          <Image
            src={veme as string}
            alt="github-actions"
            width={100}
            height={100}
          />
          <Image
            src={gang}
            alt="github-actions"
            width={100}
            height={100}
          />
        </div>
      </div>
    </>
  );
};

export default Hero;

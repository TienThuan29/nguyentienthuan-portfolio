"use client";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@heroui/react";
import {
  FacebookBrandIcon,
  GitHubBrandIcon,
  LinkedInBrandIcon,
  MapIcon,
  SparkIcon,
} from "@/app/components/svg-icons";
import { portfolioLinks } from "@/lib/portfolio-data";

const HeroSection = () => {
  const socialLinks = [
    {
      href: portfolioLinks.github,
      label: "GitHub",
      icon: <GitHubBrandIcon className="size-[18px] text-primary" />,
    },
    {
      href: portfolioLinks.linkedin,
      label: "LinkedIn",
      icon: <LinkedInBrandIcon className="size-[18px] text-primary" />,
    },
    {
      href: portfolioLinks.facebook,
      label: "Facebook",
      icon: <FacebookBrandIcon className="size-[18px] text-primary" />,
    },
  ];

  return (
    <section>
      <div className="container">
        <div className="">
          <div className="w-full h-72">
            <Image
              src="/images/hero-sec/banner-bg-img.png"
              alt=""
              width={1080}
              height={267}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="border-x border-primary/10">
            <div className="relative flex flex-col xs:flex-row items-center xs:items-start justify-center xs:justify-between max-w-3xl mx-auto gap-10 xs:gap-3 px-4 sm:px-7 pt-22 pb-8 sm:pb-12">
              <div className="absolute top-0 transform -translate-y-1/2">
                <Image
                  src="/images/hero-sec/user-img.png"
                  alt="Nguyễn Tiến Thuận"
                  width={145}
                  height={145}
                  className="border-4 border-white rounded-full"
                />
                <span className="absolute bottom-2.5 right-5 w-4 h-4 bg-green-500 border-2 border-white rounded-full" />
              </div>
              <div className="flex flex-col gap-2 sm:gap-3 items-center text-center xs:items-start">
                <h1>Nguyễn Tiến Thuận</h1>
                <p className="text-violet-700 font-normal">
                  Software Engineer | Full-stack web &amp; AI research
                </p>
                <div className="flex items-center gap-2">
                  <MapIcon className="size-5 text-primary" />
                  <p className="text-primary">Vietnam</p>
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center gap-4">
                <div className="flex items-center gap-2">
                  {socialLinks.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={item.label}
                      className="w-fit p-2.5 sm:p-3.5 hover:bg-primary/5 border border-primary/10 rounded-full"
                    >
                      {item.icon}
                    </Link>
                  ))}
                </div>
                <Link href={portfolioLinks.email}>
                  <Button className="h-auto rounded-full p-0.5! bg-gradient-to-r from-[#9282F8] to-[#F3CA4D]">
                    <span className="flex items-center gap-3 bg-primary hover:bg-gradient-to-r from-[#9282F8] to-[#F3CA4D] py-2.5 px-5 rounded-full">
                      <SparkIcon className="h-3.5 w-[14px] text-white" />
                      <span className="text-sm sm:text-base font-semibold text-white">
                        Get in touch
                      </span>
                    </span>
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;

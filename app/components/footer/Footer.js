"use client";
import React from "react";
import Link from "next/link";
import { useTheme } from "next-themes";
import { FaTiktok, FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";

const categoriesLinks = [
  {
    key: "1",
    label: "Graphics & Design ",
    link: "/link",
  },
  {
    key: "2",
    label: "Digital Marketing",
    link: "/link",
  },
  {
    key: "3",
    label: "Writing & Translation ",
    link: "/link",
  },
  {
    key: "4",
    label: "Video & Animation",
    link: "/link",
  },
  {
    key: "5",
    label: "Music & Audio",
    link: "/link",
  },
  {
    key: "6",
    label: "Fiverr Logo Maker",
    link: "/link",
  },
  {
    key: "6",
    label: "Programming & Tech ",
    link: "/link",
  },
  {
    key: "7",
    label: "Data",
    link: "/link",
  },
  {
    key: "8",
    label: "Business",
    link: "/link",
  },
  {
    key: "9",
    label: "Lifestyle",
    link: "/link",
  },
  {
    key: "10",
    label: "Photography",
    link: "/link",
  },
  {
    key: "11",
    label: " End-to-End Projects",
    link: "/link",
  },
  {
    key: "12",
    label: "Sitemap",
    link: "/link",
  },
];

const aboutLinks = [
  {
    key: "1",
    label: "Careers",
    link: "/link",
  },
  {
    key: "2",
    label: "Press & News",
    link: "/link",
  },
  {
    key: "3",
    label: "Partnerships",
    link: "/link",
  },
  {
    key: "4",
    label: "Privacy Policy ",
    link: "/link",
  },
  {
    key: "5",
    label: "Terms of Service",
    link: "/link",
  },
  {
    key: "6",
    label: "Intellectual Property Claims",
    link: "/link",
  },
  {
    key: "7",
    label: "Investor Relations",
    link: "/link",
  },
];

const supportLinks = [
  {
    key: "1",
    label: "Help & Support",
    link: "/link",
  },
  {
    key: "2",
    label: "Trust & Safety",
    link: "/link",
  },
  {
    key: "3",
    label: "Selling on Fiverr",
    link: "/link",
  },
  {
    key: "4",
    label: "Buying on Fiverr ",
    link: "/link",
  },
  {
    key: "5",
    label: "Fiverr Guides",
    link: "/link",
  },
  {
    key: "6",
    label: "Fiverr Workspace",
    link: "/link",
  },
  {
    key: "7",
    label: "Learn",
    link: "/link",
  },
];

const communityLinks = [
  {
    key: "1",
    label: "Customer Success Stories",
    link: "/link",
  },
  {
    key: "2",
    label: "Community Hub",
    link: "/link",
  },
  {
    key: "3",
    label: "Forum",
    link: "/link",
  },
  {
    key: "4",
    label: "Events",
    link: "/link",
  },
  {
    key: "5",
    label: "Blog",
    link: "/link",
  },
  {
    key: "6",
    label: "Influencers",
    link: "/link",
  },
  {
    key: "7",
    label: "Affiliates",
    link: "/link",
  },
  {
    key: "7",
    label: "Podcast",
    link: "/link",
  },
  {
    key: "7",
    label: "Invite a Friends",
    link: "/link",
  },
  {
    key: "7",
    label: "Become a Seller",
    link: "/link",
  },
  {
    key: "7",
    label: "Community Standards",
    link: "/link",
  },
];

const solutionsLinks = [
  {
    key: "1",
    label: "About Business Solutions",
    link: "/link",
  },
  {
    key: "2",
    label: "Fiverr Pro",
    link: "/link",
  },
  {
    key: "3",
    label: "Fiverr Certified",
    link: "/link",
  },
  {
    key: "4",
    label: "Fiverr Enterprise",
    link: "/link",
  },
  {
    key: "5",
    label: "ClearVoice",
    link: "/link",
  },
  {
    key: "6",
    label: "Working Not Working",
    link: "/link",
  },
  {
    key: "7",
    label: "Contact Sales",
    link: "/link",
  },
];

const Footer = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div className="footer p-8 mt-10 flex flex-col space-y-10">
      <div className="website-links grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        <div className="links-container flex flex-col space-y-4 text-xs">
          <span className="text-lg font-bold">Categoires</span>
          {categoriesLinks.map((item) => {
            return (
              <Link key={item.key} href={item.link}>
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="links-container flex flex-col space-y-4 text-xs">
          <span className="text-lg font-bold">About</span>
          {aboutLinks.map((item) => {
            return (
              <Link key={item.key} href={item.link}>
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="links-container flex flex-col space-y-4 text-xs">
          <span className="text-lg font-bold">Support & Education</span>
          {supportLinks.map((item) => {
            return (
              <Link key={item.key} href={item.link}>
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="links-container flex flex-col space-y-4 text-xs">
          <span className="text-lg font-bold">Community</span>
          {communityLinks.map((item) => {
            return (
              <Link key={item.key} href={item.link}>
                {item.label}
              </Link>
            );
          })}
        </div>
        <div className="links-container flex flex-col space-y-4 text-xs">
          <span className="text-lg font-bold">Business Solutions</span>
          {solutionsLinks.map((item) => {
            return (
              <Link key={item.key} href={item.link}>
                {item.label}
              </Link>
            );
          })}
        </div>
      </div>
      <div className="social-links flex flex-col lg:flex-row items-center justify-between pt-4 border-t-2 border-solid border-grey mt-4">
        <div className="flex flex-col sm:flex-row md:flex-row lg:flex-row items-center space-x-10  ">
          <img
            className=" mt-4 lg:mt-0 sm:mt-0 md:mt-0"
            src={theme === "dark" ? "/darkLogo.png" : "/lightLogo.png"}
            alt="logo"
          />
          <p >
            © Chainly International Ltd. 2023
          </p>
        </div>
        <div className="flex items-center space-x-6 mb-4 lg:mb-0">
          <div className="flex items-center space-x-4">
            <FaTiktok size={18} />
            <FaFacebook size={18} />
            <FaLinkedin size={18} />
            <FaInstagram size={18} />
          </div>
          <div className="h-7 border-l-2 border-solid border-grey"></div>
          <div className="flex items-center space-x-4">
            <TbWorld size={18} />
            <span>English</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;

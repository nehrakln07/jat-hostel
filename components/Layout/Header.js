import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import { Link as LinkScroll } from "react-scroll";
import ButtonOutline from "../misc/ButtonOutline.";
import Image from "next/image";

const MENU_OPTIONS =[{
  id: 1,
  lable: "Hostels",
  url: "hostels"
},{
  id: 2,
  lable: "Trusts",
  url: "trusts"
},{
  id: 3,
  lable: "Courses",
  url: "courses"
},{
  id: 4,
  lable: "Careers",
  url: "careers"
},{
  id: 5,
  lable: "Career Counselors",
  url: "career-counselors"
},{
  id: 6,
  lable: "About Us",
  url: "about-us"
},{
  id: 7,
  lable: "Feedback",
  url: "https://forms.gle/yC35ucEytdzRmMM38"
}]

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <div  className="relative bg-white">
          {
            !mobileMenuOpen ?
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
              <div className="flex justify-between cursor-pointer items-center border-b-2 border-gray-100 py-6">
                <div className="lg:w-0 lg:flex-1">
                  <Link href="/">
                      <Image
                        src="/assets/rjh_logo.png"
                        width={160}
                        height={40}
                        alt="RJH"
                      />
                    </Link>
                </div>
                <div className="-mr-2 -my-2 md:hidden">
                  <button onClick={()=>{setMobileMenuOpen(true)}} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"></path>
                      </svg>
                  </button>
                </div>
                <nav className="hidden md:flex space-x-10">
                  { 
                    MENU_OPTIONS.map((menu)=>{
                      return(
                        <Link key={menu.id} className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150" href={menu.lable === 'Feedback' ? `${menu.url}`: `/${menu.url}`}>{menu.lable}</Link>
                      )
                    })
                  }
                </nav>
              </div>
            </div>
            :
            <div lassName="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md">
              <div className="rounded-lg shadow-lg">
                <div className="rounded-lg shadow-xs bg-white ">
                <div className="flex items-center p-6 justify-between">
                      <div>
                      <Link href="/">
                      <Image
                        src="/assets/rjh_logo.png"
                        width={160}
                        height={40}
                        alt="RJH"
                      />
                    </Link>
                      </div>
                      <div className="-mr-2">
                        <button  onClick={()=>{setMobileMenuOpen(false)}} type="button" className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                          <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                            </svg>
                        </button>
                      </div>
                    </div>
                  <div className="py-6 px-5 space-y-6">
                    <ul className="w-full flex flex-wrap">
                    { 
                      MENU_OPTIONS.map((menu)=>{
                        return(
                          <li className="w-full p-2">
                            <Link key={menu.id} className="text-base leading-6 font-medium text-gray-500 hover:text-gray-900 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150" href={`/${menu.url}`}>{menu.lable}</Link>
                          </li>
                        )
                      })
                    }
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          }
        </div>
      </header>  
    </>
  );
};

export default Header;

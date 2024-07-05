'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';

gsap.registerPlugin(ScrollToPlugin);

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  // const [currentSection, setCurrentSection] = useState('home');

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // useEffect(() => {
  //   // Change body background color based on currentSection
  //   const body = document.querySelector('body');
  //   if (body) {
  //     if (currentSection === 'about' || currentSection === 'menu') {
  //       body.style.backgroundColor = '#177E89'; // teal color
  //     } else {
  //       body.style.backgroundColor = '#D9D9D9'; // default background color
  //     }
  //   }
  // }, [currentSection]);

  const scrollToHome = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#home' } });
    setIsOpen(!isOpen);
    // setCurrentSection('home');
  };
  const scrollToAbout = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#about' } });
    setIsOpen(!isOpen);
    // setCurrentSection('about');
  };
  const scrollToMenu = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#menu' } });
    setIsOpen(!isOpen);
    // setCurrentSection('menu');
  };
  const scrollToContact = () => {
    gsap.to(window, { duration: 2, scrollTo: { y: '#contact' } });
    setIsOpen(!isOpen);
    // setCurrentSection('contact');
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-whitesmoke overflow-x-hidden">
      {/* mobile nav */}
      <div className="h-[100px] w-screen flex justify-between items-center px-10 bg-off-black sm:hidden fixed z-10">
        {/* logo */}
        <div></div>
        {/* menu */}
        <button className="text-neutral-200" onClick={toggleMenu}>
          <svg width="31" height="30" viewBox="0 0 31 30" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M3.86768 22.5V20H26.3677V22.5H3.86768ZM3.86768 16.25V13.75H26.3677V16.25H3.86768ZM3.86768 10V7.5H26.3677V10H3.86768Z"
              fill="#363020"
            />
          </svg>
        </button>

        {/* nav menu open */}
        {isOpen && (
          <div className="fixed inset-0 z-50 bg-teal overflow-hidden sm:hidden">
            <div className="absolute right-10 top-[34px]">
              <button onClick={toggleMenu}>
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M8 23.75L6.25 22L13.25 15L6.25 8L8 6.25L15 13.25L22 6.25L23.75 8L16.75 15L23.75 22L22 23.75L15 16.75L8 23.75Z"
                    fill="#363020"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col h-screen justify-center items-center">
              <ul className="flex flex-col justify-between text-[128px] leading-[128px] text-whitesmoke font-dahlia tracking-tight space-y-1 items-center cursor-pointer">
                <li onClick={scrollToHome}>Home</li>
                <li onClick={scrollToAbout}>About</li>
                <li onClick={scrollToMenu}>Menu</li>
                <li onClick={scrollToContact}>Contact</li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* web nav */}
      <nav className="hidden sm:flex sm:justify-between sm:items-center sm:px-10 text-teal sm:w-[100%] fixed bg-whitesmoke h-[60px]">
        <div className="text-[40px] leading-[40px] font-dahliabc cursor-pointer" onClick={scrollToHome}>
          Tink&#8217;s Treats
        </div>
        <ul className="flex justify-center items-center space-x-5 h-[40px] text-[24px] cursor-pointer font-geistmono">
          <li className="hover:text-darkbrown" onClick={scrollToAbout}>
            about
          </li>
          <li className="hover:text-darkbrown" onClick={scrollToMenu}>
            menu
          </li>
          <li
            className="border-2 rounded-full px-3 border-teal hover:text-whitesmoke hover:bg-teal"
            onClick={scrollToContact}
          >
            contact
          </li>
        </ul>
      </nav>

      {/* main */}
      <div className="reletive w-screen h-screen overflow-hidden flex flex-col items-center" id="home">
        <div className="h-[95%] w-[95%] sm:flex flex-col justify-end items-start bg-[length:1440px_900px] 2xl:bg-[length:1840px_1300px] 2xl:bg-center bg-[url('/images/ttbg.jpg')] hidden mt-[60px]">
          <h4 className="hidden sm:block font-geistmono text-[30px] text-darkbrown tracking-tight leading-tight ml-5 2xl:ml-28">
            if you&apos;re curious...ask, won&apos;t know
          </h4>
          <h4 className="hidden sm:block font-geistmono text-[30px] text-darkbrown tracking-tight leading-tight ml-5 2xl:ml-28">
            until you try it
          </h4>
          <h1 className="font-dahlia text-[312px] leading-[260px] text-teal 2xl:mx-32 2xl:leading-[300px] 2xl:text-[360px] ml-1">
            Tink&#8217;sTreats
          </h1>
        </div>

        <h1 className="text-[192px] leading-[100px] absolute text-teal bottom-[350px] -left-[345px] rotate-90 font-dahlia sm:rotate-0 sm:left-10 sm:bottom-20 sm:text-[316px] sm:hidden">
          Tink&#8217;sTreats
        </h1>
      </div>
      {/* about */}
      <div
        className="w-screen h-screen overflow-hidden bg-teal flex flex-col items-start justify-center px-5 sm:items-center"
        id="about"
      >
        <h1 className="font-dahlia text-9xl text-darkbrown">About</h1>
        <p className="font-geistmono text-darkbrown text-[16px] sm:text-[32px] sm:text-center sm:w-[70%] leading-[24px] sm:leading-[32px] tracking-wider pt-10">
          Inspired by her family&apos;s appetite and occasional sweet tooth, I&apos;ona continued to experiment more and
          more with new baking recipes for them to enjoy. It was later suggested that she begin selling her baked goods,
          which much of the profits she has used to raise money for a series of financial missions that she has been
          grateful to achieve.
        </p>
        <p className="font-geistmono text-darkbrown text-[16px] sm:text-[32px] sm:text-center sm:w-[70%] leading-[24px] sm:leading-[32px] tracking-wider pt-5">
          Shoutout to all that have supported before and welcome all who are about to find their new favorite website :)
        </p>
      </div>
      {/* menu */}
      <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-teal" id="menu">
        <div className="w-[95%] h-[90%] sm:h-[85%] bg-whitesmoke rounded-xl flex flex-col items-center px-5 sm:mt-12">
          <h1 className="font-dahliamc text-teal tracking-tight leading-[50px] text-[56px] sm:text-[100px] sm:leading-[96px] pt-10">
            Homemade Desserts
          </h1>
          <h4 className="font-geistmono text-darkbrown text-xl sm:text-[48px] sm:leading-[48px] tracking-wider">
            services
          </h4>

          <div className="font-geistmono text-[16px] sm:text-[24px] sm:leading-[28px] mx-1 mt-10 text-darkbrown">
            <div className="font-geistmonob mb-1">menu</div>
            <ul className="ml-5 sm:ml-10 list-disc">
              <li>Cream Cheese Cookie</li>
              <li>Peanut Butter Cookie</li>
              <li>Oreo Cookie</li>
              <li>Zucchini Bread</li>
              <li>Carrot Bread</li>
              <li>Banana Bread</li>
            </ul>
            <div className="font-geistmonob mb-1">prices</div>
            <ul className="ml-5 sm:ml-10 list-disc">
              <li>$8 per 15 cookie batch ($9 for Oreo batch)</li>
              <li>$8 per mini loaf</li>
              <li>$10 per loaf</li>
            </ul>
            <div className="font-geistmonob mb-1">extras</div>
            <ul className="ml-5 sm:ml-10 list-disc">
              <li>Chocolate Chips - .50</li>
              <li>Nuts - .50</li>
            </ul>
            <div className="font-geistmonob mb-1">policies</div>
            <ul className="ml-5 sm:ml-10 list-disc">
              <li>I need a week in advance order notice before expectancy</li>
              <li>I can do (health) requested substitutions for a $7 fee</li>
            </ul>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="h-screen w-screen flex flex-col justify-center items-start relative overflow-hidden" id="contact">
        <h1 className="font-dahliamc sm:font-dahlia text-9xl text-darkbrown mx-5 sm:mx-10">Contact</h1>
        <h3 className="font-dahliamc sm:font-dahliam text-darkbrown text-[28px] sm:text-[40px] mx-5 sm:mx-10 pt-10">
          phone: 770-299-9476
        </h3>
        <h3 className="font-dahliamc sm:font-dahliam text-darkbrown text-[28px] sm:text-[40px] mx-5 sm:mx-10">
          email: ifreeman.bakedgoods@gmail.com
        </h3>
        <Link
          href={'https://www.instagram.com/iona._.but.with.an.apostrophe?igsh=MXEydXpqb2l5bjl2Yw%3D%3D&utm_source=qr'}
        >
          <Image
            src={'/images/instagram.svg'}
            alt="instagram"
            width={100}
            height={100}
            className="mx-5 sm:mx-10 pt-10 pb-20"
          />
        </Link>

        <div className="hidden sm:block absolute bottom-0 left-[20px] font-dahlia text-[320px] leading-[250px] mt-20 text-darkbrown pointer-events-none">
          Tink&#8217;sTreats
        </div>
      </div>
    </main>
  );
}

'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useState } from 'react';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-whitesmoke overflow-hidden">
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
              <ul className="flex flex-col justify-between text-[128px] leading-[100px] text-whitesmoke font-dahlia tracking-tight space-y-5 items-center">
                <li>
                  <a href="/">Home</a>
                </li>
                <li>
                  <a href="/agents">About</a>
                </li>
                <li>
                  <a href="/weapons">Contact</a>
                </li>
                <li>
                  <a href="/maps">Menu</a>
                </li>
              </ul>
            </div>
          </div>
        )}
      </div>

      {/* main */}
      <div className="reletive w-screen h-screen overflow-hidden">
        {/* web nav */}
        <nav className="hidden sm:block">
          <div className="text-2xl">Tink&apos;s Trets</div>
          <div>
            <ul>
              <li>about</li>
              <li>menu</li>
              <li>contact</li>
            </ul>
          </div>
        </nav>
        <h4 className="hidden sm:block">if you&apos;re curious...ask, won&apos;t know until you try it</h4>
        <h1 className="text-[200px] leading-[100px] tracking-tight absolute text-teal bottom-[350px] -left-[320px] rotate-90 font-dahlia">
          Tink&#8217;sTreats
        </h1>
      </div>
      {/* about */}
      <div className="w-screen h-screen overflow-hidden bg-teal flex flex-col items-start justify-center px-5">
        <h1 className="font-dahlia text-9xl text-darkbrown">About</h1>
        <p className="font-geistmono text-darkbrown text-[16px] leading-[24px] tracking-wider pt-10">
          Inspired by her family&apos;s appetite and occasional sweet tooth, I&apos;ona continued to experiment more and
          more with new baking recipes for them to enjoy. It was later suggested that she begin selling her baked goods,
          which much of the profits she has used to raise money for a series of financial missions that she has been
          grateful to achieve.
        </p>
        <p className="font-geistmono text-darkbrown text-[16px] leading-[24px] tracking-wider pt-5">
          Shoutout to all that have supported before and welcome all who are about to find their new favorite website :)
        </p>
      </div>
      {/* menu */}
      <div className="w-screen h-screen overflow-hidden flex flex-col items-center justify-center bg-teal">
        <div className="w-[95%] h-[90%] bg-whitesmoke rounded-xl flex flex-col items-center px-5">
          <h1 className="font-dahliamc text-teal tracking-tight leading-[50px] text-[56px] pt-10">Homemade Desserts</h1>
          <h4 className="font-geistmono text-darkbrown text-xl tracking-wider">services</h4>

          <div className="font-geistmono text-[16px] mx-1 mt-10 text-darkbrown">
            <div className="font-geistmonob">menu</div>
            <ul className="ml-5 list-disc">
              <li>Cream Cheese Cookie</li>
              <li>Peanut Butter Cookie</li>
              <li>Oreo Cookie</li>
              <li>Zucchini Bread</li>
              <li>Carrot Bread</li>
              <li>Banana Bread</li>
            </ul>
            <div className="font-geistmonob">prices</div>
            <ul className="ml-5 list-disc">
              <li>$8 per 15 cookie batch ($9 for Oreo batch)</li>
              <li>$8 per mini loaf</li>
              <li>$10 per loaf</li>
            </ul>
            <div className="font-geistmonob">extras</div>
            <ul className="ml-5 list-disc">
              <li>Chocolate Chips - .50</li>
              <li>Nuts - .50</li>
            </ul>
            <div className="font-geistmonob">policies</div>
            <ul className="ml-5 list-disc">
              <li>I need a week in advance order notice before expectancy</li>
              <li>I can do (health) requested substitutions for a $7 fee</li>
            </ul>
          </div>
        </div>
      </div>
      {/* contact */}
      <div className="h-screen w-screen flex flex-col justify-center items-start">
        <h1 className="font-dahliamc text-9xl text-darkbrown mx-5">Contact</h1>
        <h3 className="font-dahliamc text-darkbrown text-[28px] mx-5 pt-10">phone: 770-299-9476</h3>
        <h3 className="font-dahliamc text-darkbrown text-[28px] mx-5">email: ifreeman.bakedgoods@gmail.com</h3>
        <Link
          href={'https://www.instagram.com/iona._.but.with.an.apostrophe?igsh=MXEydXpqb2l5bjl2Yw%3D%3D&utm_source=qr'}
        >
          <Image src={'/images/instagram.svg'} alt="instagram" width={100} height={100} className="mx-5 pt-10" />
        </Link>

        <div className="hidden">Tink&apos;s Treats</div>
      </div>
    </main>
  );
}

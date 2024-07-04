export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between bg-whitesmoke overflow-hidden">
      {/* main */}
      <div className="reletive w-screen h-screen overflow-hidden">
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
          <h1 className="font-dahliamc text-teal text-[54px] pt-10">Homemade Desserts</h1>
          <h4 className="font-geistmono text-darkbrown text-xl tracking-wider">services</h4>

          <div className="font-geistmono text-[16px]">
            <div>menu</div>
            <ul className="ml-5">
              <li>Cream Cheese Cookie</li>
              <li>Peanut Butter Cookie</li>
              <li>Oreo Cookie</li>
              <li>Zucchini Bread</li>
              <li>Carrot Bread</li>
              <li>Banana Bread</li>
            </ul>
            <div>prices</div>
            <ul className="ml-5">
              <li>$8 per 15 cookie batch ($9 for Oreo batch)</li>
              <li>$8 per mini loaf</li>
              <li>$10 per loaf</li>
            </ul>
            <div>extras</div>
            <ul className="ml-5">
              <li>Chocolate Chips - .50</li>
              <li>Nuts - .50</li>
            </ul>
            <div>policies</div>
            <ul className="ml-5">
              <li>I need a week in advance order notice before expectancy</li>
              <li>I can do (health) requested substitutions for a $7 fee</li>
            </ul>
          </div>
        </div>
      </div>
      {/* contact */}
      <div>
        <h1>contact</h1>
        <h3>phone: 770-299-9476</h3>
        <h3>email: ifreeman.bakedgoods@gmail.com</h3>
        <div>Tink&apos;s Treats</div>
      </div>
    </main>
  );
}

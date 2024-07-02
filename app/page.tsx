export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* main */}
      <div>
        <nav>
          <div>Tink&apos;s Trets</div>
          <div>
            <ul>
              <li>about</li>
              <li>menu</li>
              <li>contact</li>
            </ul>
          </div>
        </nav>
        <h4>if you&apos;re curious...ask, won&apos;t know until you try it</h4>
        <h1>Tink&apos;s Treats</h1>
      </div>
      {/* about */}
      <div>
        <h1>About</h1>
        <p>
          Inspired by her family&apos;s appetite and occasional sweet tooth, I&apos;ona continued to experiment more and
          more with new baking recipes for them to enjoy. It was later suggested that she begin selling her baked goods,
          which much of the profits she has used to raise money for a series of financial missions that she has been
          grateful to achieve.
        </p>
        <p>
          Shoutout to all that have supported before and welcome all who are about to find their new favorite website :)
        </p>
      </div>
      {/* menu */}
      <div>
        <div>
          <h1>homemade desserts</h1>
          <h4>services</h4>

          <div>
            <div>menu</div>
            <ul>
              <li>Cream Cheese Cookie</li>
              <li>Peanut Butter Cookie</li>
              <li>Oreo Cookie</li>
              <li>Zucchini Bread</li>
              <li>Carrot Bread</li>
              <li>Banana Bread</li>
            </ul>
            <div>prices</div>
            <ul>
              <li>$8 per 15 cookie batch ($9 for Oreo batch)</li>
              <li>$8 per mini loaf</li>
              <li>$10 per loaf</li>
            </ul>
            <div>extras</div>
            <ul>
              <li>Chocolate Chips - .50</li>
              <li>Nuts - .50</li>
            </ul>
            <div>policies</div>
            <ul>
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

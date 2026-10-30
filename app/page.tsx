const ministries = [
  { number: "01", title: "Worship Team", text: "Helping our church encounter God through worship and music." },
  { number: "02", title: "Drama Team", text: "Sharing messages of faith and hope through creative expression." },
  { number: "03", title: "Women’s Ministry", text: "Growing together in faith, friendship, and purpose." },
  { number: "04", title: "Youth & Children", text: "Creating a place for the next generation to know and follow Jesus." },
  { number: "05", title: "Outreach Ministry", text: "Serving our neighbors and bringing hope beyond the church walls." },
  { number: "06", title: "Security Team", text: "Helping create a safe, welcoming environment for our church family." }
];

const quickLinks = [
  { number: "01", title: "Read the Bible", text: "Open Scripture, explore available translations, and follow along during service.", href: "/bible", label: "Explore the Bible" },
  { number: "02", title: "Watch Messages", text: "Catch up on sermons and revisit messages that encourage your walk with God.", href: "/watch", label: "Watch sermons" },
  { number: "03", title: "Give with Purpose", text: "Support the church and its ministries through secure online giving.", href: "/give", label: "Giving options" }
];

function BrandMark() {
  return (
    <a className="brand" href="/" aria-label="Word of Faith Church home">
      <span className="brand-seal"><span>Wofc</span></span>
      <span className="brand-copy">
        <span className="brand-name">Word Of Faith Church</span>
        <span className="brand-tagline">People With a Purpose</span>
      </span>
    </a>
  );
}

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <div className="header-inner">
          <BrandMark />
          <nav className="desktop-nav" aria-label="Main navigation">
            <a href="#about">About</a>
            <a href="#ministries">Ministries</a>
            <a href="/watch">Watch</a>
            <a href="/bible">Bible</a>
            <a href="#education">Daycare & School</a>
          </nav>
          <a className="button button-gold header-give" href="/give">Give</a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow"><span /> A place to belong. A purpose to live.</p>
          <h1>Faith for today.<br /><em>Purpose for tomorrow.</em></h1>
          <p className="hero-description">Welcome to Word of Faith Church—a community growing in faith, serving with love, and walking together in purpose.</p>
          <div className="hero-actions">
            <a className="button button-gold" href="#connect">Plan Your Visit <span aria-hidden="true">↗</span></a>
            <a className="button button-glass" href="/watch"><span className="play-icon">▶</span> Watch Messages</a>
          </div>
          <div className="hero-note"><span className="note-line" /> PEOPLE WITH A PURPOSE</div>
        </div>
        <div className="hero-index"><span>01</span> / WELCOME</div>
      </section>

      <section className="welcome section-wrap" id="about">
        <div className="section-kicker">WELCOME TO WORD OF FAITH</div>
        <div className="welcome-grid">
          <h2>A church family.<br /><em>A faith-filled future.</em></h2>
          <div className="welcome-copy">
            <p>We believe faith is lived out in how we worship, how we serve, and how we care for one another. Whether you’re visiting for the first time or looking for a place to grow, there’s room for you here.</p>
            <a className="text-link" href="/about">Get to know us <span>↗</span></a>
          </div>
        </div>
      </section>

      <section className="pathways">
        <div className="section-wrap">
          <div className="section-heading">
            <div><div className="section-kicker">GROW • WORSHIP • CONNECT</div><h2>Your next step<br /><em>starts here.</em></h2></div>
            <p>Find encouragement for your faith, connect with our church family, and take your next step in purpose.</p>
          </div>
          <div className="pathway-grid">
            {quickLinks.map((item) => (
              <a className="pathway-card" href={item.href} key={item.number}>
                <span className="card-number">{item.number}</span>
                <span className="card-arrow" aria-hidden="true">↗</span>
                <h3>{item.title}</h3><p>{item.text}</p><span className="card-link">{item.label}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="ministries section-wrap" id="ministries">
        <div className="section-heading">
          <div><div className="section-kicker">THERE’S A PLACE FOR YOU</div><h2>Life is better<br /><em>in community.</em></h2></div>
          <a className="text-link" href="/ministries">Explore all ministries <span>↗</span></a>
        </div>
        <div className="ministry-grid">
          {ministries.map((item) => (
            <a className="ministry-card" href="/ministries" key={item.number}>
              <span className="ministry-number">{item.number}</span>
              <span className="ministry-arrow" aria-hidden="true">↗</span>
              <h3>{item.title}</h3><p>{item.text}</p>
            </a>
          ))}
        </div>
      </section>

      <section className="education-band" id="education">
        <div className="education-content">
          <div className="section-kicker">NURTURING THE NEXT GENERATION</div>
          <h2>Faith that grows<br /><em>with your family.</em></h2>
          <p>Explore our daycare and Bible-based K–12 Christian school—learning communities built around care, growth, and purpose.</p>
          <div className="hero-actions">
            <a className="button button-light" href="/daycare">Discover Daycare <span>↗</span></a>
            <a className="button button-outline-light" href="/school">Explore the School <span>↗</span></a>
          </div>
        </div>
        <div className="education-mark" aria-hidden="true">W<span>✦</span>F</div>
      </section>

      <section className="connect section-wrap" id="connect">
        <div className="connect-card">
          <div><div className="section-kicker">YOUR PLACE IS HERE</div><h2>We’d love to<br /><em>welcome you.</em></h2><p>Come as you are. Find community, grow in faith, and discover your purpose with us.</p></div>
          <div className="connect-actions"><a className="button button-gold" href="/contact">Plan Your Visit <span>↗</span></a><a className="text-link" href="/contact">Contact the church <span>↗</span></a></div>
        </div>
      </section>

      <footer className="site-footer">
        <div className="footer-main">
          <BrandMark />
          <p>Faith. Family. Purpose.</p>
          <div className="footer-links"><a href="/about">About</a><a href="/ministries">Ministries</a><a href="/watch">Watch</a><a href="/bible">Bible</a><a href="/give">Give</a><a href="/contact">Contact</a></div>
        </div>
        <div className="footer-bottom"><span>© {new Date().getFullYear()} Word of Faith Church</span><span>People With a Purpose.</span></div>
      </footer>
    </main>
  );
}
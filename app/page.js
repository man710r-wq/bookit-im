const businesses = [
  { name: "Farrell's Barber Shop", category: 'Hair & Barbering', town: 'Douglas', provider: 'Booksy', service: "Men's haircut", price: '£24', url: 'https://booksy.com/en-gb/13488_farrell-s-barber-shop_barber_1810785_douglas', blurb: 'Barbering on Peel Road with direct online booking.' },
  { name: 'Hannah Simpson Beauty Studio & Academy', category: 'Beauty', town: 'Douglas', provider: 'Book.app', service: 'Beauty treatments', price: 'Varies', url: 'https://hannah-simpson-beauty-studio--academy.book.app/book-now', blurb: 'Facials, brows, lashes, nails, massage and waxing.' },
  { name: 'Follan Natural Health Centre', category: 'Health & Physio', town: 'Douglas', provider: 'Direct', service: 'Osteopathy / massage', price: 'See booking', url: 'https://www.follan.co.uk/', blurb: 'Osteopathy, sports therapy, massage, yoga, acupuncture and more.' },
  { name: 'King Spa', category: 'Massage & Spa', town: 'Douglas', provider: 'Direct', service: 'Spa day', price: 'From £99', url: 'https://www.kingspa.im/spa-days.html', blurb: 'Spa days and treatments with online booking.' },
  { name: 'Christol Beauty', category: 'Beauty', town: 'Douglas', provider: 'Fresha', service: 'Beauty treatments', price: 'Varies', url: 'https://www.fresha.com/a/christol-beauty-douglas-quay-chambers-b42p76we', blurb: 'Skincare and rejuvenating treatments with instant booking.' }
];

const categories = ['Hair & Barbering','Beauty','Massage & Spa','Health & Physio','Fitness','Pets','Cars','Food & Drink','Activities'];

export default function Home() {
  return <main>
    <header className="topbar">
      <div className="brand"><span>BookIt</span><b>.im</b></div>
      <button className="ghost">For businesses</button>
    </header>

    <section className="hero">
      <div className="eyebrow">ISLE OF MAN</div>
      <h1>Book anything.<br/>Anywhere on the Island.</h1>
      <p>Appointments, treatments, services, activities and more — without needing to know which booking app each business uses.</p>
      <div className="searchbox">
        <label>What do you want to book?</label>
        <input placeholder="Haircut, massage, MOT, dinner…" />
        <div className="row">
          <select defaultValue="Any time"><option>ASAP</option><option>Today</option><option>Tomorrow</option><option>This weekend</option><option>Any time</option></select>
          <select defaultValue="Anywhere"><option>Anywhere</option><option>Douglas</option><option>Ramsey</option><option>Peel</option><option>Castletown</option></select>
        </div>
        <a className="primary" href="#results">Find something to book</a>
      </div>
    </section>

    <section className="categories">
      <h2>Browse by category</h2>
      <div className="chips">{categories.map(c => <span className="chip" key={c}>{c}</span>)}</div>
    </section>

    <section className="results" id="results">
      <div className="resultsHead"><div><span className="eyebrow">BOOKABLE NOW</span><h2>{businesses.length} places to try</h2></div></div>
      <div className="cards">
        {businesses.map(b => <article className="card" key={b.name}>
          <div className="thumb"><span>{b.category}</span></div>
          <div className="cardbody">
            <div className="meta"><span>{b.town}</span><span>•</span><span>{b.provider}</span></div>
            <h3>{b.name}</h3>
            <p>{b.blurb}</p>
            <div className="service"><div><small>{b.service}</small><strong>{b.price}</strong></div><span className="status">Online booking</span></div>
            <a className="book" href={b.url} target="_blank" rel="noreferrer">Book now ↗</a>
          </div>
        </article>)}
      </div>
    </section>

    <footer><div className="brand small"><span>BookIt</span><b>.im</b></div><p>Prototype — Isle of Man booking aggregator</p></footer>
  </main>
}

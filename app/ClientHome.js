'use client';
import { useMemo, useState } from 'react';
import './styles.css';

const businesses = [
  {
    name: "Farrell's Barber Shop",
    category: 'Hair & Barbering',
    town: 'Douglas',
    provider: 'Booksy',
    service: "Men's haircut",
    price: '£24',
    availability: 'Online booking',
    url: 'https://booksy.com/en-gb/13488_farrell-s-barber-shop_barber_1810785_douglas',
    blurb: 'Barbering on Peel Road with direct online booking.'
  },
  {
    name: 'Hannah Simpson Beauty Studio & Academy',
    category: 'Beauty',
    town: 'Douglas',
    provider: 'Book.app',
    service: 'Beauty treatments',
    price: 'Varies',
    availability: 'Online booking',
    url: 'https://hannah-simpson-beauty-studio--academy.book.app/book-now',
    blurb: 'Facials, brows, lashes, nails, massage and waxing.'
  },
  {
    name: 'Follan Natural Health Centre',
    category: 'Health & Physio',
    town: 'Douglas',
    provider: 'Direct',
    service: 'Osteopathy / massage',
    price: 'See booking',
    availability: 'Book online',
    url: 'https://www.follan.co.uk/',
    blurb: 'Osteopathy, sports therapy, massage, yoga, acupuncture and more.'
  },
  {
    name: 'King Spa',
    category: 'Massage & Spa',
    town: 'Douglas',
    provider: 'Direct',
    service: 'Spa day',
    price: 'From £99',
    availability: 'Book online',
    url: 'https://www.kingspa.im/spa-days.html',
    blurb: 'Spa days and treatments with online booking.'
  },
  {
    name: 'Christol Beauty',
    category: 'Beauty',
    town: 'Douglas',
    provider: 'Fresha',
    service: 'Beauty treatments',
    price: 'Varies',
    availability: 'Instant confirmation',
    url: 'https://www.fresha.com/a/christol-beauty-douglas-quay-chambers-b42p76we',
    blurb: 'Skincare and rejuvenating treatments with instant booking.'
  }
];

const categories = ['All','Hair & Barbering','Beauty','Massage & Spa','Health & Physio','Fitness','Pets','Cars','Food & Drink','Activities'];

export default function ClientHome() {
  const [what, setWhat] = useState('');
  const [when, setWhen] = useState('Any time');
  const [where, setWhere] = useState('Anywhere');
  const [cat, setCat] = useState('All');

  const results = useMemo(() => businesses.filter(b => {
    const hay = `${b.name} ${b.category} ${b.service} ${b.town}`.toLowerCase();
    const okWhat = !what.trim() || hay.includes(what.toLowerCase());
    const okCat = cat === 'All' || b.category === cat;
    const okWhere = where === 'Anywhere' || b.town === where;
    return okWhat && okCat && okWhere;
  }), [what, cat, where]);

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
        <input value={what} onChange={e=>setWhat(e.target.value)} placeholder="Haircut, massage, MOT, dinner…" />
        <div className="row">
          <select value={when} onChange={e=>setWhen(e.target.value)}>
            <option>ASAP</option><option>Today</option><option>Tomorrow</option><option>This weekend</option><option>Any time</option>
          </select>
          <select value={where} onChange={e=>setWhere(e.target.value)}>
            <option>Anywhere</option><option>Douglas</option><option>Ramsey</option><option>Peel</option><option>Castletown</option>
          </select>
        </div>
        <button className="primary" onClick={()=>document.getElementById('results')?.scrollIntoView({behavior:'smooth'})}>Find something to book</button>
      </div>
    </section>

    <section className="categories">
      <h2>Browse by category</h2>
      <div className="chips">{categories.map(c => <button className={cat===c?'chip active':'chip'} onClick={()=>setCat(c)} key={c}>{c}</button>)}</div>
    </section>

    <section className="results" id="results">
      <div className="resultsHead"><div><span className="eyebrow">BOOKABLE NOW</span><h2>{results.length} places to try</h2></div><span className="when">{when}</span></div>
      <div className="cards">
        {results.map(b => <article className="card" key={b.name}>
          <div className="thumb"><span>{b.category}</span></div>
          <div className="cardbody">
            <div className="meta"><span>{b.town}</span><span>•</span><span>{b.provider}</span></div>
            <h3>{b.name}</h3>
            <p>{b.blurb}</p>
            <div className="service"><div><small>{b.service}</small><strong>{b.price}</strong></div><span className="status">{b.availability}</span></div>
            <a className="book" href={b.url} target="_blank" rel="noreferrer">Book now ↗</a>
          </div>
        </article>)}
      </div>
    </section>

    <footer><div className="brand small"><span>BookIt</span><b>.im</b></div><p>Prototype — Isle of Man booking aggregator</p></footer>
  </main>
}

'use client';

import { useMemo, useState } from 'react';

const businesses = [
  { name: "Farrell's Barber Shop", category: 'Hair & Barbering', town: 'Douglas', provider: 'Booksy', service: "Men's haircut", keywords: ['haircut','hair','barber','barbers','mens haircut','men'], price: '£24', availability: 'Check availability', url: 'https://booksy.com/en-gb/13488_farrell-s-barber-shop_barber_1810785_douglas', blurb: 'Barbering on Peel Road with direct online booking.' },
  { name: 'The Vanilla Room', category: 'Hair & Barbering', town: 'Onchan', provider: 'Fresha', service: 'Haircuts & styling', keywords: ['haircut','hair','hairdresser','salon','barber','styling','colour'], price: 'From £10', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/bt/hair-salons/in/isle-of-man', blurb: 'Hair salon with a large online service menu and instant Fresha booking.' },
  { name: 'Magnificence Hair and Beauty', category: 'Hair & Barbering', town: 'Douglas', provider: 'Fresha', service: 'Haircuts, colour & styling', keywords: ['haircut','hair','hairdresser','salon','colour','perm','styling'], price: 'Varies', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/bt/hair-salons/in/isle-of-man', blurb: 'Hair and beauty salon with online Fresha booking.' },
  { name: 'Men only Barbertop Studio', category: 'Hair & Barbering', town: 'Douglas', provider: 'Fresha', service: 'Barbering', keywords: ['haircut','hair','barber','mens','kids haircut'], price: 'From £15', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/bt/hair-salons/in/im-douglas', blurb: 'Douglas barber studio bookable online through Fresha.' },
  { name: 'Trey Barbers', category: 'Hair & Barbering', town: 'Douglas', provider: 'Fresha', service: 'Haircut & style', keywords: ['haircut','hair','barber','mens','children','style'], price: 'From £20', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/bt/hair-salons/in/im-douglas', blurb: 'Haircuts and restyles with online booking through Fresha.' },
  { name: 'Just Barbering', category: 'Hair & Barbering', town: 'Onchan', provider: 'Fresha', service: 'Haircut & beard', keywords: ['haircut','hair','barber','beard','mens'], price: 'From £20', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/bt/barbers/in/isle-of-man', blurb: 'Onchan barber offering haircuts and beard services online.' },
  { name: 'Renegade: Cuts and Clobber', category: 'Hair & Barbering', town: 'Douglas', provider: 'Fresha', service: 'Cut & finish', keywords: ['haircut','hair','barber','beard','restyle'], price: 'From £22', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/bt/barbers/in/isle-of-man', blurb: 'Douglas barber with online appointments through Fresha.' },
  { name: 'Andrea Barbers', category: 'Hair & Barbering', town: 'Peel', provider: 'Fresha', service: 'Classic cut / skin fade', keywords: ['haircut','hair','barber','fade','mens'], price: 'From £20', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/bt/barbers/in/isle-of-man', blurb: 'Peel barber offering classic cuts and skin fades.' },
  { name: 'Claire Quinn at Eternity Hair Specialists', category: 'Hair & Barbering', town: 'Douglas', provider: 'Fresha', service: 'Cut & finish', keywords: ['haircut','hair','hairdresser','salon','cut','colour'], price: 'From £22', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/tt/men%27s-haircuts/in/im-douglas', blurb: 'Douglas hair specialist with online Fresha booking.' },
  { name: 'Lee Cowley Barbering', category: 'Hair & Barbering', town: 'Douglas', provider: 'Fresha', service: 'Haircuts & fades', keywords: ['haircut','hair','barber','fade','beard','mens'], price: 'From £24', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/tt/men%27s-haircuts/in/im-douglas', blurb: 'Barbering, fades and beard trims bookable online.' },
  { name: 'Joanne at Eternity Hair Specialists', category: 'Hair & Barbering', town: 'Douglas', provider: 'Fresha', service: 'Cuts & styling', keywords: ['haircut','hair','hairdresser','salon','cut','styling'], price: 'From £22', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/tt/men%27s-haircuts/in/im-douglas', blurb: 'Douglas stylist with online Fresha appointments.' },
  { name: 'Oh Dollys', category: 'Hair & Barbering', town: 'Douglas', provider: 'Fresha', service: 'Haircuts', keywords: ['haircut','hair','hairdresser','salon','gents','wet cut','dry cut'], price: 'From £15', availability: 'Check live availability', url: 'https://www.fresha.com/lp/en/tt/men%27s-haircuts/in/im-douglas', blurb: 'Douglas salon with a broad online service menu.' },
  { name: 'Hannah Simpson Beauty Studio & Academy', category: 'Beauty', town: 'Douglas', provider: 'Book.app', service: 'Beauty treatments', keywords: ['beauty','facial','brows','lashes','nails','waxing','massage'], price: 'Varies', availability: 'Check availability', url: 'https://hannah-simpson-beauty-studio--academy.book.app/book-now', blurb: 'Facials, brows, lashes, nails, massage and waxing.' },
  { name: 'Follan Natural Health Centre', category: 'Health & Physio', town: 'Douglas', provider: 'Direct', service: 'Osteopathy / massage', keywords: ['osteopathy','osteopath','massage','sports therapy','yoga','acupuncture','physio','health'], price: 'See booking', availability: 'Check availability', url: 'https://www.follan.co.uk/', blurb: 'Osteopathy, sports therapy, massage, yoga, acupuncture and more.' },
  { name: 'King Spa', category: 'Massage & Spa', town: 'Douglas', provider: 'Direct', service: 'Spa day', keywords: ['spa','massage','treatment','spa day'], price: 'From £99', availability: 'Check availability', url: 'https://www.kingspa.im/spa-days.html', blurb: 'Spa days and treatments with online booking.' },
  { name: 'Christol Beauty', category: 'Beauty', town: 'Douglas', provider: 'Fresha', service: 'Beauty treatments', keywords: ['beauty','skincare','facial','treatment'], price: 'Varies', availability: 'Check live availability', url: 'https://www.fresha.com/a/christol-beauty-douglas-quay-chambers-b42p76we', blurb: 'Skincare and rejuvenating treatments with online booking.' }
];

const categories = ['All','Hair & Barbering','Beauty','Massage & Spa','Health & Physio','Fitness','Pets','Cars','Food & Drink','Activities'];

export default function Home() {
  const [what, setWhat] = useState('');
  const [when, setWhen] = useState('Any time');
  const [where, setWhere] = useState('Anywhere');
  const [cat, setCat] = useState('All');

  const results = useMemo(() => {
    const query = what.trim().toLowerCase();
    return businesses.filter((b) => {
      const haystack = [b.name,b.category,b.service,b.town,b.provider,b.blurb,...(b.keywords || [])].join(' ').toLowerCase();
      const okWhat = !query || query.split(/\s+/).every(term => haystack.includes(term));
      const okCat = cat === 'All' || b.category === cat;
      const okWhere = where === 'Anywhere' || b.town === where;
      return okWhat && okCat && okWhere;
    });
  }, [what, cat, where]);

  const runSearch = () => document.getElementById('results')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  const chooseCategory = (category) => { setCat(category); requestAnimationFrame(runSearch); };
  const timeIsQualified = when === 'Any time';

  return <main>
    <header className="topbar"><div className="brand"><span>BookIt</span><b>.im</b></div><button type="button" className="ghost">For businesses</button></header>
    <section className="hero">
      <div className="eyebrow">ISLE OF MAN</div><h1>Book anything.<br/>Anywhere on the Island.</h1>
      <p>Appointments, treatments, services, activities and more — without needing to know which booking app each business uses.</p>
      <div className="searchbox">
        <label htmlFor="what">What do you want to book?</label>
        <input id="what" value={what} onChange={e=>setWhat(e.target.value)} onKeyDown={e=>{if(e.key==='Enter')runSearch();}} placeholder="Haircut, massage, MOT, dinner…" />
        <div className="row">
          <select value={when} onChange={e=>setWhen(e.target.value)} aria-label="When"><option>ASAP</option><option>Today</option><option>Tomorrow</option><option>This weekend</option><option>Any time</option></select>
          <select value={where} onChange={e=>setWhere(e.target.value)} aria-label="Where"><option>Anywhere</option><option>Douglas</option><option>Onchan</option><option>Ramsey</option><option>Peel</option><option>Castletown</option></select>
        </div>
        <button type="button" className="primary" onClick={runSearch}>Find something to book</button>
        {!timeIsQualified && <p style={{fontSize:'13px',margin:'10px 0 0',opacity:.72}}>Time selected: {when}. Live slot filtering is not connected yet, so results below are online-bookable businesses; use “Check availability” to confirm a slot.</p>}
      </div>
    </section>
    <section className="categories"><h2>Browse by category</h2><div className="chips">{categories.map(c=><button type="button" className={cat===c?'chip active':'chip'} onClick={()=>chooseCategory(c)} key={c}>{c}</button>)}</div></section>
    <section className="results" id="results">
      <div className="resultsHead"><div><span className="eyebrow">ONLINE BOOKING</span><h2>{results.length} {results.length===1?'place':'places'} to try</h2></div><span className="when">{when}</span></div>
      {!timeIsQualified && <p style={{marginTop:'-8px',marginBottom:'22px',opacity:.7}}>These results are not yet filtered by live appointment availability for {when.toLowerCase()}.</p>}
      {results.length===0 ? <div className="cardbody"><h3>No matches yet</h3><p>Try a broader search or choose All categories.</p></div> : <div className="cards">{results.map(b=><article className="card" key={b.name}><div className="thumb"><span>{b.category}</span></div><div className="cardbody"><div className="meta"><span>{b.town}</span><span>•</span><span>{b.provider}</span></div><h3>{b.name}</h3><p>{b.blurb}</p><div className="service"><div><small>{b.service}</small><strong>{b.price}</strong></div><span className="status">{b.availability}</span></div><a className="book" href={b.url} target="_blank" rel="noreferrer">Check availability ↗</a></div></article>)}</div>}
    </section>
    <footer><div className="brand small"><span>BookIt</span><b>.im</b></div><p>Prototype — Isle of Man booking aggregator</p></footer>
  </main>;
}

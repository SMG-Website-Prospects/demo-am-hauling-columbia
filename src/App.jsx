import { useMemo, useState } from "react";
import { ArrowDown, ArrowUpRight, Check, MapPin, Phone, Plus, Trash2, Truck, X } from "lucide-react";

const phone = "5732899930";
const fb = "https://facebook.com/profile.php?id=61563198521778";
const items = ["Furniture", "Appliances", "Yard debris", "Move-out clutter", "Garage cleanout", "Job-site debris"];
const services = [
  ["01", "Junk removal", "One room, one pile, or a full property clear-out."],
  ["02", "Hauling", "A local crew and trailer for the items that need to go."],
  ["03", "Dumpster rental", "A drop-off option is listed by the business for longer cleanups."]
];

function App() {
  const [selected, setSelected] = useState(["Furniture"]);
  const toggle = item => setSelected(value => value.includes(item) ? value.filter(entry => entry !== item) : [...value, item]);
  const message = useMemo(() => `Hi A&M — I need help in the Columbia area with: ${selected.length ? selected.join(", ") : "a cleanout"}.`, [selected]);

  return <main className="overflow-hidden bg-paper text-ink">
    <header className="border-b-2 border-ink bg-white">
      <div className="mx-auto flex max-w-[1500px] items-center justify-between px-4 py-3 md:px-8">
        <a href="#top" className="flex items-center gap-3 font-black uppercase tracking-[-.06em]" aria-label="A&M home">
          <img src="/assets/am-logo.jpg" alt="A&M Hauling and Junk Removal logo" className="h-14 w-14 rounded-full border-2 border-ink object-cover" />
          <span className="hidden max-w-52 leading-[.9] sm:block">A&amp;M Hauling + Junk Removal</span>
        </a>
        <nav className="hidden items-center gap-7 text-xs font-extrabold uppercase tracking-widest md:flex" aria-label="Primary navigation">
          <a href="#services">Services</a><a href="#load">Build a load</a><a href="#route">Service area</a>
        </nav>
        <a href={`tel:${phone}`} className="flex items-center gap-2 border-2 border-ink bg-lime px-4 py-3 text-xs font-black uppercase shadow-[4px_4px_0_#101313] transition hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-haul"><Phone size={16}/> Call or text</a>
      </div>
    </header>

    <section id="top" className="grid min-h-[760px] border-b-2 border-ink bg-haul lg:grid-cols-[1.05fr_.95fr]">
      <div className="flex flex-col justify-between border-ink p-5 md:p-10 lg:border-r-2 lg:p-14">
        <div className="flex justify-between text-[11px] font-black uppercase tracking-[.18em]"><span>Columbia, Missouri</span><span>Locally operated</span></div>
        <div className="py-16 lg:py-8">
          <p className="mb-3 flex items-center gap-2 font-black uppercase"><span className="h-3 w-3 rounded-full bg-lime ring-2 ring-ink"></span> Clear space. Keep moving.</p>
          <h1 className="display max-w-4xl text-[clamp(5rem,13vw,12rem)] leading-[.72] tracking-[-.025em]">WE TAKE<br/><span className="stroke-text">YOUR JUNK.</span></h1>
          <p className="mt-8 max-w-xl text-lg font-semibold leading-relaxed">Local junk removal, hauling, and dumpster rental for Columbia and surrounding communities.</p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href={`sms:${phone}?&body=${encodeURIComponent("Hi A&M — I’d like help with a junk removal project in the Columbia area.")}`} className="flex items-center gap-2 border-2 border-ink bg-ink px-6 py-4 text-sm font-black uppercase text-white transition hover:bg-white hover:text-ink">Text the crew <ArrowUpRight size={18}/></a>
            <a href="#load" className="flex items-center gap-2 border-2 border-ink bg-white px-6 py-4 text-sm font-black uppercase transition hover:bg-lime">Build a load <ArrowDown size={18}/></a>
          </div>
        </div>
        <p className="max-w-lg text-xs font-bold uppercase leading-relaxed tracking-wider">Concept note: final scheduling, pricing, and accepted materials must be confirmed directly with A&amp;M.</p>
      </div>

      <div className="grid-paper relative min-h-[620px] overflow-hidden p-6 lg:min-h-full">
        <div className="absolute right-5 top-5 z-10 w-40 rotate-3 border-2 border-ink bg-white p-2 shadow-[6px_6px_0_#101313] md:w-52">
          <img src="/assets/am-logo.jpg" alt="A&M logo showing a pickup and hauling trailer" className="w-full" />
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-[54%] bg-ink [clip-path:polygon(0_32%,100%_0,100%_100%,0_100%)]"></div>
        <div className="truck absolute bottom-[25%] left-[8%] w-[78%] max-w-3xl" aria-hidden="true">
          <svg viewBox="0 0 820 280" className="drop-shadow-[12px_14px_0_rgba(0,0,0,.2)]">
            <g fill="#f8f6ef" stroke="#101313" strokeWidth="9" strokeLinejoin="round">
              <path d="M40 183h360v-97h-210l-63 73H40z"/><path d="M400 125h332v80H400z" className="lift"/><path d="M191 86v73h-64z" fill="#9edce0"/><path d="M208 102h117v57H208z" fill="#9edce0"/>
              <circle cx="156" cy="203" r="47" fill="#101313"/><circle cx="156" cy="203" r="20" fill="#61b8bf"/><circle cx="342" cy="203" r="47" fill="#101313"/><circle cx="342" cy="203" r="20" fill="#61b8bf"/>
              <circle cx="516" cy="215" r="42" fill="#101313"/><circle cx="516" cy="215" r="17" fill="#61b8bf"/><circle cx="680" cy="215" r="42" fill="#101313"/><circle cx="680" cy="215" r="17" fill="#61b8bf"/>
            </g>
            <text x="210" y="196" fontFamily="Bebas Neue" fontSize="40" fill="#101313">A&amp;M</text>
          </svg>
        </div>
        <div className="absolute bottom-8 right-6 border-2 border-white bg-lime px-4 py-3 font-black uppercase shadow-[5px_5px_0_white]">573—289—9930</div>
      </div>
    </section>

    <div className="overflow-hidden border-b-2 border-ink bg-lime py-3 font-black uppercase tracking-[.12em]">
      <div className="marquee-track flex w-max"><span className="px-6">Junk removal · Hauling · Dumpster rental · Columbia + surrounding cities · </span><span className="px-6" aria-hidden="true">Junk removal · Hauling · Dumpster rental · Columbia + surrounding cities · </span></div>
    </div>

    <section id="services" className="mx-auto max-w-[1500px] px-5 py-24 md:px-10">
      <div className="mb-12 grid gap-6 lg:grid-cols-2"><p className="text-xs font-black uppercase tracking-[.2em]">What rolls out</p><h2 className="display text-6xl leading-[.85] md:text-8xl">A SIMPLE EXIT<br/>FOR THE HEAVY STUFF.</h2></div>
      <div className="border-t-2 border-ink">
        {services.map(([n,title,copy]) => <article key={n} className="group grid gap-5 border-b-2 border-ink py-8 md:grid-cols-[100px_1fr_1fr_50px] md:items-center">
          <span className="display text-4xl text-haul">{n}</span><h3 className="display text-4xl md:text-5xl">{title}</h3><p className="max-w-md leading-relaxed">{copy}</p><Truck className="transition group-hover:-translate-y-2 group-hover:translate-x-2"/>
        </article>)}
      </div>
    </section>

    <section id="load" className="border-y-2 border-ink bg-white">
      <div className="mx-auto grid max-w-[1500px] lg:grid-cols-[.8fr_1.2fr]">
        <div className="border-ink bg-ink p-6 text-white md:p-12 lg:border-r-2">
          <p className="text-xs font-black uppercase tracking-[.2em] text-haul">Interactive project brief</p>
          <h2 className="display mt-5 text-7xl leading-[.82] md:text-9xl">WHAT'S<br/>IN THE<br/>LOAD?</h2>
          <p className="mt-8 max-w-md text-sm leading-relaxed text-white/70">Choose the items that match your cleanup. This prepares a text message for A&amp;M; it does not create a booking or price.</p>
        </div>
        <div className="p-6 md:p-12">
          <div className="grid gap-3 sm:grid-cols-2">
            {items.map(item => { const active=selected.includes(item); return <button key={item} onClick={()=>toggle(item)} aria-pressed={active} className={`flex min-h-24 items-center justify-between border-2 border-ink p-5 text-left font-black uppercase transition ${active ? "bg-haul shadow-[5px_5px_0_#101313] -translate-y-1" : "bg-paper hover:bg-lime"}`}><span>{item}</span>{active?<Check/>:<Plus/>}</button> })}
          </div>
          <div className="mt-8 border-2 border-ink bg-paper p-5">
            <div className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-widest"><Trash2 size={16}/> Your haul note</div>
            <p className="min-h-16 font-semibold leading-relaxed">{message}</p>
            <a href={`sms:${phone}?&body=${encodeURIComponent(message)}`} className="mt-5 flex w-full items-center justify-center gap-2 bg-ink px-5 py-4 font-black uppercase text-white hover:bg-haul hover:text-ink">Open text message <ArrowUpRight/></a>
          </div>
        </div>
      </div>
    </section>

    <section id="route" className="grid min-h-[650px] border-b-2 border-ink lg:grid-cols-2">
      <div className="grid-paper relative flex items-center justify-center overflow-hidden bg-haul p-8">
        <div className="absolute h-[520px] w-[520px] rounded-full border-2 border-dashed border-ink/50"></div>
        <div className="absolute h-[340px] w-[340px] rounded-full border-2 border-ink/60"></div>
        <div className="relative z-10 flex h-44 w-44 flex-col items-center justify-center rounded-full border-4 border-ink bg-lime text-center shadow-[12px_12px_0_#101313]"><MapPin size={34}/><span className="display mt-2 text-4xl leading-none">COLUMBIA</span><small className="font-black uppercase">Missouri</small></div>
        {["North","South","East","West"].map((d,i)=><span key={d} className="absolute font-black uppercase tracking-widest" style={{transform:`rotate(${i*90}deg) translateY(-250px) rotate(${-i*90}deg)`}}>{d}</span>)}
      </div>
      <div className="flex flex-col justify-center bg-lime p-7 md:p-14">
        <p className="text-xs font-black uppercase tracking-[.2em]">The route</p>
        <h2 className="display mt-4 text-7xl leading-[.82] md:text-9xl">COLUMBIA<br/>AND OUT.</h2>
        <p className="mt-8 max-w-xl text-lg font-semibold leading-relaxed">The business says it serves Columbia and surrounding cities. Share your location directly so the crew can confirm whether your address is on the route.</p>
        <a href={fb} target="_blank" rel="noreferrer" className="mt-8 flex w-fit items-center gap-2 border-b-2 border-ink pb-1 font-black uppercase">Check current updates on Facebook <ArrowUpRight/></a>
      </div>
    </section>

    <section className="mx-auto max-w-[1500px] px-5 py-24 md:px-10">
      <div className="grid gap-10 lg:grid-cols-[.7fr_1.3fr]">
        <div><p className="text-xs font-black uppercase tracking-[.2em]">Recent field note</p><span className="display mt-5 block text-[8rem] leading-none text-haul">02:25</span><p className="text-sm font-bold uppercase">A posted cleanout story</p></div>
        <blockquote className="display border-l-8 border-haul pl-7 text-5xl leading-[.95] md:text-7xl">“We recently helped a client clear out a duplex apartment to get it move-in ready for a new tenant.”</blockquote>
      </div>
      <p className="mt-8 text-right text-xs font-bold uppercase tracking-wider">From A&amp;M's public Facebook post · October 2026</p>
    </section>

    <footer className="border-t-2 border-ink bg-haul">
      <div className="mx-auto grid max-w-[1500px] gap-10 px-5 py-16 md:grid-cols-[1fr_auto] md:px-10">
        <div><p className="display text-6xl leading-none md:text-8xl">READY TO CLEAR IT?</p><p className="mt-4 max-w-xl font-semibold">Send the crew a photo and your Columbia-area location to start the conversation.</p></div>
        <div className="flex flex-col justify-center gap-3"><a href={`tel:${phone}`} className="flex items-center gap-3 border-2 border-ink bg-white px-6 py-4 font-black uppercase shadow-[5px_5px_0_#101313]"><Phone/>573-289-9930</a><a href={fb} target="_blank" rel="noreferrer" className="text-center text-sm font-black uppercase underline">Facebook page</a></div>
      </div>
      <div className="border-t-2 border-ink px-5 py-5 text-center text-[11px] font-bold uppercase tracking-wide">Unofficial website concept created for outreach. A&amp;M has not approved this site. Confirm services, availability, accepted materials, and pricing directly with the business.</div>
    </footer>
  </main>;
}

export default App;

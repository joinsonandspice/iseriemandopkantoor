'use client';

import Image from 'next/image';

import AmpPayoffWhite from "./amp-payoff-white.svg";


/**
 * @returns {string} The next working day in Dutch (morgen, maandag, dinsdag, etc.)
 */
const VolgendeWerkdag = () => {

  // placeholder date object
  const nextWorkingDay = new Date();

  // Is tomorrow a working day?
  let isTomorrow = true;

  // Shift to next day
  nextWorkingDay.setDate(nextWorkingDay.getDate() + 1);

  // If it's a Sunday, shift to Monday
  if (nextWorkingDay.getDay() === 0) {
    isTomorrow = false;
    nextWorkingDay.setDate(nextWorkingDay.getDate() + 1);
  }

  // If it's a Saturday, shift to Monday
  if (nextWorkingDay.getDay() === 6) {
    isTomorrow = false;
    nextWorkingDay.setDate(nextWorkingDay.getDate() + 2);
  }

  // If tomorrow is a regular working day, return relative "morgen"  
  if (isTomorrow) return "morgen";

  // Otherwise, return the day name
  return nextWorkingDay.toLocaleDateString('nl-NL', { weekday: 'long' });
}


const Header = ({ backgroundImage, title, children, reverse }: { backgroundImage: string, title: string, children: React.ReactNode, reverse?: boolean }) => (
  <div className="pt-0 bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
    <div className={`container max-w-7xl mx-auto px-3 min-h-screen mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-start text-black`}>
      {!reverse ? <div className="w-full md:w-3/5 py-6 text-center" /> : null}
      <div className="flex flex-col bg-slate-50 rounded-lg w-full md:w-2/5 justify-center justify-content-center items-start text-center p-5">
        <p className="uppercase tracking-loose w-full text-xl font-light mt-2 mb-3">
          Is er nog iemand op kantoor?
        </p>

        <h1 className="my-4 text-5xl font-bold leading-tight w-full">
          {title}
        </h1>

        {children}
      </div>
    </div>

    {reverse ? <div className="w-full md:w-3/5 text-center" /> : null}
  </div>
);


/**
 * Render content for when we're not in the office
 */
const NeeNatuurlijk = () => (
  <Header
    backgroundImage='/boot.jpg'
    title="Nee joh, wij zijn lekker naar huis!"
    reverse
  >
    <p className="leading-normal text-2xl mb-8">
      Geniet van je avond. Zien we je <VolgendeWerkdag /> weer?
    </p>
    <div className='flex justify-center w-full'>

      <a
        id="navAction"
        href="https://joinsonandspice.nl/werkenbij?utm_source=iseriemandopkantoor&utm_medium=website&utm_campaign=iseriemandopkantoor"
        className="mx-auto lg:mx-0 bg-emerald-350 text-gray-100 font-bold rounded-full mt-4 mb-4 lg:mt-0 py-3 px-8 shadow focus:outline-none bg-emerald-300 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Dat wil ik ook &rarr;
      </a>
    </div>
  </Header>
);


/**
 * Render content for when we are in the office
 */
const JaToch = () => (
  <Header
    backgroundImage='/come_in.jpg'
    title="Ja!* Kom je ook?"
  >
    <p className="leading-normal text fw-light mb-8">
      * Wij hebben een giga geavanceerd model getraind om dit te zeggen op werkdagen tussen 09:00 en 17:30.<br />
      <br />
      Kom je even kijken? Het kan zijn dat we tussendoor toch net even een luchtje aan het scheppen zijn - of de hele dag remote werken. Voor de zekerheid neem je het beste even contact op.
    </p>

    <div className='flex justify-center w-full'>
      <a
        id="contact"
        href="https://joinsonandspice.nl/contact?utm_source=iseriemandopkantoor&utm_medium=website&utm_campaign=iseriemandopkantoor"
        className="mx-auto lg:mx-0 bg-emerald-350 text-gray-100 font-bold rounded-full mt-4 mb-4 lg:mt-0 py-3 px-8 shadow focus:outline-none bg-emerald-300 focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
      >
        Ik kom langs &rarr;
      </a>
    </div>
  </Header>
);


export default function Home() {

  const curDate = new Date();

  // Check if before 17:30
  const beforeLeave = curDate.getHours() < 17 || curDate.getHours() === 17 && curDate.getMinutes() < 30;
  let opKantoor = curDate.getHours() >= 9 && beforeLeave;

  // If not a working day, set to false
  if (curDate.getDay() === 0 || curDate.getDay() === 6) {
    opKantoor = false;
  }

  return (<main>
    <nav id="header" className="fixed w-full z-30 top-0 text-white bg-black/80 ">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2 max-w-7xl mx-auto">
        <div className="pl-4 flex items-center">
          <span className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <Image
              alt=""
              src={AmpPayoffWhite}
              width={200}
            ></Image>
          </span>
        </div>
        <a
          id="aboutus"
          href="https://joinsonandspice.nl/over?utm_source=iseriemandopkantoor&utm_medium=website&utm_campaign=iseriemandopkantoor"
          className="mx-auto my-auto lg:mx-0 hover:underline border border-white hover:border-emerald-350 hover:bg-emerald-350 text-white font-bold rounded-full me-3 py-3 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
        >
          Over ons
        </a>
      </div>
    </nav>

    {opKantoor ? <JaToch /> : <NeeNatuurlijk />}

    <section className="bg-white py-8">
      <div className="container max-w-5xl mx-auto m-8">
        <h2 className="w-full my-2 text-5xl font-bold leading-tight text-center text-gray-800">
          Hoezo is hier een website voor?
        </h2>
        <div className="w-full mb-4">
          <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t">
          </div>
        </div>
        <div className="flex flex-wrap">
          <div className="p-6">
            <p className="text-gray-600 mb-8 text-center">
              Eerlijk is eerlijk, we hadden hem liever niet nodig gehad. Helaas is het in de accountancy op belachelijke wijze normaal geworden dat mensen overwerken. Bij ons niet... <i>Maar hoe kunnen we dat laten zien?</i><br />
              Het antwoord hebben we (uiteraard) in Tech gevonden.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className='w-full text-center text-gray-600 font-light py-4'>
      Gemaakt met een knipoog door <a href="https://joinsonandspice.nl?utm_source=iseriemandopkantoor&utm_medium=website&utm_campaign=iseriemandopkantoor" >JOINSON&SPICE</a> - de accountants voor leidende tech-bedrijven in Nederland.
    </div>
  </main>
  )
}

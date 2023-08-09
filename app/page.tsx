'use client';

import Image from 'next/image';

// import AmpPayoff from "./amp-payoff.svg";
// import AmpPayoffDark from "./amp-payoff-dark.svg";
import AmpPayoffWhite from "./amp-payoff-white.svg";


// Return the next working day in Dutch
const VolgendeWerkdag = () => {
  const today = new Date();
  const nextWorkingDay = new Date(today);

  let isTomorrow = true;

  nextWorkingDay.setDate(nextWorkingDay.getDate() + 1);

  if (nextWorkingDay.getDay() === 0) {
    isTomorrow = false;
    nextWorkingDay.setDate(nextWorkingDay.getDate() + 1);
  }

  if (nextWorkingDay.getDay() === 6) {
    isTomorrow = false;
    nextWorkingDay.setDate(nextWorkingDay.getDate() + 2);
  }

  if (isTomorrow) {
    return "morgen";
  }

  return nextWorkingDay.toLocaleDateString('nl-NL', { weekday: 'long' });
}


const NeeNatuurlijk = () => {

  return <div className="pt-0 bg-[url('/boot.jpg')] bg-cover bg-center">
    <div className={`container px-3 min-h-screen mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-start`}>
      <div className="flex flex-col bg-slate-50  rounded-lg  w-full md:w-2/5 justify-center justify-content-center items-start text-center text-left p-5">
        <p className="uppercase tracking-loose w-full text-xl font-light mt-2 mb-3">
          Is er nog iemand op kantoor?
        </p>

        <h1 className="my-4 text-5xl font-bold leading-tight">
          Nee joh, wij zijn lekker naar huis!
        </h1>
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
      </div>
    </div>
    <div className="w-full md:w-3/5 py-6 text-center">
    </div>
  </div>
}


const JaToch = () => {

  return <div className="pt-0 bg-[url('/come_in.jpg')] bg-cover bg-center">
    <div className={`container px-3 min-h-screen mx-auto flex flex-wrap flex-col md:flex-row items-center justify-center md:justify-start`}>
      <div className="w-full md:w-3/5 py-6 text-center">
      </div>
      <div className="flex flex-col bg-slate-50  rounded-lg  w-full md:w-2/5 justify-center justify-content-center items-start text-center p-5">
        <p className="uppercase tracking-loose w-full text-xl font-light mt-2 mb-3">
          Is er nog iemand op kantoor?
        </p>

        <h1 className="my-4 text-5xl w-full font-bold leading-tight">
          Ja!* Kom je ook?
        </h1>
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
      </div>
    </div>
  </div>
}




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
    <nav id="header" className="fixed w-full z-30 top-0 text-white bg-black/80">
      <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 py-2">
        <div className="pl-4 flex items-center">
          <span className="toggleColour text-white no-underline hover:no-underline font-bold text-2xl lg:text-4xl">
            <Image
              alt=""
              src={AmpPayoffWhite}
              width={200}
            ></Image>
          </span>
        </div>
        <div className="block lg:hidden pr-4">
          <button id="nav-toggle" className="flex items-center p-1 text-pink-800 hover:text-gray-900 focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out">
            {/* <svg className="fill-current h-6 w-6" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <title>Menu</title>
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg> */}
          </button>
        </div>
        <div className="w-full flex-grow lg:flex lg:items-center lg:w-auto hidden mt-2 lg:mt-0 bg-white lg:bg-transparent text-black p-4 lg:p-0 z-20" id="nav-content">
          <ul className="list-reset lg:flex justify-end flex-1 items-center">
            {/* <li className="mr-3">
                <a className="inline-block py-2 px-4 text-black font-bold no-underline" href="#">Active</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
              </li>
              <li className="mr-3">
                <a className="inline-block text-black no-underline hover:text-gray-800 hover:text-underline py-2 px-4" href="#">link</a>
              </li> */}
          </ul>
          <a
            id="aboutus"
            href="https://joinsonandspice.nl/over?utm_source=iseriemandopkantoor&utm_medium=website&utm_campaign=iseriemandopkantoor"
            className="mx-auto lg:mx-0 hover:underline border border-white hover:border-emerald-350 hover:bg-emerald-350 text-white font-bold rounded-full mt-4 lg:mt-0 py-3 px-8 shadow focus:outline-none focus:shadow-outline transform transition hover:scale-105 duration-300 ease-in-out"
          >
            Over ons
          </a>
        </div>
      </div>
      <hr className="border-b border-gray-100 opacity-25 my-0 py-0" />
    </nav>

    {opKantoor ? <JaToch /> : <NeeNatuurlijk />}

    <div className="relative -mt-12 lg:-mt-24">
      {/* <svg viewBox="0 0 1428 174" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns: xlink="http://www.w3.org/1999/xlink">
          <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
            <g transform="translate(-2.000000, 44.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path d="M0,0 C90.7283404,0.927527913 147.912752,27.187927 291.910178,59.9119003 C387.908462,81.7278826 543.605069,89.334785 759,82.7326078 C469.336065,156.254352 216.336065,153.6679 0,74.9732496" opacity="0.100000001"></path>
              <path
                d="M100,104.708498 C277.413333,72.2345949 426.147877,52.5246657 546.203633,45.5787101 C666.259389,38.6327546 810.524845,41.7979068 979,55.0741668 C931.069965,56.122511 810.303266,74.8455141 616.699903,111.243176 C423.096539,147.640838 250.863238,145.462612 100,104.708498 Z"
                opacity="0.100000001"
              ></path>
              <path d="M1046,51.6521276 C1130.83045,29.328812 1279.08318,17.607883 1439,40.1656806 L1439,120 C1271.17211,77.9435312 1140.17211,55.1609071 1046,51.6521276 Z" id="Path-4" opacity="0.200000003"></path>
            </g>
            <g transform="translate(-4.000000, 76.000000)" fill="#FFFFFF" fill-rule="nonzero">
              <path
                d="M0.457,34.035 C57.086,53.198 98.208,65.809 123.822,71.865 C181.454,85.495 234.295,90.29 272.033,93.459 C311.355,96.759 396.635,95.801 461.025,91.663 C486.76,90.01 518.727,86.372 556.926,80.752 C595.747,74.596 622.372,70.008 636.799,66.991 C663.913,61.324 712.501,49.503 727.605,46.128 C780.47,34.317 818.839,22.532 856.324,15.904 C922.689,4.169 955.676,2.522 1011.185,0.432 C1060.705,1.477 1097.39,3.129 1121.236,5.387 C1161.703,9.219 1208.621,17.821 1235.4,22.304 C1285.855,30.748 1354.351,47.432 1440.886,72.354 L1441.191,104.352 L1.121,104.031 L0.457,34.035 Z"
              ></path>
            </g>
          </g>
        </svg> */}
    </div>
    <section className="bg-white  py-8">
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
            {/* <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                Lorem ipsum dolor sit amet
              </h3> */}
            <p className="text-gray-600 mb-8 text-center">
              Eerlijk is eerlijk, we hadden hem liever niet nodig gehad. Helaas is het in de accountancy op belachelijke wijze normaal geworden dat mensen overwerken. Bij ons niet... <i>Maar hoe kunnen we dat laten zien?</i><br />
              Het antwoord hebben we (uiteraard) in Tech gevonden.
            </p>
          </div>
        </div>
      </div>
    </section>
    <div className='w-full text-center text-gray-600 font-light py-4'>
      Gemaakt met een knipoog door <a href="https://joinsonandspice.nl?utm_source=iseriemandopkantoor&utm_medium=website&utm_campaign=iseriemandopkantoor" >JOINSON&SPICE</a> - het auditkantoor voor leidende tech-bedrijven.
    </div>
  </main>
  )
}

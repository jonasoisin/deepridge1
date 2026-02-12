"use client";

import { useState } from "react";
import Link from "next/link";

import { LogoCarousel } from "@/components/ui/logo-carousel";

const partnerLogos = [
  { id: 1, name: "ExxonMobil", src: "https://commons.wikimedia.org/wiki/Special:FilePath/Exxon_logo.svg" },
  { id: 2, name: "Shell", src: "https://upload.wikimedia.org/wikipedia/en/e/e8/Shell_logo.svg" },
  { id: 3, name: "BP", src: "https://cms-assets.great.prod.uktrade.digital/images/BP.width-700.png" },
  { id: 4, name: "Chevron", src: "https://arda.africa/wp-content/uploads/2024/03/Arda_Sponsor_Logos_Silver_Chevron_V2.png" },
  { id: 5, name: "TotalEnergies", src: "https://mrenergy.gr/wp-content/uploads/2017/05/total-logo.jpg" },
  { id: 6, name: "Saudi Aramco", src: "https://marcopolis.net/wp-content/uploads/saudi-arabia-report/2022/top_companies/Saudi_Aramco.jpg" },
  { id: 7, name: "ConocoPhillips", src: "https://www.theladders.com/_next/image?url=https%3A%2F%2Fs3.amazonaws.com%2Fcompany-photo.theladders.com%2F6496%2Fdfe58114-0ac1-4da8-ba05-8537f73970a9.png&w=1080&q=75" },
  { id: 8, name: "Eni", src: "https://www.eni.com/content/dam/enicom/images/loghi/marchio-eni-page.jpg" },
];

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <main className="min-h-screen bg-background-light dark:bg-background-dark text-slate-900 dark:text-slate-100 transition-colors duration-200 font-sans">


      <header className="relative h-[85vh] overflow-hidden">
        <img alt="Offshore wind farm at sunset" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-95dvbjJwsmLWBdV_bTb6eSHeytAiZ9NwA8oaYoSFCzjxaaH0XwbCAYQrxdrWSToAbd0Bm2fNPqFZL9WuYyJTLOI9WDXxWds5WbjLsvfc9mSEB2pJk7Sf-a8n1BAmnDnQMbGXW0ZFhsa2HU_iCh5Sbllf8UWVZ56iP6wL5j3crzulhpRkWHDycpFD2sMi85zyb2mKN7ywEsw0wdHdotTEfPBeMTc7gFebvGhSHgThc_PpTqGaHJFAUXYcYwOdT-w7VYKh8hQs0w" />
        <div className="absolute inset-0 bg-gradient-to-r from-[rgba(11,43,64,0.9)] to-[rgba(11,43,64,0.4)]"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
          <div className="max-w-2xl border-l-4 border-red-500 pl-8 py-4 border-red-500">
            <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight mb-6">
              Powering the <br />Future of Energy
            </h1>
            <p className="text-xl text-slate-200 mb-10 leading-relaxed max-w-lg">
              As an industry leader in Hywind and Natural Gas, we collaborate and engineer solutions to maximize asset value and drive global sustainability.
            </p>
            <button className="bg-white text-secondary px-10 py-4 font-bold tracking-wider hover:bg-slate-100 transition-all flex items-center gap-2">
              EXPLORE SOLUTIONS
              <span className="material-icons-outlined">arrow_forward</span>
            </button>
          </div>
          <div className="mt-16 grid grid-cols-1 md:grid-cols-4 gap-8 max-w-5xl">
            <div className="flex items-start gap-4 text-white/90">
              <span className="material-icons-outlined p-2 border border-red-500/20 rounded-full">handshake</span>
              <div>
                <h3 className="font-bold text-lg">Collaboration</h3>
                <p className="text-sm text-white/70">Partnering for excellence</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-white/90">
              <span className="material-icons-outlined p-2 border border-red-500/20 rounded-full">verified_user</span>
              <div>
                <h3 className="font-bold text-lg">Sustainability</h3>
                <p className="text-sm text-white/70">Net-zero transition leader</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-white/90">
              <span className="material-icons-outlined p-2 border border-red-500/20 rounded-full">psychology</span>
              <div>
                <h3 className="font-bold text-lg">Innovation</h3>
                <p className="text-sm text-white/70">Engineering tomorrow</p>
              </div>
            </div>
            <div className="flex items-start gap-4 text-white/90">
              <span className="material-icons-outlined p-2 border border-red-500/20 rounded-full">settings_input_component</span>
              <div>
                <h3 className="font-bold text-lg">Reliability</h3>
                <p className="text-sm text-white/70">Performance you can trust</p>
              </div>
            </div>
          </div>
        </div>
      </header>

      <section className="py-12 bg-white dark:bg-background-dark border-b border-gray-100 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-sm font-semibold text-slate-500 uppercase tracking-widest mb-8">
            Trusted by Industry Leaders
          </p>
          <LogoCarousel logos={partnerLogos} columns={4} />
        </div>
      </section>

      <section className="py-24 bg-white dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-1 bg-primary"></div>
            <h2 className="text-3xl font-bold tracking-tight">Explore our latest innovations</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group bg-slate-50 dark:bg-slate-900 border border-red-500 dark:border-red-500 transition-transform hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-video">
                <img alt="Innovation center" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC9zcPCQmXc_YFcFeLFnQUPRzFKN9Mcz3ZbyY-koIp0DvAZ4kKl1DpShovAhscx0sO75ds-WhFVkuHvPDE2ndrWHSkdUlROMSOZCFcXwtrwI2lxuSXZPfzRxyShXuOHWqMr5O347-kPHF3OaPplJTUw0cat8B-dvwSwV3QcDc1UNh9nR067_pMWcPTAyZpe35tf2amx74kZOYhySx6xxjl_ICk_tdHOVILgyxkuPDBRDu7ikInp3JkqLfojQ_tVXeVmLKBxbP3qew" />
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">DeepRidge & TechLink Launch OceanLab™</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  A first-of-its-kind initiative aimed to accelerate the development of advanced subsea completion technologies for deepwater environments.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm tracking-wide group/link" href="/news/deepridge-techlink-launch-oceanlab">
                  EXPLORE
                  <span className="material-icons-outlined text-sm ml-1 transform group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                </Link>
              </div>
            </div>
            <div className="group bg-slate-50 dark:bg-slate-900 border border-red-500 dark:border-red-500 transition-transform hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-video">
                <img alt="Well management" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCfsiunOXiHG10aC5hDMf7CC8nm3XKUlqsCJXco0A-6GlvLmGQY5BL3MSROSFsAlcwQxt1lT1ypiDhrMzEp8ikYHV95Z4Dvjtc4jMqPU4fEoPIGM9ljUjyX9FTKU6EtMVbiTkCsB4TTEQ56VAxIgB8n0ULI0Ju-kHNpx_x6rXMuI_-31M0QaBdQ_AQcUlQtZicVioVqiUYcCr13UVwZBEXOSyToF62wpTd1phz1qCsSRSg3ti3yk445WJDxKueN4IRFZ5M1AsmdWA" />
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">Sustainable Decommissioning Strategies</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  Well abandonment is the final chapter in an asset's lifecycle. It requires precision and planning to meet environmental standards and seal integrity.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm tracking-wide group/link" href="/news/sustainable-decommissioning-strategies">
                  EXPLORE
                  <span className="material-icons-outlined text-sm ml-1 transform group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                </Link>
              </div>
            </div>
            <div className="group bg-slate-50 dark:bg-slate-900 border border-red-500 dark:border-red-500 transition-transform hover:-translate-y-1">
              <div className="relative overflow-hidden aspect-video">
                <img alt="Engineers" className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvqvwcnibcJpl_aiRB9XplF28ytT_sAiOoqBTTbuwHksL65J5o5LOLNMyLr5locV4SRoWjHkUilnc-4Q-tRPzm5iLeyp_G4_iPB4tgEezhS1-jTHZb_JIOw7g9yMORBYPgkCCleFgRue6DzLazPBpBqJsQQYz3XGFi-ZUAwu9u5g8Y6PbTrgqWVo_cFN-ASbS9-MHw4H77XLaJGlElwEkgj6kOu1_4rpuoWd1qnVNPk6En2avUP0EzE3fLZXyXRRCJtbzBXJqBAQ" />
                <div className="absolute top-0 left-0 w-1 h-full bg-primary opacity-0 group-hover:opacity-100 transition-opacity"></div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">The 2025 Energy Efficiency Report</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  From groundbreaking launches to digital twins, this year brought smarter, more efficient performance across our entire reservoir lifecycle.
                </p>
                <Link className="inline-flex items-center text-primary font-bold text-sm tracking-wide group/link" href="/news/2025-energy-efficiency-report">
                  EXPLORE
                  <span className="material-icons-outlined text-sm ml-1 transform group-hover/link:translate-x-1 transition-transform">chevron_right</span>
                </Link>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors uppercase tracking-wider">See More Innovations</button>
          </div>
        </div>
      </section>

      <section className="flex flex-col md:flex-row h-auto md:h-[600px] border-y border-red-500 dark:border-red-500">
        <div className="relative flex-1 group overflow-hidden">
          <img alt="Press Conference Room" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCCnA1WoMCf_oJSPJxQVg2Zk0yKPeC0EeWqCzmykalBLvwHDir7mBUCarQ4ko77qQov7BBFX1Wm8pjGKKbgzAwMeiKv4KA1hNuAE2VplqJriOPQ3im7e-V1JqhGOxRcWJJ8kxQtDbPfnpeGQdIqAZzFxYQr2R3-dxj9y4AQEehLcCC-IFhdHqEMPjPrLHMpMg1EIs0zHQbkp5MboEGojIscAAUfLP3iJJZJmRNe6zCX04EDuxwZZQIXDRckqC95WyxpEbRJi3EyYA" />
          <div className="absolute inset-0 bg-secondary/70"></div>
          <div className="relative h-full p-12 flex flex-col justify-center max-w-xl">
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <h2 className="text-4xl font-bold text-white mb-6 leading-tight">DeepRidge Announces Fourth Quarter 2024 Performance Results</h2>
            <p className="text-slate-200 mb-10 leading-relaxed">
              Continuing our trend of sustainable growth, DeepRidge reported record net income as we expand our Hywind footprint across the North Sea.
            </p>
            <Link href="/news/deepridge-q4-2024-results" className="bg-white text-secondary px-8 py-4 font-bold tracking-wider w-fit hover:bg-slate-100 transition-all uppercase">
              Read Press Release
            </Link>
          </div>
        </div>
        <div className="w-full md:w-1/3 bg-slate-50 dark:bg-slate-900 p-12 border-l border-red-500 dark:border-red-500">
          <h3 className="text-xl font-bold mb-8 uppercase tracking-widest text-slate-500 dark:text-slate-400">News Feed</h3>
          <div className="space-y-8">
            <Link href="/news/nex-gen-hub-offshore-hydrogen" className="group cursor-pointer block">
              <p className="text-xs text-slate-400 mb-1 font-bold">JAN 15, 2025</p>
              <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">DeepRidge and GlobalWind Launch NEX-Gen Hub to Advance Offshore Hydrogen</h4>
            </Link>
            <Link href="/news/vp-sustainable-development" className="group cursor-pointer block">
              <p className="text-xs text-slate-400 mb-1 font-bold">JAN 12, 2025</p>
              <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">Executive Board Appoints New VP of Sustainable Development</h4>
            </Link>
            <Link href="/news/hywind-pilot-milestone" className="group cursor-pointer block">
              <p className="text-xs text-slate-400 mb-1 font-bold">JAN 08, 2025</p>
              <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">Hywind Pilot Reaches Milestone: Over 500 GWh Generated in First Phase</h4>
            </Link>
            <Link href="/news/smartgrid-integration-eastern-hemisphere" className="group cursor-pointer block">
              <p className="text-xs text-slate-400 mb-1 font-bold">JAN 04, 2025</p>
              <h4 className="font-bold text-sm leading-snug group-hover:text-primary transition-colors">SmartGrid Integration Successfully Deployed in Eastern Hemisphere</h4>
            </Link>
          </div>
          <Link className="inline-flex items-center text-primary font-bold text-sm tracking-widest mt-12 group" href="/news">
            SEE ALL NEWS
            <span className="material-icons-outlined text-sm ml-2 transform group-hover:translate-x-1 transition-transform">chevron_right</span>
          </Link>
        </div>
      </section>

      <section className="py-24 bg-background-light dark:bg-background-dark">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-1 bg-primary"></div>
            <h2 className="text-3xl font-bold tracking-tight">Recent Global Projects</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="group">
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <img alt="Remote Drilling" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAXXHeiVUEUYqRjVguFmf-2VvJYoK_K5Ulw2en3ObD416y-_sWDRI96uE6xMc-ikoaw94eM8YMEzqOPSwi9v91A_4h6FRnUBu7v8-WE7Lq9BPtsxORQ-rVC1egUaCSKY14aR3SpZkuenYhdstTP1XmsJGncFecxH5kVLqv8YHVAFkM94kSHPe3RU5W2YcFUh54pNbZ57wsKgr66ydk_YU9mtz4vmCJe_iEdy9VaFzcdvHeYDSlSgrLBPpGcyDLFZ3lxPe9zpJmxfw" />
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <h4 className="text-xl font-bold mb-4">Autonomous Rig Operations: Brazil Presalt</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Deploying AI-driven drilling systems to maximize ROP and safety in challenging deepwater formations.
                </p>
                <Link className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2" href="/news/autonomous-rig-operations-brazil">Explore <span className="material-icons-outlined text-xs">arrow_forward</span></Link>
              </div>
            </div>
            <div className="group">
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <img alt="Subsea Installation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDY1Wv9TVwghb86a39X17ywzTCt7dT8tQ1aGAw9UUVLLWlxfCHP7J0Joqt6KRO4VFxeL6UuiXQuepb6tUCb_BRFtX-HmYqBtqkcqjZsWEdlD0paPjnmtr1OVk0Q7pbd57SJNbLMUrA2_HGqZBwCeMxt83BdGBMQLSAIg4DVgdLli7PfgMr5ThOzgSaXVBelOJBVY5t4BGb6E5iaQhLdZCVvOeQFo9vzobq1bnfUe5d8IcNvR56MusA1DG6cfchKrXswmjgovMWGPA" />
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <h4 className="text-xl font-bold mb-4">North Sea Life Extension Phase III</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  A tailored subsea intervention solution that extended the life of mature gas wells by over 15 years.
                </p>
                <Link className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2" href="/news/north-sea-life-extension">Explore <span className="material-icons-outlined text-xs">arrow_forward</span></Link>
              </div>
            </div>
            <div className="group">
              <div className="aspect-[4/3] mb-6 overflow-hidden">
                <img alt="Hywind Platform" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCnJAamH_Wp1xKDWC-HAknse8sDf1lCuXXZQvtlKH23d2QZ1ev_UvNYxL8PBnlOwN0xMRIsUFWHhXy8UoaB2169D2LEFuc_NaApxtLuf76-a9Y_XW00_nIBzcHQd8L2anVw1l26ABLwoaHmsrNiCBloUu_-Ul7L8THyYxihIqcuz_tw-y0Yo8t5jFRfDxGOMnkt8ZYtfHqHNek1IrNtiIQjG1JtOsg1EsGje3RnJ84cMpJLungJU7UjctjQVH9gaARUctKx_fDkQw" />
              </div>
              <div className="border-l-2 border-red-500 pl-4">
                <h4 className="text-xl font-bold mb-4">Hywind Tampen: Floating Wind Excellence</h4>
                <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                  Powering oil and gas platforms with clean, floating wind energy to drastically reduce carbon footprint.
                </p>
                <Link className="text-primary font-bold text-xs tracking-widest uppercase flex items-center gap-2" href="/news/hywind-tampen-floating-wind">Explore <span className="material-icons-outlined text-xs">arrow_forward</span></Link>
              </div>
            </div>
          </div>
          <div className="mt-12 text-center">
            <button className="px-8 py-3 bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-sm hover:bg-slate-200 dark:hover:bg-slate-700 transition-colors uppercase tracking-wider">See More Projects</button>
          </div>
        </div>
      </section>

      <section className="relative h-[450px] flex items-center">
        <img alt="Career Background" className="absolute inset-0 w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCFl0dzupgjLUQcB62rzol4mS7jCCbcZbE9LLX0vlkMC5EDWsilprtjP0MX6A6UVlIR3MUXKLeoJKZYyn3pRkzladGc38F_CB34H4lTgretAMBJf_iHdU1mZpsvk1p71Uc0T0vGoLF4H8ZTXjx5iwE8SiYTi8STlFDj7L8w5jyguzOOsB7y5_4z_NbmYY2KRCBEB_c3PpWqTbh9-541s0tHfSfdiHsgFxAU8y8GqA5Rs0w5sPsBzAuLWGNGUJ1dkwrhIevoyXJbBQ" />
        <div className="absolute inset-0 bg-secondary/80"></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-xl">
            <div className="w-12 h-1 bg-primary mb-6"></div>
            <h2 className="text-4xl font-bold text-red-500 mb-6">Join the Energy Revolution</h2>
            <p className="text-slate-200 text-lg mb-10">
              Build a career that matters. At DeepRidge, we are looking for the next generation of engineers, thinkers, and doers to reshape the global energy landscape.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="bg-primary hover:bg-primary-hover text-white px-8 py-4 font-bold tracking-wider transition-all uppercase">Find Your Role</button>
              <Link href="/about" className="border-2 border-red-500 text-white hover:bg-red-500 hover:text-white px-8 py-4 font-bold tracking-wider transition-all uppercase flex items-center gap-2">
                <span className="material-icons-outlined">play_circle</span>
                Our Story
              </Link>
            </div>
          </div>
        </div>
      </section>



      <div className="fixed bottom-6 left-6 max-w-sm bg-white dark:bg-slate-900 p-6 shadow-2xl border border-red-500 dark:border-red-500 z-[100] transition-transform duration-500" id="cookie-banner" style={{ display: 'none' }}> {/* Hidden by default for now, logic to be added if needed */}
        <button className="absolute top-4 right-4 text-slate-400 hover:text-slate-600" onClick={() => (document.getElementById('cookie-banner') as HTMLElement).style.display = 'none'}>
          <span className="material-icons-outlined text-sm">close</span>
        </button>
        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">
          This website uses cookies to enhance your experience and analyze traffic. To learn more, view our <a className="text-primary underline" href="#">Privacy Policy</a>.
        </p>
        <button className="w-full bg-primary hover:bg-primary-hover text-white font-bold py-2 text-sm transition-colors uppercase tracking-widest" onClick={() => (document.getElementById('cookie-banner') as HTMLElement).style.display = 'none'}>Accept All</button>
      </div>
    </main>
  );
}

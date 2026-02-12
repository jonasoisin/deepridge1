export interface Article {
    id: string;
    slug: string;
    title: string;
    date: string;
    category: string;
    summary: string;
    content: string;
    image: string;
    partners?: string[];
    pressConference?: string;
    dealSize?: string;
}

export const articles: Article[] = [
    {
        id: "1",
        slug: "deepridge-techlink-launch-oceanlab",
        title: "DeepRidge & TechLink Launch OceanLab™",
        date: "February 10, 2025",
        category: "Innovation",
        summary: "A first-of-its-kind initiative aimed to accelerate the development of advanced subsea completion technologies for deepwater environments.",
        content: `
      <p>DeepRidge Energy, in a strategic partnership with TechLink Solutions, is proud to announce the official launch of OceanLab™, a cutting-edge research and development facility dedicated to the next generation of subsea technologies.</p>
      <p>Located in Stavanger, Norway, OceanLab™ will focus on high-pressure, high-temperature (HPHT) environments, developing autonomous subsea drones and advanced monitoring systems that reduce human intervention and operational risk.</p>
      <p>"OceanLab™ represents a paradigm shift in how we approach subsea engineering," said Elena Rostova, CTO of DeepRidge. "By combining DeepRidge's operational expertise with TechLink's digital prowess, we are unlocking new possibilities for the energy sector."</p>
      <h3>Strategic Impact</h3>
      <p>The facility aims to test and deploy over 20 new patents within the next 3 years, specifically targeting cost reductions in deepwater extraction by up to 30%.</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC9zcPCQmXc_YFcFeLFnQUPRzFKN9Mcz3ZbyY-koIp0DvAZ4kKl1DpShovAhscx0sO75ds-WhFVkuHvPDE2ndrWHSkdUlROMSOZCFcXwtrwI2lxuSXZPfzRxyShXuOHWqMr5O347-kPHF3OaPplJTUw0cat8B-dvwSwV3QcDc1UNh9nR067_pMWcPTAyZpe35tf2amx74kZOYhySx6xxjl_ICk_tdHOVILgyxkuPDBRDu7ikInp3JkqLfojQ_tVXeVmLKBxbP3qew",
        partners: ["TechLink Solutions", "Nordic Subsea Alliance"],
        pressConference: "Launch event held at Stavanger Forum, attended by 200 industry leaders.",
        dealSize: "$150 Million Joint Venture"
    },
    {
        id: "2",
        slug: "sustainable-decommissioning-strategies",
        title: "Sustainable Decommissioning Strategies",
        date: "February 2, 2025",
        category: "Sustainability",
        summary: "Well abandonment is the final chapter in an asset's lifecycle. It requires precision and planning to meet environmental standards and seal integrity.",
        content: `
      <p>As mature fields across the North Sea reach the end of their productive lives, DeepRidge is leading the charge in responsible and sustainable decommissioning. Our new proprietary 'Eco-Plug' technology ensures long-term seal integrity while minimizing environmental disruption.</p>
      <p>Traditional decommissioning methods often leave behind significant carbon footprints. DeepRidge's new strategy involves the use of biodegradable materials and rig-less abandonment techniques that reduce emissions by 40% compared to conventional methods.</p>
      <p>"We believe that how we leave a site is just as important as how we found it," stated Marcus Thorne, Director of Sustainability.</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCfsiunOXiHG10aC5hDMf7CC8nm3XKUlqsCJXco0A-6GlvLmGQY5BL3MSROSFsAlcwQxt1lT1ypiDhrMzEp8ikYHV95Z4Dvjtc4jMqPU4fEoPIGM9ljUjyX9FTKU6EtMVbiTkCsB4TTEQ56VAxIgB8n0ULI0Ju-kHNpx_x6rXMuI_-31M0QaBdQ_AQcUlQtZicVioVqiUYcCr13UVwZBEXOSyToF62wpTd1phz1qCsSRSg3ti3yk445WJDxKueN4IRFZ5M1AsmdWA",
        partners: ["EcoSea Defenders", "Global Environment Fund"],
        pressConference: "Discussed during the Annual Sustainability Summit in Oslo.",
        dealSize: "Estimated $500M Market Savings"
    },
    {
        id: "3",
        slug: "2025-energy-efficiency-report",
        title: "The 2025 Energy Efficiency Report",
        date: "January 28, 2025",
        category: "Insights",
        summary: "From groundbreaking launches to digital twins, this year brought smarter, more efficient performance across our entire reservoir lifecycle.",
        content: `
      <p>DeepRidge Energy has released its comprehensive 2025 Energy Efficiency Report, highlighting a year of transformative gains. Through the widespread adoption of Digital Twin technology, we have optimized reservoir management, resulting in a 15% increase in recovery rates across key assets.</p>
      <p>The report details how real-time data analytics have allowed for predictive maintenance, drastically reducing downtime and preventing costly equipment failures. "Data is the new oil," comments Dr. Aris Vlahos, VP of Digital Transformation. "But it's how we use that data to drive efficiency that truly matters."</p>
      <p>Key highlights include the successful electrification of the Alpha Platform, now running on 100% renewable energy from nearby wind farms.</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDvqvwcnibcJpl_aiRB9XplF28ytT_sAiOoqBTTbuwHksL65J5o5LOLNMyLr5locV4SRoWjHkUilnc-4Q-tRPzm5iLeyp_G4_iPB4tgEezhS1-jTHZb_JIOw7g9yMORBYPgkCCleFgRue6DzLazPBpBqJsQQYz3XGFi-ZUAwu9u5g8Y6PbTrgqWVo_cFN-ASbS9-MHw4H77XLaJGlElwEkgj6kOu1_4rpuoWd1qnVNPk6En2avUP0EzE3fLZXyXRRCJtbzBXJqBAQ",
        pressConference: "Virtual presentation available on the Investor Relations portal.",
        dealSize: "N/A"
    },
    {
        id: "4",
        slug: "deepridge-q4-2024-results",
        title: "DeepRidge Announces Fourth Quarter 2024 Performance Results",
        date: "January 20, 2025",
        category: "Financials",
        summary: "Continuing our trend of sustainable growth, DeepRidge reported record net income as we expand our Hywind footprint across the North Sea.",
        content: `
      <p>DeepRidge Energy today reported record financial results for the fourth quarter of 2024. Net income surged to $2.1 billion, driven by strong operational performance in both the Hydrocarbon and Renewable Energy divisions.</p>
      <p>Capital expenditure for the quarter was focused heavily on the expansion of the Hywind offshore wind assets, positioning DeepRidge as a dominant player in the European renewable market.</p>
      <p>"These results reflect the resilience of our diversified portfolio," said CEO Sarah Jenkins. "We are delivering value to shareholders while aggressively investing in the energy systems of tomorrow."</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCCnA1WoMCf_oJSPJxQVg2Zk0yKPeC0EeWqCzmykalBLvwHDir7mBUCarQ4ko77qQov7BBFX1Wm8pjGKKbgzAwMeiKv4KA1hNuAE2VplqJriOPQ3im7e-V1JqhGOxRcWJJ8kxQtDbPfnpeGQdIqAZzFxYQr2R3-dxj9y4AQEehLcCC-IFhdHqEMPjPrLHMpMg1EIs0zHQbkp5MboEGojIscAAUfLP3iJJZJmRNe6zCX04EDuxwZZQIXDRckqC95WyxpEbRJi3EyYA",
        pressConference: "Earnings Call Q4 2024, hosted by CEO Sarah Jenkins and CFO David Chen.",
        dealSize: "$2.1 Billion Net Income"
    },
    {
        id: "5",
        slug: "nex-gen-hub-offshore-hydrogen",
        title: "DeepRidge and GlobalWind Launch NEX-Gen Hub to Advance Offshore Hydrogen",
        date: "January 15, 2025",
        category: "Partnership",
        summary: "A landmark collaboration to produce green hydrogen directly offshore, utilizing excess wind energy capacity.",
        content: `
      <p>In a groundbreaking move, DeepRidge Energy and GlobalWind have announced the NEX-Gen Hub, a pilot project designed to produce green hydrogen offshore. This facility will be linked directly to the Dogger Bank wind farm, utilizing excess electricity to power electrolysis units located on a repurposed oil and gas platform.</p>
      <p>This coupling of wind energy and hydrogen production solves the issue of intermittency and storage in renewable energy. The hydrogen produced will be piped to shore using existing infrastructure, providing a clean fuel source for heavy industry.</p>
    `,
        image: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=1600&auto=format&fit=crop&q=80",
        partners: ["GlobalWind", "European Hydrogen Consortium"],
        pressConference: "Joint press briefing in Brussels.",
        dealSize: "$850 Million Infrastructure Investment"
    },
    {
        id: "6",
        slug: "vp-sustainable-development",
        title: "Executive Board Appoints New VP of Sustainable Development",
        date: "January 12, 2025",
        category: "Corporate",
        summary: "DeepRidge welcomes Dr. Amara Okafor to lead the company's ambitious Net-Zero 2040 strategy.",
        content: `
      <p>DeepRidge Energy is pleased to announce the appointment of Dr. Amara Okafor as the new Vice President of Sustainable Development. Dr. Okafor brings over 20 years of experience in environmental science and corporate governance.</p>
      <p>Her primary mandate will be to oversee the execution of DeepRidge’s 'Net-Zero 2040' roadmap, ensuring that all new projects meet stringent carbon intensity targets. "I am honored to join DeepRidge at such a pivotal time," said Dr. Okafor. "The commitment this company has shown to genuine transformation is inspiring."</p>
    `,
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=1600&auto=format&fit=crop&q=80",
        pressConference: "Internal Town Hall broadcast globally.",
        dealSize: "N/A"
    },
    {
        id: "7",
        slug: "hywind-pilot-milestone",
        title: "Hywind Pilot Reaches Milestone: Over 500 GWh Generated in First Phase",
        date: "January 08, 2025",
        category: "Renewables",
        summary: "The floating wind pilot project has exceeded all performance expectations, powering over 50,000 homes.",
        content: `
      <p>The Hywind Pilot park off the coast of Scotland has reached a significant generation milestone, surpassing 500 GWh of clean electricity production since its commissioning. This achievement demonstrates the viability and reliability of floating wind technology in harsh marine environments.</p>
      <p>With capacity factors consistently exceeding 50%, the Hywind Pilot is performing on par with, or better than, traditional bottom-fixed offshore wind farms. DeepRidge plans to use the data gathered here to inform the design of the larger Hywind Tampen development.</p>
    `,
        image: "https://images.unsplash.com/photo-1466611653911-95081537e5b7?w=1600&auto=format&fit=crop&q=80",
        partners: ["Scottish Renewables", "Equinor"],
        pressConference: "Site visit and media day at Peterhead.",
        dealSize: "Generated value equiv. to $40M in energy"
    },
    {
        id: "8",
        slug: "smartgrid-integration-eastern-hemisphere",
        title: "SmartGrid Integration Successfully Deployed in Eastern Hemisphere",
        date: "January 04, 2025",
        category: "Technology",
        summary: "Our proprietary grid management software is now live across assets in Southeast Asia, optimizing power distribution.",
        content: `
      <p>DeepRidge's SmartGrid integration has gone live across our operations in Malaysia and Vietnam. This AI-driven system balances power loads between offshore platforms and onshore facilities, integrating renewable sources seamlessly.</p>
      <p>Early results show a 12% reduction in diesel consumption for backup generators and a significantly more stable power supply for critical drilling operations.</p>
    `,
        image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1600&auto=format&fit=crop&q=80",
        partners: ["Asian Grid Tech", "Siemens Energy"],
        pressConference: "Regional tech showcase in Kuala Lumpur.",
        dealSize: "$75 Million Contract Value"
    },
    {
        id: "9",
        slug: "autonomous-rig-operations-brazil",
        title: "Autonomous Rig Operations: Brazil Presalt",
        date: "December 15, 2024",
        category: "Operations",
        summary: "Deploying AI-driven drilling systems to maximize ROP and safety in challenging deepwater formations.",
        content: `
      <p>DeepRidge has successfully commenced fully autonomous drilling operations in the Brazilian pre-salt fields. The new 'AutoDrill' system utilizes machine learning to adjust drilling parameters in real-time, optimizing rate of penetration (ROP) and reducing wear on bottom-hole assemblies.</p>
      <p>This milestone marks the first time a well in the pre-salt layer has been drilled with 80% automated control, setting a new safety standard by removing personnel from the red zone.</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuAXXHeiVUEUYqRjVguFmf-2VvJYoK_K5Ulw2en3ObD416y-_sWDRI96uE6xMc-ikoaw94eM8YMEzqOPSwi9v91A_4h6FRnUBu7v8-WE7Lq9BPtsxORQ-rVC1egUaCSKY14aR3SpZkuenYhdstTP1XmsJGncFecxH5kVLqv8YHVAFkM94kSHPe3RU5W2YcFUh54pNbZ57wsKgr66ydk_YU9mtz4vmCJe_iEdy9VaFzcdvHeYDSlSgrLBPpGcyDLFZ3lxPe9zpJmxfw",
        partners: ["Petrobras", "Schlumberger"],
        pressConference: "Rio Oil & Gas Expo presentation.",
        dealSize: "$200 Million Operational Savings Projected"
    },
    {
        id: "10",
        slug: "north-sea-life-extension",
        title: "North Sea Life Extension Phase III",
        date: "December 01, 2024",
        category: "Projects",
        summary: "A tailored subsea intervention solution that extended the life of mature gas wells by over 15 years.",
        content: `
      <p>Phase III of the North Sea Life Extension project has been completed ahead of schedule. DeepRidge's engineering teams installed subsea boosting pumps and updated control umbilicals on the Kraken field, effectively revitalizing the asset.</p>
      <p>This intervention is expected to extend the field's productive life by another 15 years, securing vital natural gas supplies for the UK market during the energy transition.</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDY1Wv9TVwghb86a39X17ywzTCt7dT8tQ1aGAw9UUVLLWlxfCHP7J0Joqt6KRO4VFxeL6UuiXQuepb6tUCb_BRFtX-HmYqBtqkcqjZsWEdlD0paPjnmtr1OVk0Q7pbd57SJNbLMUrA2_HGqZBwCeMxt83BdGBMQLSAIg4DVgdLli7PfgMr5ThOzgSaXVBelOJBVY5t4BGb6E5iaQhLdZCVvOeQFo9vzobq1bnfUe5d8IcNvR56MusA1DG6cfchKrXswmjgovMWGPA",
        partners: ["UK Dept of Energy", "Aker Solutions"],
        pressConference: "Aberdeen Industry Briefing.",
        dealSize: "$300 Million Project Budget"
    },
    {
        id: "11",
        slug: "hywind-tampen-floating-wind",
        title: "Hywind Tampen: Floating Wind Excellence",
        date: "November 20, 2024",
        category: "Renewables",
        summary: "Powering oil and gas platforms with clean, floating wind energy to drastically reduce carbon footprint.",
        content: `
      <p>The Hywind Tampen is now fully operational, becoming the world's largest floating offshore wind farm. It supplies electricity specifically to the Snorre and Gullfaks oil and gas fields, reducing CO2 emissions by 200,000 tonnes annually.</p>
      <p>"This is a dual-purpose victory," says Project Director Lars Hansen. "We are proving floating wind at scale while decarbonizing existing hydrocarbon production. It is the bridge to our future."</p>
    `,
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuCnJAamH_Wp1xKDWC-HAknse8sDf1lCuXXZQvtlKH23d2QZ1ev_UvNYxL8PBnlOwN0xMRIsUFWHhXy8UoaB2169D2LEFuc_NaApxtLuf76-a9Y_XW00_nIBzcHQd8L2anVw1l26ABLwoaHmsrNiCBloUu_-Ul7L8THyYxihIqcuz_tw-y0Yo8t5jFRfDxGOMnkt8ZYtfHqHNek1IrNtiIQjG1JtOsg1EsGje3RnJ84cMpJLungJU7UjctjQVH9gaARUctKx_fDkQw",
        partners: ["Enova", "Industry Partners Council"],
        pressConference: "Inauguration ceremony attended by the Crown Prince.",
        dealSize: "$450 Million Investment"
    }
];

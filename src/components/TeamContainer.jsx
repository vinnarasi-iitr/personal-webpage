import React from "react";
import { MemTemplate } from "./mem_template";
import { MemTemplate1 } from "./mem_template";
import { MemTemplate2 } from "./mem_template";
import { MemTemplate3 } from "./mem_template";
import { MemTemplate4 } from "./mem_template";
import { MemTemplate5 } from "./mem_template";

export default function TeamContainer() {
  const link_logos = {
    web: { id: "fa-solid fa-globe", color: "black" },
    linkedin: { id: "fa-brands fa-linkedin", color: "#0077B5" },
    google_scholar: { id: "fa-brands fa-google-scholar", color: "#4285F4" },
    github: { id: "fa-brands fa-square-github", color: "black" },
    reasearch_gate: { id: "fa-brands fa-researchgate", color: "00ccbb" },
    twitter: { id: "fa-brands fa-x-twitter", color: "#000000" },
  };
  return (
    <div>
      <p className="title_2">PhD Students</p>
      <div
        style={{
          display: "flex",

          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate1
          data={{
            name: "Dikshant Bodana (PMRF)",
            designation: "",
            description: [
              <>
                <strong> PhD Topic: </strong>Eco-Hydrological Modelling Approach
                for Rejuvenation of a River Subjected to Overdraft and Heavy
                Metal Pollution.
              </>,
              <>
                <strong>Research Interests: </strong>Eco-hydrological modelling,
                Phytoremediation, Jet Aeration Systems and Fluvial Hydraulics
              </>,
              // "Email: dikshant_b@ce.iitr.ac.in",
              <>
                <strong>Co-supervisor : </strong>Dr. Sharad Kumar Jain
              </>,
            ],
            src: require("../assets/img/dikshant.png"),
            links: [
              {
                name: link_logos.web,
                link: "https://sites.google.com/view/dikshantbodana/home",
              },

              {
                name: link_logos.reasearch_gate,
                link: "https://www.researchgate.net/profile/Dikshant-Bodana",
              },
            ],
          }}
        />
        <MemTemplate1
          data={{
            name: "Ankush (Part-Time)",
            designation: "",
            description: [
              <>
                <strong> Thesis Title: </strong>Multivariate Non-stationary
                Frequency Analysis of Hydrometeorological Variables.
              </>,
              // <>
              //   <strong>Research Interests: </strong>Eco-hydrological modelling,
              //   Phytoremediation, Jet Aeration Systems and Fluvial Hydraulics
              // </>,
              // "Email: dikshant_b@ce.iitr.ac.in",
              <>
                <strong>Research Interests: </strong>Hydrometeorological
                Extremes, Teleconnections, Climate Change Impact, Disaster and
                Risk Management and Water Resource Management
              </>,
              <>
                <strong>Supervisor :</strong> Prof. N. K. Goel (Dept Of
                Hydrology, IIT Roorkee)
              </>,
              <>
                <strong>Co-supervisor :</strong> Prof. R. Vinnarasi
              </>,
            ],
            src: require("../assets/img/ankush.png"),
            links: [
              // {
              //   name: link_logos.web,
              //   link: "https://sites.google.com/view/dikshantbodana/home",
              // },
              // {
              //   name: link_logos.google_scholar,
              //   link: "https://scholar.google.com/citations?user=NCCLB8wAAAAJ&hl=en ",
              // },
              // {
              {
                name: link_logos.reasearch_gate,
                link: "https://scholar.google.com/citations?user=alkhyPkAAAAJ&hl=en",
              },
              // {
              //   name: link_logos.twitter,
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate1
          data={{
            name: "Pallavi Kumari (PMRF)",
            designation: "",
            description: [
              <>
                <strong>PhD Topic:</strong> Characterizing Controlling Factors
                of Flash Drought and Early Warning System Towards Sustainable
                Ecosystem
              </>,
              <>
                <strong>Research Interests: </strong>Hydro-Climatological
                Extremes, Flash Drought and Long-term Conventional Drought
                Dynamics, Causal Analysis and Impact Assessment, Drought
                Prediction, Hydrological Modelling
              </>,
              // "Email: pallavi_k@ce.iitr.ac.in",
            ],
            src: require("../assets/img/pallavi.png"),
            links: [
              {
                name: link_logos.web,
                link: "https://sites.google.com/ce.iitr.ac.in/pallavi-kumari/home",
              },
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/pallavi-kumari2835 ",
              },
              {
                name: link_logos.google_scholar,
                link: "https://scholar.google.com/citations?user=F_90ZHYAAAAJ&hl=en&authuser=2 ",
              },
              {
                name: link_logos.reasearch_gate,
                link: "https://www.researchgate.net/profile/Pallavi-Kumari-8",
              },
              {
                name: link_logos.twitter,
                link: "https://x.com/Pallavikumari_?t=YLCs8e0H_tPELTCs7FrsaQ&s=08",
              },
            ],
          }}
        />

        <MemTemplate1
          data={{
            name: " Vivek Tiwari",
            designation: "",
            description: [
              <>
                <strong> PhD Topic: </strong>Eco-hydrological Modeling for
                Improving Water and Soil Quality through Best Agricultural
                Management Practices: A Hindon Case study
              </>,
              <>
                <strong>Research Interests: </strong> Nutrient Dynamics,
                Eco-Hydrological Modelling, Soil & Water Quality, and
                Agricultural Environmental Impacts.
              </>,
              // "Email:  vivek_t@wr.iitr.ac.in",
              <>
                <strong>Supervisor :</strong> Prof. Idhayachandhiran
                Ilampooranan
              </>,
              <>
                <strong>Co-supervisor :</strong> Prof. R. Vinnarasi
              </>,
            ],
            src: require("../assets/img/vivek.jpg"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/sai-bargav-reddy-2257b2172/",
              },
              {
                name: link_logos.google_scholar,
                link: "https://scholar.google.com/citations?user=NCCLB8wAAAAJ&hl=en ",
              },
              {
                name: link_logos.reasearch_gate,
                link: "https://www.researchgate.net/profile/Sai-Muskula",
              },
              {
                name: link_logos.twitter,
                link: "https://twitter.com/BargavReddy23 ",
              },
            ],
          }}
        />

        <MemTemplate1
          data={{
            name: "Usman Aliakbar Mohseni (PMRF)",
            designation: "",
            description: [
              <>
                <strong>PhD Topic:</strong> Dynamic Risk Assessment of Compound
                Hydrometeorological Extremes under Changing Climate"
              </>,
              <>
                <strong>Research Interests: </strong>Compound extremes,
                teleconnections, Climate change Impact, and the application of
                hydrologic and hydraulic modelling in the field of water
                resources
              </>,
            ],
            src: require("../assets/img/usmaan.png"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/mohseni-usman-8a39775a/",
              },
              {
                name: link_logos.google_scholar,
                link: "https://scholar.google.com/citations?hl=en&user=UUDfCzw6EsIC ",
              },
              {
                name: link_logos.reasearch_gate,
                link: "https://www.researchgate.net/profile/Usman_Mohseni?ev=hdr_xprf",
              },
              {
                name: link_logos.twitter,
                link: "https://x.com/M2291003030379 ",
              },
            ],
          }}
        />

        <MemTemplate1
          data={{
            name: " Muskula Sai Bargav Reddy",
            designation: "",
            description: [
              <>
                <strong> PhD Topic: </strong>Hydrometeorological extremes and
                their influence on nutrient dynamics
              </>,
              <>
                <strong>Research Interests: </strong>Land Atmospheric
                Interactions, Hydrometeorological Extremes, Earth System
                Modelling, Climate Change Impacts, Nutrient Dynamics,
                Eco-Hydrological Modelling
              </>,
              // "Email: muskula_sbr@ce.iitr.ac.in ",
            ],
            src: require("../assets/img/barghav.png"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/sai-bargav-reddy-2257b2172/",
              },
              {
                name: link_logos.google_scholar,
                link: "https://scholar.google.com/citations?user=NCCLB8wAAAAJ&hl=en ",
              },
              {
                name: link_logos.reasearch_gate,
                link: "https://www.researchgate.net/profile/Sai-Muskula",
              },
              {
                name: link_logos.twitter,
                link: "https://twitter.com/BargavReddy23 ",
              },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Aakanksha Agrawal",
            designation: "",
            description: [
              <>
                <strong>PhD Topic:</strong> Investigating the Role of
                Urbanisation on Urban Heat Island & Extreme Precipitation using
                Mesoscale Modelling
              </>,
              <>
                <strong>Research Interests: </strong>Downscaling, Urban
                Hydrology
              </>,
            ],
            src: require("../assets/img/akanksha.png"),
            links: [
              {
                name: link_logos.web,
                link: "https://sites.google.com/ce.iitr.ac.in/aakankshaagrawal/about",
              },
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
              {
                name: link_logos.google_scholar,
                link: "https://scholar.google.com/citations?user=sFquEB4AAAAJ&hl=en ",
              },
              {
                name: link_logos.reasearch_gate,
                link: "https://www.researchgate.net/profile/Aakanksha-Agrawal?ev=hdr_xprf",
              },
            ],
          }}
        />
      </div>

      <p className="title_2">Master Students</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate2
          data={{
            name: "Misbah Zaidi",
            designation: "",
            description: [
              <>
                <strong> Masters Thesis Title: </strong>Flood Forecasting using
                Hybrid Models
              </>,
              <>
                <strong>Research Interests: </strong>Downscaling, Urban
                Hydrology
              </>,
              <>
                <strong>Email: </strong>
                misbah_z@ce.iitr.ac.in
              </>,
            ],
            src: require("../assets/img/misbah.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate2
          data={{
            name: "Akilesh Singh Yadav",
            designation: "",
            description: [
              <>
                <strong> Masters Thesis Title: </strong>Hydrological Modelling
                for Dynamic Catchment Using VIC
              </>,
              <>
                <strong>Research Interests: </strong>Extreme Hydrological
                Events, Climate Change Impacts, and Hydrological Modelling
              </>,
              <>
                <strong>Co-Guide :</strong> Dr Sunil Gurrapu NIH Roorkee
              </>,
              <>
                <strong>Email: </strong>
                akhilesh_sy@ce.iitr.ac.in
              </>,
            ],
            src: require("../assets/img/akilesh.png"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/akhileshsy1/?originalSubdomain=in",
              },
            ],
          }}
        />
      </div>

      <p className="title_2">Research Staff</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate
          data={{
            name: "Nikhil Ghodichore",
            designation: "",
            description: [
              <p>
                <strong> Project</strong>: HiROS
              </p>,
              // <p>
              //   <strong>Date of Joining</strong>: 05/03/2025
              // </p>,
              <p>
                <strong>Current position</strong>: Project Scientist-I
              </p>,
              <p>
                <strong>Email</strong>: nikhilghodichore@gmail.com
              </p>,
            ],
            src: require("../assets/img/nikhil.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/mohseni-usman-8a39775a/",
              // },
              {
                name: link_logos.google_scholar,
                link: "https://scholar.google.com/citations?user=Nqag7SAAAAAJ&hl=en&oi=ao",
              },
              // {
              //   name: link_logos.reasearch_gate,
              //   link: "https://www.researchgate.net/profile/Usman_Mohseni?ev=hdr_xprf",
              // },
              // {
              //   name: link_logos.twitter,
              //   link: "https://x.com/M2291003030379 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Saurav Raj",
            designation: "",
            description: [
              <p>
                <strong> Project</strong>: HiROS
              </p>,
              // <p>
              //   <strong>Date of Joining</strong>: 09/06/2025
              // </p>,
              <p>
                <strong>Current position</strong>: Junior Research Fellow
              </p>,
              <p>
                <strong>Email</strong>: sauravraj9399@gmail.com
              </p>,
            ],
            src: require("../assets/img/saurav.png"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/saurav-raj-286a80178/",
              },
              // {
              //   name: link_logos.google_scholar,
              //   link: "https://scholar.google.com/citations?user=Nqag7SAAAAAJ&hl=en&oi=ao",
              // },
              // {
              //   name: link_logos.reasearch_gate,
              //   link: "https://www.researchgate.net/profile/Usman_Mohseni?ev=hdr_xprf",
              // },
              // {
              //   name: link_logos.twitter,
              //   link: "https://x.com/M2291003030379 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Ankur Rohela",
            designation: "",
            description: [
              <p>
                <strong> Project</strong>: HiROS
              </p>,
              // <p>
              //   <strong>Date Of Joining</strong>: 20/04/2022
              // </p>,
              <p>
                <strong>Current position</strong>: Field Assistant
              </p>,
              <p>
                <strong>Email</strong>: ankurrohela123@gmail.com
              </p>,
            ],
            src: require("../assets/img/ankur.jpg"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/ankur-rohela-a7510042 ",
              },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Ankit Kumar",
            designation: "",
            description: [
              <p>
                <strong> Project</strong>: HiROS
              </p>,
              // <p>
              //   <strong>Date Of Joining</strong>: 01/11/2023
              // </p>,
              <p>
                <strong>Current position</strong>: Field Assistant
              </p>,
              <p>
                <strong>Email</strong>: karnwalakk847@gmail.com
              </p>,
            ],
            src: require("../assets/img/ankit.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/ankur-rohela-a7510042 ",
              // },
            ],
          }}
        />
      </div>

      <p className="title_2">Undergraduates / Interns</p>
      <h3
        style={{
          textAlign: "left",
          // fontWeight: "bold",
          marginTop: "20px",
          paddingLeft: "10%",
        }}>
        Summer Intern
      </h3>

      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate3
          data={{
            name: "Piyush Chavan",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: WebTool for Design Flood Estimation
              </p>,
              <p>
                <strong>
                  Dept. of Computer Science Engineering, IIT Roorkee
                </strong>
              </p>,
              <p>
                <strong>Email</strong>: chavan_pg@cs.iitr.ac.in
              </p>,
            ],

            src: require("../assets/img/piyush.jpg"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/piyush-chavan-9ab090267 ",
              },
              {
                name: link_logos.github,
                link: "https://github.com/piyush-chavan ",
              },
            ],
          }}
        />

        <MemTemplate3
          data={{
            name: "Bolapati Nithin Nathanael",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: WebTool for Design Flood Estimation
              </p>,
              <p>
                <strong>
                  Dept. of Computer Science Engineering, IIT Roorkee
                </strong>
              </p>,
              <p>
                <strong>Email</strong>: bolapati_nn@cs.iitr.ac.in
              </p>,
            ],

            src: require("../assets/img/nithin.jpg"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/nithin-nathanael-7314b3260  ",
              },
              {
                name: link_logos.github,
                link: "https://github.com/Hacker-nn",
              },
            ],
          }}
        />

        <MemTemplate3
          data={{
            name: "Ishaa Mehra",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: Drought-Flood Transition
              </p>,
              <p>
                <strong>Dept. of Civil Engineering, NIT Jalandhar</strong>
              </p>,
              <p>
                <strong>Email</strong>: isham2495@gmail.com
              </p>,
            ],
            src: require("../assets/img/Isha.jpeg"),
            links: [
              {
                name: "github",
                link: "https://twitter.com/BargavReddy23 ",
              },
            ],
          }}
        />

        <MemTemplate3
          data={{
            name: "Nikhil Goyal",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: Spatiotemporal Analysis of Land Use/Land
                Cover Dynamics and Rainfall Shift Using High-Resolution Data
              </p>,
              <p>
                <strong>Dept. of Civil Engineering, NIT Surat</strong>
              </p>,
              <p>
                <strong>Email</strong>: goyalnikhil259@gmail.com
              </p>,
            ],
            src: require("../assets/img/Nikhil_goyal.jpg"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate3
          data={{
            name: "Shakir Lala",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: Development of Hydrological Model SWAT
                for Adyar river catchment.
              </p>,
              <p>
                <strong>Dept. of Civil Engineering, NIT Surat</strong>
              </p>,
              <p>
                <strong>Email</strong>: shakirlala119966@gmail.com
              </p>,
            ],
            src: require("../assets/img/shakir.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate3
          data={{
            name: "Amit Khilariya",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: Development of Heat Health Risk Index
                for coastal, Hilly, and inland cities.
              </p>,
              <p>
                <strong>Dept. of Civil Engineering, NIT Surat</strong>
              </p>,
              <p>
                <strong>Email</strong>: aamitcareer@gmail.com
              </p>,
            ],
            src: require("../assets/img/Amit.webp"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
      </div>

      <p className="title_2">Alumini</p>
      <h3
        style={{
          textAlign: "left",
          // fontWeight: "bold",
          marginTop: "20px",
          paddingLeft: "10%",
        }}>
        Research Staff
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate4
          data={{
            name: "Dr. Abhishek",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: HiROS
              </p>,
              <p>
                <strong>Position Worked</strong>: Project Scientist-I
              </p>,
              <p>
                <strong>Current Position</strong>: Assistant Professor, NIT
                Calicut
              </p>,
            ],
            src: require("../assets/img/abishek.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate4
          data={{
            name: "Dr. Krishna Chaitanya",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: HiROS
              </p>,
              <p>
                <strong>Position Worked</strong>: Project Scientist-I
              </p>,
              <p>
                <strong>Current Position</strong>: Assistant Professor, Gati
                Shakti Vishwavidyalaya
              </p>,
            ],
            src: require("../assets/img/krishna_chaitanya.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate4
          data={{
            name: "Dr. Archana Majhi",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: Design Flood Estimation for
                Resilient Hydraulic Structures Under Changing Climate and
                Environment
              </p>,
              <p>
                <strong>Position Worked</strong>: Research Associate
              </p>,
            ],
            src: require("../assets/img/archana.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate4
          data={{
            name: "Sheetal Kumari",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: HiROS
              </p>,
              <p>
                <strong>Position Worked</strong>: Junior Research Fellow
              </p>,
            ],
            src: require("../assets/img/sheetal.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate4
          data={{
            name: "Nikhil Ghodichore",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: HiROS
              </p>,
              <p>
                <strong>Position Worked</strong>: Project Associate-I
              </p>,
            ],
            src: require("../assets/img/nikhil.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate4
          data={{
            name: "Mayank Singh Gailakoti",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: Design Flood Estimation for
                Resilient Hydraulic Structures Under Changing Climate and
                Environment
              </p>,
              <p>
                <strong>Position Worked</strong>: Junior Research Fellow
              </p>,
            ],
            src: require("../assets/img/mayank.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate4
          data={{
            name: "Saurav Raj",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: Design Flood Estimation for
                Resilient Hydraulic Structures Under Changing Environment and
                Climate
              </p>,
              <p>
                <strong>Position Worked</strong>: Junior Research Fellow
              </p>,
            ],
            src: require("../assets/img/saurav.png"),
            links: [
              //{
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate4
          data={{
            name: "Sahir Azam Shad",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: Design Flood Estimation for
                Resilient Hydraulic Structures Under Changing Environment and
                Climate
              </p>,
              <p>
                <strong>Position Worked</strong>: Junior Research Fellow
              </p>,
            ],
            src: require("../assets/img/sahir.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate4
          data={{
            name: "Vijaya lakshmanan",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: HiROS
              </p>,
              <p>
                <strong>Position Worked</strong>: Field Assistant
              </p>,
            ],
            src: require("../assets/img/vijay.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate4
          data={{
            name: "Ankit Kumar ",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: HiROS
              </p>,
              <p>
                <strong>Position Worked</strong>: Field Assistant
              </p>,
            ],
            src: require("../assets/img/ankit_alumni.jpg"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate4
          data={{
            name: "Raj Kumar ",
            designation: "",
            description: [
              <p>
                <strong>Project Worked</strong>: HiROS
              </p>,
              <p>
                <strong>Position Worked</strong>: Field Assistant
              </p>,
            ],
            src: require("../assets/img/rajkumar.jpg"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />
      </div>

      <h3
        style={{
          textAlign: "left",
          // fontWeight: "bold",
          marginTop: "20px",
          paddingLeft: "10%",
        }}>
        MTech Students
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate5
          data={{
            name: "Harshal (2020-2022)",
            designation: "",
            description: [
              <p>
                <strong>Master Thesis Title </strong>: Development Of a
                Generalized Framework For Climate Informed Non-Stationary
                Extreme Event Modelling
              </p>,
              <p>
                <strong>Current Position :</strong>
              </p>,
              // <p>
              //   <strong>Project Duration</strong>: 2020-2022
              // </p>,
            ],
            src: require("../assets/img/harshal.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate5
          data={{
            name: "Aman Gupta (2020-2022)",
            designation: "",
            description: [
              <p>
                <strong>Master Thesis Title </strong>: Drought Analysis under
                Climate Change
              </p>,
              <p>
                <strong>Current Position :</strong>
              </p>,
              // <p>
              //   <strong>Project Duration</strong>: 2020-2022
              // </p>,
            ],
            src: require("../assets/img/male.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate5
          data={{
            name: " Suneel Kumar (2021-2023)",
            designation: "",
            description: [
              <p>
                <strong>Master Thesis Title </strong>: Drought Characterisation
                and Propagation Under Changing Climate
              </p>,
              <p>
                <strong>Current Position :</strong>
              </p>,
              // <p>
              //   <strong>Project Duration</strong>: 2021-2023
              // </p>,
            ],
            src: require("../assets/img/sunil.jpg"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate5
          data={{
            name: " Priyanka S (2021-2023)",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Master Thesis Title </strong>: Operation Model for
                  Hydro Power Reservoir with Dynamic Hedging Integrated Rule
                  Curve
                </p>

                <p>
                  <strong>Current Position :</strong>
                </p>

                {/* <p>
                  <strong>Project Duration</strong>: 2021-2023
                </p> */}
              </>,
            ],
            src: require("../assets/img/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate5
          data={{
            name: "Mayank Singh Gailakoti (2022-2024)",
            designation: "",
            description: [
              <p>
                <strong>Master Thesis Title </strong>: Non-Stationary Flood
                Frequency Analysis: Refinement through Ensemble Empirical Mode
                Decomposition
              </p>,
              <p>
                <strong>Current Position :</strong> JRF, IIT Roorkee
              </p>,
              // <p>
              //   <strong>Project Duration</strong>: 2022-2024
              // </p>,
            ],
            src: require("../assets/img/mayank.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate5
          data={{
            name: "Akash Siddeshwar (2022-2024)",
            designation: "",
            description: [
              <p>
                <strong>Master Thesis Title </strong>: Urban Flood Modeling
              </p>,
              <p>
                <strong>Current Position :</strong>Post Graduate Engineering
                Trainee - L&T Construction
              </p>,
              // <p>
              //   <strong>Project Duration</strong>: 2022-2024
              // </p>,
            ],
            src: require("../assets/img/akash.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />
      </div>
      <h3
        style={{
          textAlign: "left",
          // fontWeight: "bold",
          marginTop: "20px",
          paddingLeft: "10%",
        }}>
        Virtika (Skill Workshop)
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "start",
          flexWrap: "wrap",
          padding: "30px 10%",
        }}>
        <MemTemplate
          data={{
            name: "Mukesh Kumar Dey",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: Unravelling the Cause and Evolution of
                Meteorological Drought in India Under Changing Climate
              </p>,
              <p>
                <strong>Institiute</strong>: NIT Raipur.
              </p>,
              <p>
                <strong>Email</strong>: mukeshdey.bts@gmail.com
              </p>,
            ],
            src: require("../assets/img/mukesh.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
      </div>
      <h3
        style={{
          textAlign: "left",
          // fontWeight: "bold",
          marginTop: "20px",
          paddingLeft: "10%",
        }}>
        SPARK Interns
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate
          data={{
            name: "Sree Charan Saravanan",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: Low-Cost Telemetry
              </p>,
              <p>
                <strong>Institiute</strong>: IISER Kolkata
              </p>,
              <p>
                <strong>Email</strong>: sreecharansaravanan@gmail.com
              </p>,
            ],
            src: require("../assets/img/charan.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Adireddi Srinivas",
            designation: "",
            description: [
              <p>
                <strong>Topic</strong>: Meteorological Drought Prediction using
                Deep Learning Techniques in Krishna Basin, India
              </p>,
              <p>
                <strong>Institiute</strong>: IISER Kolkata
              </p>,
              <p>
                <strong>Email</strong>: as21ms193@iiserkol.ac.in
              </p>,
            ],
            src: require("../assets/img/srinivas.jpg"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
      </div>
      <h3
        style={{
          textAlign: "left",
          // fontWeight: "bold",
          marginTop: "20px",
          paddingLeft: "10%",
        }}>
        Summer Interns
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate
          data={{
            name: " Sejal Sankhala",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Evaluation of Annual Maximum
                  Precipitation Trend Over India using EEMD
                </p>
              </>,
              <>
                <strong>Institute</strong>: IIT Roorkee
              </>,
              <>
                <strong>Email </strong>: sejal_s@ce.iitr.ac.in
              </>,
            ],
            src: require("../assets/img/female.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Sifti Wadhawan",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Prediction of Meteorological Drought
                  Index using Coupled EEMD and LSTM
                </p>
              </>,
              <>
                <strong>Institute</strong>: NIT Jalandhar
              </>,
              <>
                <strong>Email </strong>:
              </>,
            ],
            src: require("../assets/img/sifti.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: " Ajay Gupta",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Drought Quantification and Propagation
                  in the Krishna Basin
                </p>
              </>,
              <>
                <strong>Institute</strong>: IIT Roorkee
              </>,
              <>
                <strong>Email </strong>: ajay_g@hy.iitr.ac.in
              </>,
            ],
            src: require("../assets/img/ajay.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Ayush Kushwaha",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: LSTM-based water quality prediction
                </p>
              </>,
              <>
                <strong>Institute</strong>: IIT Roorkee
              </>,
              <>
                <strong>Email </strong>: a_kushwah@ce.iitr.ac.in
              </>,
            ],
            src: require("../assets/img/ayush.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Kashmeera M",
            designation: "",
            description: [
              <>
                <strong>Topic</strong>: Non Linear Trend Analysis of Soil
                Moisture across India
              </>,
              <>
                <strong>Institute</strong>: TKM College of Engineering, Kollam
              </>,
              <>
                <strong>Email </strong>: kashmeera281@gmail.com
              </>,
            ],
            src: require("../assets/img/kashmeera.jpg"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Ambadi J",
            designation: "",
            description: [
              <>
                <strong>Topic</strong>: Non-Stationary Agricultural drought
                prediction for Krishna Basin
              </>,
              <>
                <strong>Institute</strong>: TKM College of Engineering, Kollam
              </>,
              <>
                <strong>Email </strong>: ambadijayakumar232@gmail.com
              </>,
            ],
            src: require("../assets/img/ambadi.jpg"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Suha A Salim",
            designation: "",
            description: [
              <>
                <strong>Topic</strong>: Non Linear Trend Analysis of Soil
                Moisture across India
              </>,
              <>
                <strong>Institute</strong>: TKM College of Engineering, Kollam
              </>,
              <>
                <strong>Email </strong>: sheeja903@gmail.com
              </>,
            ],
            src: require("../assets/img/suha.jpg"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Vempati Siriteja",
            designation: "",
            description: [
              <>
                <strong>Topic</strong>: Multi-criteria analysis-based mapping of
                the cyclone-induced pluvial flooding in coastal areas of India
              </>,
              <>
                <strong>Institute</strong>: IIT Roorkee
              </>,
              <>
                <strong>Email </strong>: siritejavempati1317@gmail.com
              </>,
            ],
            src: require("../assets/img/sriteja.jpg"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Shreya Mittal",
            designation: "",
            description: [
              <>
                <strong>Topic</strong>: Analysis of Heat Index: ldentification,
                Trend, Characterization, and Spatial Variation Across India
              </>,
              <>
                <strong>Institute</strong>: IIT Roorkee
              </>,
              <>
                <strong>Email </strong>: shreyamittaliitr@gmail.com
              </>,
            ],
            src: require("../assets/img/shreya.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Parul Kairo",
            designation: "",
            description: [
              <>
                <strong>Topic</strong>: Analysis of Heat Index: ldentification,
                Trend, Characterization, and Spatial Variation Across India
              </>,
              <>
                <strong>Institute</strong>: IIT Roorkee
              </>,
              <>
                <strong>Email </strong>: kairoparul2311@gmail.com
              </>,
            ],
            src: require("../assets/img/parul.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Shivani",
            designation: "",
            description: [
              <>
                <strong>Topic</strong>: Analysis of Heat Index: ldentification,
                Trend, Characterization, and Spatial Variation Across India
              </>,
              <>
                <strong>Institute</strong>: IIT Roorkee
              </>,
              <>
                <strong>Email </strong>: svermaiitr@gmail.com
              </>,
            ],
            src: require("../assets/img/shivani.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Priyanka Kumari Jat",
            designation: "",
            description: [
              <>
                <strong>Topic</strong>: Multi-criteria analysis-based mapping of
                the cyclone-induced pluvial flooding in coastal areas of India
              </>,
              <>
                <strong>Institute</strong>: IIT Roorkee
              </>,
              <>
                <strong>Email </strong>: priyankajat0103@gmail.com
              </>,
            ],
            src: require("../assets/img/priyanka.jpg"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
      </div>

      <h3
        style={{
          textAlign: "left",
          // fontWeight: "bold",
          marginTop: "20px",
          paddingLeft: "10%",
        }}>
        Practical Problem
      </h3>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate
          data={{
            name: "Prathamesh Patil",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Low-Cost Telemetry System
                </p>
              </>,

              // " TKM College of Engineering, Kollam",
              // "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/img/male.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Kushagra Chandiya",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Low-Cost Telemetry System
                </p>
              </>,

              // " TKM College of Engineering, Kollam",
              // "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/img/male.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Naman",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Low-Cost Telemetry System
                </p>
              </>,

              // " TKM College of Engineering, Kollam",
              // "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/img/male.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Vivek Bhadauria",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Low-Cost Telemetry System
                </p>
              </>,

              // " TKM College of Engineering, Kollam",
              // "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/img/male.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Devansh Kumar",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Rainfall-runoff forecasting using deep
                  learning
                </p>
              </>,

              // " TKM College of Engineering, Kollam",
              // "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/img/male.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Vinay Singh Yadav",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Rainfall-runoff forecasting using deep
                  learning
                </p>
              </>,

              // " TKM College of Engineering, Kollam",
              // "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/img/male.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Shikar Singh",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Rainfall-runoff forecasting using deep
                  learning
                </p>
              </>,

              // " TKM College of Engineering, Kollam",
              // "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/img/male.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Bhavya Jaipal",
            designation: "",
            description: [
              <>
                <p>
                  <strong>Topic</strong>: Rainfall-runoff forecasting using deep
                  learning
                </p>
              </>,

              // " TKM College of Engineering, Kollam",
              // "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/img/female.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
      </div>
    </div>
  );
}

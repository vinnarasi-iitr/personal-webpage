import React from "react";
import MemTemplate from "./mem_template";

export default function TeamContainer() {
  const link_logos = {
    web: { id: "fa-solid fa-globe", color: "black" },
    linkedin: { id: "fa-brands fa-linkedin", color: "#0077B5" },
    google_scholar: { id: "fa-brands fa-google-scholar", color: "#4285F4" },
    github: { id: "fa-brands fa-square-github", color: "black" },
    reasearch_gate: { id: "fa-brands fa-researchgate", color: "00ccbb" },
    twitter: { id: "fa-brands fa-twitter", color: "#1DA1F2" },
  };
  return (
    <div>
      <p className="title_2">Phd Students</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate
          data={{
            name: "Dikshant Bodana",
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
              "Email: dikshant_b@ce.iitr.ac.in",
              "Co-supervisor : Dr. Sharad Kumar Jain",
            ],
            src: require("../assets/barghav.png"),
            links: [
              {
                name: link_logos.web,
                link: "https://sites.google.com/view/dikshantbodana/home",
              },
              // {
              //   name: link_logos.google_scholar,
              //   link: "https://scholar.google.com/citations?user=NCCLB8wAAAAJ&hl=en ",
              // },
              {
                name: link_logos.reasearch_gate,
                link: "https://www.researchgate.net/profile/Dikshant-Bodana",
              },
              // {
              //   name: link_logos.twitter,
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Ankush",
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
              "Co-supervisor : Prof. N. K. Goel ",
            ],
            src: require("../assets/barghav.png"),
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
              //   name: link_logos.reasearch_gate,
              //   link: "https://www.researchgate.net/profile/Dikshant-Bodana",
              // },
              // {
              //   name: link_logos.twitter,
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
        <MemTemplate
          data={{
            name: "Pallavi Kumari",
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
              "Email: pallavi_k@ce.iitr.ac.in",
            ],
            src: require("../assets/usmaan.png"),
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

        <MemTemplate
          data={{
            name: "Usman Aliakbar Mohseni",
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
            src: require("../assets/usmaan.png"),
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

        <MemTemplate
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
                <strong>Research Interests: </strong>My work focuses on
                understanding the dynamics of nitrogen and phosphorus in the
                environment and their influence on soil and water. I am
                currently working on eco-hydrological models, particularly the
                Soil and Water Assessment Tool (SWAT), to analyze and predict
                the environmental impact of agricultural practices.
              </>,
              "Email:  vivek_t@wr.iitr.ac.in",
              "Co-supervisor: Prof. R. Vinnarasi Rajendran",
            ],
            src: require("../assets/barghav.png"),
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
            name: " Muskula Sai Bargav Reddy",
            designation: "",
            description: [
              <>
                <strong> PhD Topic: </strong>Hydrometeorological extremes and
                their influence on nutrient dynamics
              </>,
              <>
                <strong>Research Interests: </strong>Land atmospheric
                interactions, hydrometeorological extremes, earth system
                modelling, Climate Change
              </>,
              "Email: muskula_sbr@ce.iitr.ac.in ",
            ],
            src: require("../assets/barghav.png"),
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
            src: require("../assets/usmaan.png"),
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
        <MemTemplate
          data={{
            name: "Misbah Zaidi",
            designation: "",
            description: [
              <>
                <strong> Masters Thesis Title: </strong>Flood Forecasting using
                Hybrid Models
              </>,
              // "Email: suneel_k@ce.iitr.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
            name: "Akilesh Singh Yadav",
            designation: "",
            description: [
              <>
                <strong> Masters Thesis Title: </strong>Hydrological Modelling
                for Dynamic Catchment Using VIC
              </>,
              "Co-Guide : Dr Sunil Gurrapu NIH Roorkee",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/mayanksinghgailakoti/",
              // },
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
              "Working Project: HiROS",
              "Date of Joining : 05/03/2025 onwards.",
              "Current position: Project Scientist-I",
              "Email: nikhilghodichore@gmail.com",
            ],
            src: require("../assets/nikhil.jpg"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/mohseni-usman-8a39775a/",
              },
              {
                name: link_logos.google_scholar,
                link: "https://scholar.google.com/citations?user=Nqag7SAAAAAJ&hl=en&oi=ao",
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
        <MemTemplate
          data={{
            name: "Saurav Raj",
            designation: "",
            description: [
              "Working Project:  HiROS",
              "Date of Joining: 09/06/2025 ",
              "Current position: Junior Research Fellow",
              "Email: sauravraj9399@gmail.com",
            ],
            src: require("../assets/nikhil.jpg"),
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
              "Working Project: HiROS",
              "Date Of Joining: 20/04/2022",
              "Current position: Field Assistant",
              "Email: ankurrohela123@gmail.com",
            ],
            src: require("../assets/ankur.jpg"),
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
              "Working Project: HiROS",
              "Date Of Joining: 01-11-2023 ",
              "Current position: Field Assistant",
              "Email:  karnwalakk847@gmail.com",
            ],
            src: require("../assets/ankur.jpg"),
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
      <h3 style={{ textAlign: "left", fontWeight: "bold", marginTop: "20px" }}>
        Summer Intern
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
            name: "Piyush Chavan",
            designation: "",
            description: [
              "Topic : WebTool for Design Flood Estimation",
              "Dept. of Computer Science Engineering, IIT Roorkee",
              "Email: chavan_pg@cs.iitr.ac.in",
            ],

            src: require("../assets/piyush.jpg"),
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

        <MemTemplate
          data={{
            name: "Bolapati Nithin Nathanael",
            designation: "",
            description: [
              "Topic : WebTool for Design Flood Estimation",
              "Dept. of Computer Science Engineering, IIT Roorkee",
              "Email: bolapati_nn@cs.iitr.ac.in",
            ],

            src: require("../assets/nithin.jpg"),
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

        <MemTemplate
          data={{
            name: "Ishaa Mehra",
            designation: "",
            description: [
              "Topic : Drought-Flood Transition ",
              "Dept. of Civil Engineering , NIT Jalandhar",
              "Email: isham2495@gmail.com",
            ],
            src: require("../assets/doremon.png"),
            links: [
              {
                name: "github",
                link: "https://twitter.com/BargavReddy23 ",
              },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Nikhil Goyal",
            designation: "",
            description: [
              "Topic : Spatiotemporal Analysis of Land Use/Land Cover Dynamics and Rainfall Shift Using High-Resolution Data.",
              "Dept. of Civil Engineering , NIT Surat",
              "Email:  goyalnikhil259@gmail.com",
            ],
            src: require("../assets/doremon.png"),
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
            name: "Shakir Lala",
            designation: "",
            description: [
              "Topic : Spatiotemporal Analysis of Land Use/Land Cover Dynamics and Rainfall Shift Using High-Resolution Data.",
              "Dept. of Civil Engineering , NIT Surat",
              "Email:  shakirlala119966@gmail.com",
            ],
            src: require("../assets/doremon.png"),
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
            name: "Amit Khilariya",
            designation: "",
            description: [
              "Topic : Spatiotemporal Analysis of Land Use/Land Cover Dynamics and Rainfall Shift Using High-Resolution Data.",
              "Dept. of Civil Engineering , NIT Surat",
              "Email:  aamitcareer@gmail.com",
            ],
            src: require("../assets/doremon.png"),
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
      <h3 style={{ textAlign: "left", fontWeight: "bold", marginTop: "20px" }}>
        Research Staff
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
            name: "Dr. Abhishek",
            designation: "",
            description: [
              "Project Worked: HiROS",
              "Position Worked: Project Scientist-I",
              "Current Position: Assistant Professor, NIT Calicut",
            ],
            src: require("../assets/doremon.png"),
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
            name: "Dr. Krishna Chaitanya",
            designation: "",
            description: [
              "Project Worked: HiROS",
              "Position Worked: Project Scientist-I",
              "Current Position: Assistant Professor, GATI SHAKTI VISHWAVIDYALAYA  ",
            ],
            src: require("../assets/doremon.png"),
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
            name: "Dr. Archana Majhi",
            designation: "",
            description: [
              "Project Worked: Design Flood Estimation for Resilient Hydraulic Structures Under Changing Climate and Environment.",
              "Position Worked: Project Scientist-I",
            ],
            src: require("../assets/doremon.png"),
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
            name: "Nikhil Ghodichore",
            designation: "",
            description: [
              "Project Worked: HiROS",
              "Position Worked: Project Assosiate-I",
            ],
            src: require("../assets/doremon.png"),
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
            name: "Mayank Singh Gailakoti",
            designation: "",
            description: [
              "Project Worked: Design Flood Estimation for Resilient Hydraulic Structures Under Changing Climate and Environment",
              "Position Worked: Junior Research Fellow",
            ],
            src: require("../assets/doremon.png"),
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
            name: "Saurav Raj",
            designation: "",
            description: [
              "Project Worked: Design Fllod estimation for resilient hydraulic structures under changing environment and climate",
              "Position Worked: Junior Research Fellow",
            ],
            src: require("../assets/doremon.png"),
            links: [
              {
                name: link_logos.linkedin,
                link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Sahir Azam Shad",
            designation: "",
            description: [
              "Project Worked: Design Flood Estimation for Resilient Hydraulic Structures Under Changing Climate and Environment.",
              "Position Worked: Junior Research Fellow",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Vijaya lakshmanan",
            designation: "",
            description: [
              "Project Worked: HiROS",
              "Position Worked: Field Assistant",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Ankit Kumar ",
            designation: "",
            description: [
              "Project Worked: HiROS",
              "Position Worked: Field Assistant",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Raj Kumar ",
            designation: "",
            description: [
              "Project Worked: HiROS",
              "Position Worked: Field Assistant",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />
      </div>

      <h3 style={{ textAlign: "left", fontWeight: "bold", marginTop: "20px" }}>
        MTech Students
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
            name: "Harshal ",
            designation: "",
            description: [
              "Project Worked: Development Of a Generalized Framework For Climate Informed Non-Stationary Extreme Event Modelling",
              "Dept. of Civil Engineering, IIT Roorkee (M.Tech)",
              "Project Duration: 2020-2022",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Aman Gupta ",
            designation: "",
            description: [
              "Project Worked: Drought Analysis under Climate Change ",
              "Dept. of Civil Engineering, IIT Roorkee (M.Tech)",
              "Project Duration: 2020-2022",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: " Suneel Kumar ",
            designation: "",
            description: [
              "Project Worked: Drought Characterisation and Propagation Under Changing Climate",
              "Dept. of Civil Engineering, IIT Roorkee (M.Tech)",
              "Project Duration: 2021-2023",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: " Priyanka S ",
            designation: "",
            description: [
              "Project Worked: Operation Model for Hydro Power Reservoir with Dynamic Hedging Integrated Rule Curve ",
              "Dept. of Civil Engineering, IIT Roorkee (M.Tech)",
              "Project Duration: 2021-2023",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Mayank Singh Gailakoti",
            designation: "",
            description: [
              "Project Worked: Non-Stationary Flood Frequency Analysis: Refinement through Ensemble Empirical Mode Decomposition ",
              "Dept. of Civil Engineering, IIT Roorkee (M.Tech)",
              "Project Duration: 2022-2024",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Akash Siddeshwar",
            designation: "",
            description: [
              "Project Worked: Urban Flood Modeling  ",
              "Dept. of Civil Engineering, IIT Roorkee (M.Tech)",
              "Project Duration: 2022-2024",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: link_logos.linkedin,
              //   link: "https://www.linkedin.com/in/aakanksha-agrawal-680016214?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
              // },
            ],
          }}
        />
      </div>
      <h3 style={{ textAlign: "left", fontWeight: "bold", marginTop: "20px" }}>
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
            name: "Sri Charan",
            designation: "",
            description: [
              "Topic : Meteorological Drought Prediction using Deep Learning Techniques in Krishna Basin, India ",
              "IISER Kolkata ",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Meteorological Drought Prediction using Deep Learning Techniques in Krishna Basin, India ",
              "IISER Kolkata ",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
      </div>
      <h3 style={{ textAlign: "left", fontWeight: "bold", marginTop: "20px" }}>
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
            name: "Kashmeera M",
            designation: "",
            description: [
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
            links: [
              // {
              //   name: "github",
              //   link: "https://twitter.com/BargavReddy23 ",
              // },
            ],
          }}
        />
      </div>

      <h3 style={{ textAlign: "left", fontWeight: "bold", marginTop: "20px" }}>
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
            name: "Kashmeera M",
            designation: "",
            description: [
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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
              "Topic : Non Linear Trend Analysis of Soil Moisture across India",
              " TKM College of Engineering, Kollam",
              "Email: as21ms193@iiserkol.ac.in",
            ],
            src: require("../assets/doremon.png"),
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

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
      <p className="title_2">Phd and Masters Students</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate
          data={{
            name: "Muskula Sai Bargav Reddy",
            designation: "",
            description: [
              "PhD Topic: Hydrometeorological extremes and their influence on nutrient dynamic ",
              "Research Interests: Land atmospheric interactions, hydrometeorological extremes, earth system modelling, Climate Change",
              "Email: muskula_sbr@ce.iitr.ac.in ",
              "Phd Type: Full Time (Project)",
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
            name: "Usman Aliakbar Mohseni",
            designation: "",
            description: [
              "PhD Topic: Dynamic Risk Assessment of Compound Hydrometeorological Extremes under Changing Climate",
              "Research Interests: compound extremes, teleconnections, Climate change Impact, and the application of hydrologic and hydraulic modelling in the field of water resources",
              "Email: mohseni_ua@ce.iitr.ac.in",
              "Phd Type: Full Time",
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
            name: "Suneel Kumar",
            designation: "",
            description: [
              "Masters Thesis Title: Drought Characterization and Propagation Under Changing Climate.",
              "Email: suneel_k@ce.iitr.ac.in",
            ],
            src: require("../assets/doremon.png"),
            // links: [
            //   {
            //     name: "github",
            //     link: "https://twitter.com/BargavReddy23 ",
            //   },
            //],
          }}
        />

        <MemTemplate
          data={{
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
            src: require("../assets/doremon.png"),
            links: [
              {
                name: "github",
                link: "https://twitter.com/BargavReddy23 ",
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
              "Project worked: HiROS",
              "Duration of work: 05/03/2025 onwards.",
              "Current position: Project Scientist-I",
              "Email: nikhilghodichore@gmail.com",
            ],
            src: require("../assets/nikhil.jpg"),
            links: [
              //   {
              //     name: link_logos.linkedin,
              //     link: "https://www.linkedin.com/in/mohseni-usman-8a39775a/",
              //   },
              {
                name: link_logos.google_scholar,
                link: "https://scholar.google.com/citations?user=Nqag7SAAAAAJ&hl=en&oi=ao",
              },
              //   {
              //     name: link_logos.reasearch_gate,
              //     link: "https://www.researchgate.net/profile/Usman_Mohseni?ev=hdr_xprf",
              //   },
              //   {
              //     name: link_logos.twitter,
              //     link: "https://x.com/M2291003030379 ",
              //  },
            ],
          }}
        />

        <MemTemplate
          data={{
            name: "Ankur Rohela",
            designation: "",
            description: [
              "Project worked: HiROS",
              "Duration of work: 20/04/2022 onwards.",
              "Current position: Project Assistant ",
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
            src: require("../assets/doremon.png"),
            links: [
              {
                name: "github",
                link: "https://twitter.com/BargavReddy23 ",
              },
            ],
          }}
        />
      </div>

      <p className="title_2">Undergraduates / Interns</p>
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
              "Dept. of Computer Science Engineering, IIT Roorkee",
              "Projects : Developed the webTool for Water Extremes Research Group : Design Flood Estimation Tool",
              "Developed the website for Water Extremes Research Group (This Website)",
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
              "Dept. of Computer Science Engineering, IIT Roorkee",
              "Projects : Developed the webTool for Water Extremes Research Group : Design Flood Estimation Tool",
              "Developed the website for Water Extremes Research Group (This Website)",
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Ishaa Mehra",
            designation: "",
            description: [
              "Email: isham2495@gmail.com",
              "Topic of work done: Water Extreme Research Project ",
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
      </div>

      <p className="title_2">Alumini</p>
      <div
        style={{
          display: "flex",
          justifyContent: "space-evenly",
          flexWrap: "wrap",
          padding: "30px 5%",
        }}>
        <MemTemplate
          data={{
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
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
            name: "Vinnarasi Rajendran",
            designation: "",
            description: ["Dept. of Civil Engineering, IIT Roorkee"],
            src: require("../assets/doremon.png"),
            links: [
              {
                name: "github",
                link: "https://twitter.com/BargavReddy23 ",
              },
            ],
          }}
        />
      </div>
    </div>
  );
}

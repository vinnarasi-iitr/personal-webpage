import React from 'react'
import MemTemplate from './mem_template'

export default function TeamContainer() {
    const link_logos = {
        "web": {id:"fa-solid fa-globe",color:'black'},
        "linkedin": {id:"fa-brands fa-linkedin",color:'#0077B5'},
        "google_scholar": {id:"fa-brands fa-google-scholar",color:'#4285F4'},
        "github": {id:"fa-brands fa-square-github",color:'black'},
        "reasearch_gate": {id:"fa-brands fa-researchgate",color:'00ccbb'},
        "twitter":{id:"fa-brands fa-twitter",color:'#1DA1F2'},
    }
    return (
        <div>
            <p className='title_2'>Phd and Masters Students</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '30px 5%' }}>

                <MemTemplate data={
                    {
                        name: "Muskula Sai Bargav Reddy",
                        designation: "",
                        description: [
                            "PhD Topic: Hydrometeorological extremes and their influence on nutrient dynamic ", "Research Interests: Land atmospheric interactions, hydrometeorological extremes, earth system modelling, Climate Change",
                            "Email: muskula_sbr@ce.iitr.ac.in ",
                            "Phd Type: Full Time (Project)"
                            
                        ],
                        src: require('../assets/image.png'),
                        links: [
                            { name: link_logos.linkedin, link: 'https://www.linkedin.com/in/sai-bargav-reddy-2257b2172/' },
                            {
                                name: link_logos.google_scholar,
                                link: 'https://scholar.google.com/citations?user=NCCLB8wAAAAJ&hl=en '
                            },
                            {
                                name: link_logos.reasearch_gate,
                                link: 'https://www.researchgate.net/profile/Sai-Muskula'
                            },
                            {
                                name: link_logos.twitter,
                                link: 'https://twitter.com/BargavReddy23 '
                            }
                        ]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />


            </div>

            <p className='title_2'>Research Staff</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '30px 5%' }}>

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />


            </div>

            <p className='title_2'>Undergraduates / Interns</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '30px 5%' }}>

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />


            </div>

            <p className='title_2'>Alumini</p>
            <div style={{ display: 'flex', justifyContent: 'space-evenly', flexWrap: 'wrap', padding: '30px 5%' }}>

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />

                <MemTemplate data={
                    {
                        name: "Vinnarasi Rajendran",
                        designation: "Principal Investigator",
                        description: ["Dept. of Civil Engineering, IIT Roorkee"],
                        src: require('../assets/image.png'),
                        links: [{
                            name: 'github',
                            link: 'https://twitter.com/BargavReddy23 '
                        }]
                    }
                } />


            </div>

        </div>
    )
}

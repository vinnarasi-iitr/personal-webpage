import React from 'react'
import './styles.css';

export default function Achievements() {
    return (
        <div id='achievements'>
            <p className='section-title'>Achievements</p>
            <ul className="text-1 list-1" style={{fontSize:'1rem',listStyle:'circle'}}>
                <li><i class="fa-solid fa-bullseye" style={{color: '#d23232'}}></i> Distinction in Doctoral Research, Awarded by Indian Institute of Technology Delhi, India for the year 2017</li> <br />
                <li><i class="fa-solid fa-bullseye" style={{color: '#d23232'}}></i> Prof. U.C. Kothyari Best PhD Thesis Award 2020, Indian Society of Hydraulics, in HYDRO 2020, IIT Roorkee, Roorkee, Indias</li> <br />
                <li><i class="fa-solid fa-bullseye" style={{color: '#d23232'}}></i> Award for Best Poster Presentation, “Dynamic Catchments: Spatial Variability of Dimensional and Temporal Extremes over Diverse Climatic Regimes”, Poster Presentation in AGU Fall Meeting 2016, San Francisco, USA</li> <br />
                <li><i class="fa-solid fa-bullseye" style={{color: '#d23232'}}></i> Awarded Certificate of Appreciation for paper “Examining spatio-temporal variations of extreme monsoonal rainfall using high resolution daily data”, Open House 2016 at IIT Delhi</li> <br />


            </ul>
        </div>
    )
}

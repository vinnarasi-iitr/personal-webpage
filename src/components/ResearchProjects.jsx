import React from 'react'
import './styles.css';

export default function ResearchProjects() {
  return (
    <div id='research-projects'>
        <p className='section-title'>Research Projects</p>
      <ul className="text-1 list-1" style={{listStyle:'number',fontSize:'1rem'}}>
        <li><b>Hindon Rootz Sensing (HIROS): </b> River Rejuvenation through Scalable Water and Solute Balance Modelling and Informed Farmers Actions (2023); Sponsored by DST, New Delhi under National Mission on Himalayan Ganga and Water Call. Budget: ₹576.5 Lakhs (Includes own part contribution of ₹125.5 Lakhs)</li> <br />
        <li><b>Hydrological Modelling for Dynamic Catchments (2021):</b> Funded by Sponsored Research & Industrial Consultancy Office, Indian Institute of Technology Roorkee. Budget: ₹21.6 Lakhs</li> <br />
        <li><b>Design flood estimation for resilient hydraulic structures under changing climate and environments (2022): </b> Funded by SERB India under Startup Research Grant Scheme. Budget: ₹19.6 Lakhs</li> <br />
      </ul>
      <p className="section-title">Invited Talks / Guest Lectures</p>
      <ul className="text-1 list-1" style={{listStyle:'circle',fontSize:'1rem'}}>
        <li>Delivered at Institutions such as IIST, IISER, NIT and private universities</li>
      </ul>
    </div>
  )
}

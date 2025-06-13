import React from "react";
import "./styles.css";

const teamData = {
  "Graduate Students (PhD and Masters)": [
    {
      name: "Samvedya Surampudi",
      topic: "TBD",
      position: "Research Associate III, 2024-",
      education: [
        "PhD (VIT, 2024)",
        "M.Tech. (Remote Sensing, JNTU, Kakinada), 2015-2017",
        "B.Tech. (Electronics & Communication Engg., Kakinada Institute of Engineering), 2011-2015",
      ],
      email: "samvedya11@gmail.com",
      image: "https://i.imgur.com/FeESFjk.png", // replace with actual path if local
      linkedin: "#",
      scholar: "#",
    },
    // 5 more graduate members
  ],
  "Undergraduate Students / Interns": [
    // 6 interns
  ],
  "PhD Lab Alumni": [
    // 6 alumni
  ],
};

function TeamCard({ member }) {
  return (
    <div className="team-card">
      <img src={member.image} alt={member.name} className="team-img" />
      <div className="team-details">
        <strong>{member.name}</strong>
        <p>
          <em>Topic:</em> {member.topic}
        </p>
        <p>{member.position}</p>
        <ul className="team-edu">
          {member.education.map((edu, i) => (
            <li key={i}>{edu}</li>
          ))}
        </ul>
        <p>
          <strong>Email:</strong> {member.email}
        </p>
        <div className="team-icons">
          <a href={member.linkedin}>
            <i className="fa-brands fa-linkedin"></i>
          </a>
          <a href={member.scholar}>
            <i className="fa-brands fa-google"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default function Teams() {
  return (
    <div className="info-container">
      <h2 className="section-title">Research Staff</h2>
      {Object.entries(teamData).map(([category, members]) => (
        <div key={category}>
          <h3 className="team-category">{category}</h3>
          <div className="team-grid">
            {members.map((member, index) => (
              <TeamCard key={index} member={member} />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

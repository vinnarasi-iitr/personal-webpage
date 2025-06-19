import React from "react";

export function MemTemplate({ data }) {
  return (
    <div>
      <div className="memberbox">
        <div className="memimgbox">
          <img className="memberimg" src={data.src} alt="" />
        </div>
        <div style={{ marginTop: "20px", padding: "5px 15px", height: "100%" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "green" }}>
            {data.name}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "purple" }}>
            {data.designation}
          </p>
          {data.description.map((item) => (
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
                textAlign: "start",
              }}>
              {item}
            </p>
          ))}
          <p style={{ textAlign: "center" }}>
            {data.links != null &&
              data.links.map(({ link, name }) => (
                <a
                  href={link}
                  target="_blank"
                  style={{
                    fontSize: "30px",
                    marginRight: "20px",
                    fontWeight: "500",
                    color: name.color,
                  }}>
                  <i class={name.id}></i>
                </a>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MemTemplate1({ data }) {
  return (
    <div>
      <div className="memberbox">
        <div className="memimgbox">
          <img className="memberimg" src={data.src} alt="" />
        </div>
        <div
          style={{ marginTop: "20px", padding: "5px 15px", height: "420px" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "green" }}>
            {data.name}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "purple" }}>
            {data.designation}
          </p>
          {data.description.map((item) => (
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
                textAlign: "start",
              }}>
              {item}
            </p>
          ))}
          <p style={{ textAlign: "center" }}>
            {data.links != null &&
              data.links.map(({ link, name }) => (
                <a
                  href={link}
                  target="_blank"
                  style={{
                    fontSize: "30px",
                    marginRight: "20px",
                    fontWeight: "500",
                    color: name.color,
                  }}>
                  <i class={name.id}></i>
                </a>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MemTemplate2({ data }) {
  return (
    <div>
      <div className="memberbox">
        <div className="memimgbox">
          <img className="memberimg" src={data.src} alt="" />
        </div>
        <div
          style={{ marginTop: "20px", padding: "5px 15px", height: "350px" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "green" }}>
            {data.name}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "purple" }}>
            {data.designation}
          </p>
          {data.description.map((item) => (
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
                textAlign: "start",
              }}>
              {item}
            </p>
          ))}
          <p style={{ textAlign: "center" }}>
            {data.links != null &&
              data.links.map(({ link, name }) => (
                <a
                  href={link}
                  target="_blank"
                  style={{
                    fontSize: "30px",
                    marginRight: "20px",
                    fontWeight: "500",
                    color: name.color,
                  }}>
                  <i class={name.id}></i>
                </a>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MemTemplate3({ data }) {
  return (
    <div>
      <div className="memberbox">
        <div className="memimgbox">
          <img className="memberimg" src={data.src} alt="" />
        </div>
        <div
          style={{ marginTop: "20px", padding: "5px 15px", height: "270px" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "green" }}>
            {data.name}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "purple" }}>
            {data.designation}
          </p>
          {data.description.map((item) => (
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
                textAlign: "start",
              }}>
              {item}
            </p>
          ))}
          <p style={{ textAlign: "center" }}>
            {data.links != null &&
              data.links.map(({ link, name }) => (
                <a
                  href={link}
                  target="_blank"
                  style={{
                    fontSize: "30px",
                    marginRight: "20px",
                    fontWeight: "500",
                    color: name.color,
                  }}>
                  <i class={name.id}></i>
                </a>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MemTemplate4({ data }) {
  return (
    <div>
      <div className="memberbox">
        <div className="memimgbox">
          <img className="memberimg" src={data.src} alt="" />
        </div>
        <div
          style={{ marginTop: "20px", padding: "5px 15px", height: "180px" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "green" }}>
            {data.name}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "purple" }}>
            {data.designation}
          </p>
          {data.description.map((item) => (
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
                textAlign: "start",
              }}>
              {item}
            </p>
          ))}
          <p style={{ textAlign: "center" }}>
            {data.links != null &&
              data.links.map(({ link, name }) => (
                <a
                  href={link}
                  target="_blank"
                  style={{
                    fontSize: "30px",
                    marginRight: "20px",
                    fontWeight: "500",
                    color: name.color,
                  }}>
                  <i class={name.id}></i>
                </a>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

export function MemTemplate5({ data }) {
  return (
    <div>
      <div className="memberbox">
        <div className="memimgbox">
          <img className="memberimg" src={data.src} alt="" />
        </div>
        <div
          style={{ marginTop: "20px", padding: "5px 15px", height: "210px" }}>
          <p style={{ fontSize: "18px", fontWeight: "500", color: "green" }}>
            {data.name}
          </p>
          <p style={{ fontSize: "16px", fontWeight: "500", color: "purple" }}>
            {data.designation}
          </p>
          {data.description.map((item) => (
            <p
              style={{
                fontSize: "16px",
                fontWeight: "500",
                color: "black",
                textAlign: "start",
              }}>
              {item}
            </p>
          ))}
          <p style={{ textAlign: "center" }}>
            {data.links != null &&
              data.links.map(({ link, name }) => (
                <a
                  href={link}
                  target="_blank"
                  style={{
                    fontSize: "30px",
                    marginRight: "20px",
                    fontWeight: "500",
                    color: name.color,
                  }}>
                  <i class={name.id}></i>
                </a>
              ))}
          </p>
        </div>
      </div>
    </div>
  );
}

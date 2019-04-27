import React from "react";

function Portfolio(props) {
    return (
        <div className="card">
          <div className="img-container">
            <a href={props.link}><h1>{props.title}</h1></a>
            <img alt={props.title} src={props.img} />
            <p>{props.desc}</p>
          </div>
        </div>
    );
  }
  

export default Portfolio
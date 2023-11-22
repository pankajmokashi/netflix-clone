import React from "react";
import "./styles.css";

function Templates({ title, text, thumbnail, video }) {
  return (
    <section>
      <div className="line"></div>
        {video ? (
          <div className="content">
            <div className="content-text">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
            <div className="content-img">
              <img src={thumbnail} alt="content-img" />
            </div>
          </div>
        ) : (
          <div className="content reverse">
            <div className="content-img">
              <img src={thumbnail} alt="content-img" />
            </div>
            <div className="content-text">
              <h2>{title}</h2>
              <p>{text}</p>
            </div>
          </div>
        )}
    </section>
  );
}

export default Templates;

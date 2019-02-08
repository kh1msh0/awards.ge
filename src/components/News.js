import React from "react";

class News extends React.Component {
  render() {
    return (
      <div>
        <div className="news">
          <img className="news-image" src="images/group 10.png" alt="a" />
          <div className="siaxle">  სიახლე</div>  <div className="arrow">
                <span></span>
                <span></span>
                <span></span>
  
</div>
        
        </div>
        <div className="news-holder">
        <div className="siaxleline" ><div className="siaxle90" >სიახლე</div></div>
        
          <div className="newsitem1">
            <div className="hero-text">
              <p style={{ color: "rgb(52, 58, 69)" }}>Today</p>
              <h1 style={{ fontSize: "30px", lineHeight: "40px" }}>
                კაშნე ივენთის სპეციალური სტუმარი იქნება
              </h1>
            </div>
          </div>
          <div className="newsitem2 ">
            <div className="hero-text">
              <p style={{ color: "rgb(52, 58, 69)" }}>08.01.2019</p>
              <h1 style={{ fontSize: "30px", lineHeight: "40px" }}>
                კაშნე ივენთის სპეციალური სტუმარი იქნება
              </h1>
            </div>
          </div>
          <div className="newsitem3">
            <div className="hero-text">
              <p style={{ color: "rgb(52, 58, 69)" }}>28.01.2019</p>
              <h1 style={{ fontSize: "30px", lineHeight: "40px" }}>
                კაშნე ივენთის სპეციალური სტუმარი იქნება
              </h1>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

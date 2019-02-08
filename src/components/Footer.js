import React from "react";
// import { Progress } from 'reactstrap';
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = props => {
  return ( 
    <div className="footer">
      <footer className=" d-flex justify-content-end">
      <a href="/">
          <img  className="mainlogofooter" src="images/Redfork logo1.png" alt="a" />
        </a>
        <div className="footer1" style={{marginLeft:"4%"}}>
          <div className="footer-header d-flex justify-content-around">
            <div className="line-in-footer">ჩვენს შესახებ</div>
            <div className="line-in-footer">სიახლე</div>
            <div className="line-in-footer">კონტაქტი</div>
            <div className="line-in-footer">ხ.დ.კ</div>
          </div>
          <div className="d-flex socmedia">
            <div>სოციალური მედია</div>
            <p className="small-line-footer" />
            {/* <FontAwesomeIcon  icon="facebook-f" /> */}
            {/* <i class="fab fa-facebook-f"></i> */}
          </div>
        </div>
      </footer>
      <div className="d-flex justify-content-around" style={{padding:"50px", color: "white", fontSize:""}}>
        <div>All rights reserved 2018 © infos.ge</div>
        <div>Design by Gio Lezhava</div>
      </div>
    </div>
  );
};

export default Footer;

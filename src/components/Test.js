import React from "react";

// import { Progress } from 'reactstrap';

class Test extends React.Component {
  state = {
    selectedRadio: ""
  };

  render() {
    return (
      <div className="testmtavari">
        <div className="flex-container ">
          <div>
            <div className="img-background">
              <img src="images/wisqvili.jpg" alt="" />
            </div>
            <div>
              <h6>წისქვილი ჯგუფი</h6>
              <p>
                რესტორნის კონცეფცია და ინტერიერი დატვირთულია ქართული კულტურის
                უძველესი სამუზეუმე ექსპონატებით, რაც
              </p>
            </div>
            <input className="box" type="radio" name="like" value="1" />
          </div>

          {/* <div>
            <div className="img-background">
              <img src="images/artuli.png" alt="" />
            </div>
            <div>
              <h6>წისქვილი ჯგუფი</h6>
              <p>
                რესტორნის კონცეფცია და ინტერიერი დატვირთულია ქართული კულტურის
                უძველესი სამუზეუმე ექსპონატებით, რაც
              </p>
            </div>
            <input className="box" type="radio" name="like" value="2" />
          </div>
          <div>
            <div className="img-background">
              <img src="images/Tavaduri.png" alt="" />
            </div>
            <div>
              <h6>წისქვილი ჯგუფი</h6>
              <p>
                რესტორნის კონცეფცია და ინტერიერი დატვირთულია ქართული კულტურის
                უძველესი სამუზეუმე ექსპონატებით, რაც
              </p>
            </div>
            <input className="box" type="radio" name="like" value="3" />
          </div>
          <div>
            <div className="img-background">
              <img src="images/funik.jpg" alt="" />
            </div>
            <div>
              <h6>წისქვილი ჯგუფი</h6>
              <p>
                რესტორნის კონცეფცია და ინტერიერი დატვირთულია ქართული კულტურის
                უძველესი სამუზეუმე ექსპონატებით, რაც
              </p>
            </div>
            <input className="box" type="radio" name="like" />
          </div>
          <div>
            <div className="img-background">
              <img src="images/funik.jpg" alt="" />
            </div>
            <div>
              <h6>წისქვილი ჯგუფი</h6>
              <p>
                რესტორნის კონცეფცია და ინტერიერი დატვირთულია ქართული კულტურის
                უძველესი სამუზეუმე ექსპონატებით, რაც
              </p>
            </div>
            <input className="box" type="radio" name="like" />
          </div>
          <div>
            <div className="img-background">
              <img src="images/wisqvili.jpg" alt="" />
            </div>
            <div>
              <h6>წისქვილი ჯგუფი</h6>
              <p>
                რესტორნის კონცეფცია და ინტერიერი დატვირთულია ქართული კულტურის
                უძველესი სამუზეუმე ექსპონატებით, რაც
              </p>
            </div>
            <input className="box" type="radio" name="like" />
          </div> */}
        </div>
        <div>
          <div className="test-menu-color">
            <div className="menu">
              <ul>
                <li className="active">
                  <a className="a" href="/">
                    ინტერიერი
                  </a>
                </li>
                <li>
                  <a className="a" href="/">
                    ექსტერიერი
                  </a>
                </li>
                <li>
                  <a className="a" href="/">
                    {" "}
                    მომსახურება
                  </a>
                </li>
                <li>
                  <a className="a" href="/">
                    {" "}
                    კერძი
                  </a>
                </li>
                <li>
                  <a className="a" href="/">
                    რესტორანი
                  </a>
                </li>
                <li>
                  <a className="a" href="/">
                    ლუდის ბარი
                  </a>
                </li>
                <li>
                  <a className="a" href="/">
                    ბუტიკ სასტუმრო
                  </a>
                </li>
                <li>
                  <a className="a" href="/">
                    {" "}
                    სასტუმრო
                  </a>
                </li>
                <li>
                  <a className="a" href="/">
                    {" "}
                    ღვინის კომპანია
                  </a>
                </li>
              </ul>
            </div>
          </div>
         
        </div>
        <div className="itemnew">
            <div className="itemnew1">
              ხმის მიცემა
              <div>
                <img
                  style={{ paddingLeft: "50px" }}
                  src="images/group 23.png"
                  alt=""
                />
              </div>
            </div>
          </div>
      </div>
    );
  }
}

export default Test;

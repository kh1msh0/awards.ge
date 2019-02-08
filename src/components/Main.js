import React from "react";

// import { Progress } from 'reactstrap';

class Main extends React.Component {
  state = {
    selectedRadio: ""
  };

  render() {
    return (
      <div className="mainmtavari">
        <div className="header-of-main">საუკეთესო ინტერიერი</div>
        <form
          className="grid-container"
          onChange={data => {
            this.setState({ selectedRadio: data.target.value });
          }}
        >
          <div className="item1">
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

            <input
              className="box"
              type="radio"
              name="like"
              value="1"
              checked={this.state.selectedRadio === "1"}
            />
          </div>
          <div className="item2">
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
            <input
              className="box"
              type="radio"
              name="like"
              value="2"
              checked={this.state.selectedRadio === "2"}
            />
          </div>
          <div className="item3">
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
          <div
            className="itemnew"
            // onPress={() => {
            //   // this.state.selectedRadio
            //   if(this.state.selectedRadio === '1'){
            //       const key =  
            //   }else if(this.state.selectedRadio === '2'){

            //   }

            // }}
          >
            <div className="itemnew1">
              ხმის მიცემა
              <div>
                <img
                  style={{ paddingLeft: "50px" }}
                  src="images/group 23.png"
                  alt=""
                />{" "}
              </div>
            </div>
          </div>
          <div className="item4">
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
            <input
              className="box"
              type="radio"
              name="like"
              value="3"
              checked={this.state.selectedRadio === "3"}
            />
          </div>
          <div className="item5">
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
          <div className="item6">
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
          <div className="item7">
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
          </div>
        </form>
      </div>
    );
  }
}

export default Main;

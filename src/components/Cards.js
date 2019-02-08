import React from "react";
import Ceckdot from "./Ceckdot";

class Cards extends React.Component {
  addLike = () => {
    const updatedLike = { ...this.props.details };
    //  [event.currentTarget.like]: event.currentTarget.value
    updatedLike.like = updatedLike.like + parseFloat(1);
    // console.log(updatedLike)
    this.props.updateLike(this.props.index, updatedLike);
  };
  saveValues = () => {
    if (localStorage._like === undefined) {
      localStorage._like = Date.now();
      this.addLike();
      // console.log(localStorage._like)
    } else if (Date.now() - localStorage._like >= 24 * 60 * 60 * 1000) {
      localStorage._like = Date.now();
      this.addLike();
      //  console.log("this is more then 10 sec")
    } else {
      alert(
        "თქვენ შეგიძლიათ მოიწონოთ რესტორანი " +
          this.props.countLeftedTime() +
          " საათში ერთხელ!"
      );
    }
  };

  render() {
    const {
      saxeli,
      // mplobeli,
      desc,
      image,
      // kategoria,
      like
    } = this.props.details;
    const percent = (100 * like) / this.props.allLikes;

    return (
      <div>
        <div className="img-background" onSubmit={this.saveValues}>
          <img src={image || "http://www.alluserpics.com/data/media/29/00857.jpg"} alt="" />
        </div>
        <div>
          <h6>{saxeli}</h6>
          <p>{desc}</p>
        </div>
        {/* <input className="ml-auto" type="radio" name="like" value="1" /> */}
        <div className="ml-auto ">
          <div className="result">result: {Number.parseFloat(percent).toFixed(1)} %</div>
          <Ceckdot
            saveValues={this.saveValues}
            index={this.props.index}
            cardhandleChange={this.props.cardhandleChange}
          />
        </div>

        {/* <li className="card cardsize" style={{ width: "318px" }}>
          <p className="card-text">{kategoria}</p>
          <img
            className="card-img-top"
            src={image || "https://via.placeholder.com/350x150"}
            alt="Card cap"
          />
          <div className="card-body">
            <h5 className="card-title">{saxeli}</h5>
            <h6 className="card-text">{mplobeli}</h6>
            <p className="card-text">{desc}</p>
            <div>like:{parseFloat(like)}</div>
            <div>all likes:{Number.parseFloat(percent).toFixed(1)} %</div>
            <button onClick={this.saveValues} className="btn btna btn-primary">
              like me
            </button>
          </div>
        </li> */}
      </div>
    );
  }
}

export default Cards;

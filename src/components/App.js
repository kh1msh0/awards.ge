import React from "react";
import Header from "./Header";
// import Main from "./Main";
import Form from "./Form";
import Footer from "./Footer";
import News from "./News";
import "../App.css";
import { base } from "../base";
import { storage } from "../base";

import Modal from 'react-modal';

import Cards from "./Cards";
// import Test from "./Test";
// import Myform from "./myform";
// import EditRestaurantsForm from "./EditRestaurantsForm";

// icons
import { library } from "@fortawesome/fontawesome-svg-core";
import { faLongArrowAltRight } from "@fortawesome/free-solid-svg-icons";
// import {  Facebook } from '@fortawesome/free-solid-svg-icons';
library.add(faLongArrowAltRight);
// library.add( Facebook)



const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class App extends React.Component {
  state = {
    interieri: {},
    exterieri: {},
    momsaxureba: {},
    kerdzi: {},
    restorani: {},
    ludisBari: {},
    butikSastumro: {},
    sastumro: {},
    gvinisKompania: {},
    allLikes: {},
    image: null,
    url: "",
    progress: 0,
    cardwatch: {},
    active: "interieri",
    modalIsOpen: false
  };





   
    openModal = this.openModal.bind(this);
    afterOpenModal = this.afterOpenModal.bind(this);
    closeModal = this.closeModal.bind(this);
 

  openModal() {
    this.setState({modalIsOpen: true});
  }

  afterOpenModal() {
    // references are now sync'd and can be accessed.
    this.subtitle.style.color = 'black';
  }

  closeModal() {
    this.setState({modalIsOpen: false});
  }

  interieriref = React.createRef();
  exterieriref = React.createRef();
  momsaxurebaref = React.createRef();
  kerdziref = React.createRef();
  restoraniref = React.createRef();
  ludisBariref = React.createRef();
  butikSastumroref = React.createRef();
  sastumroref = React.createRef();
  gvinisKompaniaref = React.createRef();

  componentDidMount() {
    this.caferef = base.syncState(`${this.props.match.params.path}/interieri`, {
      context: this,
      state: "interieri"
    });
    this.restaurantsref = base.syncState(
      `${this.props.match.params.path}/exterieri`,
      {
        context: this,
        state: "exterieri"
      }
    );
    this.pubref = base.syncState(
      `${this.props.match.params.path}/momsaxureba`,
      {
        context: this,
        state: "momsaxureba"
      }
    );
    this.clubref = base.syncState(`${this.props.match.params.path}/kerdzi`, {
      context: this,
      state: "kerdzi"
    });
    this.barref = base.syncState(`${this.props.match.params.path}/restorani`, {
      context: this,
      state: "restorani"
    });
    this.laungeref = base.syncState(
      `${this.props.match.params.path}/ludisBari`,
      {
        context: this,
        state: "ludisBari"
      }
    );
    this.laungeref = base.syncState(
      `${this.props.match.params.path}/butikSastumro`,
      {
        context: this,
        state: "butikSastumro"
      }
    );
    this.laungeref = base.syncState(
      `${this.props.match.params.path}/sastumro`,
      {
        context: this,
        state: "sastumro"
      }
    );
    this.laungeref = base.syncState(
      `${this.props.match.params.path}/gvinisKompania`,
      {
        context: this,
        state: "gvinisKompania"
      }
    );
  }

  // addRestaurants = Restaurant => {
  //   const restaurants = { ...this.state.restaurants };

  //   restaurants[`launge${Date.now()}`] = Restaurant;

  //   this.setState({ restaurants });

  //   var reset = () => {
  //     this.setState({ url: "" });
  //     this.setState({ progress: 0 });
  //   };
  //   reset();

  // };

  addRestaurants = Restaurant => {
    var getrestaurantkategori = () => {
      const kat = Restaurant.kategoria;
      return kat;
    };
    const any = { ...this.state[Restaurant.kategoria] };

    any[`cafe${Date.now()}`] = Restaurant;

    this.setState({ [getrestaurantkategori()]: any });

    // if (Restaurant.kategoria === "interieri") {
    //   const interieri = { ...this.state.interieri };
    //   interieri[`cafe${Date.now()}`] = Restaurant;
    //   this.setState({ interieri });

    // } else if (Restaurant.kategoria === "ბარი") {
    //   const bar = { ...this.state.bar };
    //   bar[`bar${Date.now()}`] = Restaurant;
    //   this.setState({ bar });
    // } else if (Restaurant.kategoria === "რესტორანი") {
    //   const restaurants = { ...this.state.restaurants };
    //   restaurants[`restaurant${Date.now()}`] = Restaurant;
    //   this.setState({ restaurants });
    // }
    // if (Restaurant.kategoria === "ლაუნჯი") {
    //   const launge = { ...this.state.launge };
    //   launge[`launge${Date.now()}`] = Restaurant;
    //   this.setState({ launge });
    // }
    // if (Restaurant.kategoria === "პაბი") {
    //   const pub = { ...this.state.pub };
    //   pub[`pub${Date.now()}`] = Restaurant;
    //   this.setState({ pub });
    // }
    // if (Restaurant.kategoria === "კლუბი") {
    //   const club = { ...this.state.club };
    //   club[`club${Date.now()}`] = Restaurant;
    //   this.setState({ club });
    // }
    var reset = () => {
      this.setState({ url: "" });
      this.setState({ progress: 0 });
    };
    reset();
  };

  reset = () => {
    this.setState({ url: "" });
  };

  // updateRestaurant=(key, updatedRestaurant)=>{
  //   const restaurants={...this.state.restaurants};
  //   restaurants[key]=updatedRestaurant;
  //   this.setState({restaurants})
  // };

  counter() {
      const restaurantKeys = Object.keys(this.state[this.getActive()]).map(
      key => this.state[this.getActive()][key].like
    );
    // const restaurantKeys=
    const reducer = (acumulator, currentValue) => acumulator + currentValue;
    const allLikes = restaurantKeys.reduce(reducer);

    // document.getElementById("demo").innerHTML=  allLikes;
    // this.showlikes(allLikes);
    // this.setState({allLikes : allLike})
    return allLikes;
  }

  updateLike = (key, updatedLike) => {
    const restaurants = { ...this.state[this.getActive()] };
    restaurants[key] = updatedLike;
    this.setState({ [this.getActive()]: restaurants });
  };

  getActive() {
    // if (this.state.active === "interieri") return "interieri";
    return this.state.active;
  }

  remove = () => {
    localStorage.removeItem(this.getActive());
  };

  countLeftedTime = () => {
    const passTime = Date.now() - localStorage[this.getActive()];
    const leftTime = 24 * 60 * 60 * 1000 - passTime;
    const time = leftTime / 1000 / 60 / 60;
    // console.log(time.toFixed(2));
    return time.toFixed(2);
  };

  //  file upload

  handleChange = element => {
    if (element.target.files[0]) {
      const image = element.target.files[0];
      this.setState({ image });
    }
  };

  handleUpload = () => {
    const { image } = this.state;
    const uploadTask = storage.ref(`images/${image.name}`).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {
        const progress = Math.round(
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100
        );
        this.setState({ progress });
      },
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref("images")
          .child(image.name)
          .getDownloadURL()
          .then(url => {
            // console.log(url);
            this.setState({ url });
          });
      }
    );
  };

  cardhandleChange = event => {
    this.setState({ cardwatch: event.target.value });
    // console.log(event.target.value);
  };
  addLike = () => {
    const updatedLike = {
      ...this.state[this.getActive()][this.state.cardwatch]
    };
    //  [event.currentTarget.like]: event.currentTarget.value
    updatedLike.like = updatedLike.like + parseFloat(1);
    // console.log(updatedLike);
    this.updateLike(this.state.cardwatch, updatedLike);
  };

  saveValues = () => {
    if (localStorage[this.getActive()] === undefined) {
      localStorage[this.getActive()] = Date.now();
      this.addLike();
      // console.log(localStorage._like)
    } else if (
      Date.now() - localStorage[this.getActive()] >=
      24 * 60 * 60 * 1000
    ) {
      localStorage[this.getActive()] = Date.now();
      this.addLike();
      //  console.log("this is more then 10 sec")
    } else {
      alert(
        "თქვენ შეგიძლიათ მოიწონოთ რესტორანი " +
          this.countLeftedTime() +
          " საათში ერთხელ!"
      );
    }
  };

  showActiveRestaurant = type => {
    // const active="restaurant"
    this.setState({ active: type });
  };

  render() {
    let allLikes;
    if (Object.keys(this.state.restorani).length > 0) allLikes = this.counter();
    let activestyle={paddingBottom: "1.16rem", borderBottom: "1px solid rgb(75, 75, 75)"}
    return (
      <div className="root">
        <Header />
        {/* <button onClick={this.countLeftedTime}>bla bla</button> */}
        {/* <button onClick={this.remove}>remove</button> */}
        <div className="justify-content-end" style={{ display: "flex" }}>
          {/* <a href="admin" className="btn btn-primary">
            Go to admin
          </a> */}
        </div>
        <div className="mtavari">
          {/* <Main/> */}
          {/* <Test style={{height:"auto"}} /> */}

          {/* <ul
            style={{
              display: "flex",
              flexWrap: "wrap",
              justifyContent: "center",
              paddingLeft: "0px"
            }}
          > */}

          {/* </ul> */}

          <div className="siaxle" style={{ marginLeft: "17.5%" }}>
            {" "}
            საუკეთესო ინტერიერი{" "}
          </div>
          <div className="testmtavari">
            <div className="flex-container">
              {this.state.active === "interieri"
                ? Object.keys(this.state.interieri).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.interieri[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}
              {this.state.active === "exterieri"
                ? Object.keys(this.state.exterieri).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.exterieri[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}
              {this.state.active === "momsaxureba"
                ? Object.keys(this.state.momsaxureba).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.momsaxureba[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}
              {this.state.active === "kerdzi"
                ? Object.keys(this.state.kerdzi).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.kerdzi[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}
              {this.state.active === "restorani"
                ? Object.keys(this.state.restorani).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.restorani[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}

              {this.state.active === "ludisBari"
                ? Object.keys(this.state.ludisBari).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.ludisBari[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}

              {this.state.active === "butikSastumro"
                ? Object.keys(this.state.butikSastumro).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.butikSastumro[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}

              {this.state.active === "sastumro"
                ? Object.keys(this.state.sastumro).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.sastumro[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}

              {this.state.active === "gvinisKompania"
                ? Object.keys(this.state.gvinisKompania).map(key => (
                    <Cards
                      allLikes={allLikes}
                      key={key}
                      index={key}
                      details={this.state.gvinisKompania[key]}
                      updateLike={this.updateLike}
                      saveValues={this.saveValues}
                      countLeftedTime={this.countLeftedTime}
                      cardhandleChange={this.cardhandleChange}
                      // allLikes={this.counter}
                    />
                  ))
                : null}
            </div>
            <div>
              <div className="test-menu-color">
                <div className="menu">
                  <ul>
                    <li style={this.state.active==="interieri"? activestyle : null} >
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("interieri")}
                      >
                        ინტერიერი
                      </div>
                    </li>
                    <li style={this.state.active==="exterieri"? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("exterieri")}
                      >
                        ექსტერიერი
                      </div>
                    </li>
                    <li style={this.state.active==="momsaxureba"? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("momsaxureba")}
                      >
                        მომსახურება
                      </div>
                    </li>
                    <li style={this.state.active==="kerdzi"? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("kerdzi")}
                      >
                        კერძი
                      </div>
                    </li>
                    <li style={this.state.active==="restorani"? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("restorani")}
                      >
                        რესტორანი
                      </div>
                    </li>
                    <li style={this.state.active==="ludisBari"? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("ludisBari")}
                      >
                        ლუდის ბარი
                      </div>
                    </li>
                    <li style={this.state.active==="butikSastumro"? activestyle : null}>
                      <div
                        className="a"
                        onClick={() =>
                          this.showActiveRestaurant("butikSastumro")
                        }
                      >
                        ბუტიკ სასტუმრო
                      </div>
                    </li>
                    <li style={this.state.active==="sastumro"? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("sastumro")}
                      >
                        {" "}
                        სასტუმრო
                      </div>
                    </li>
                    <li style={this.state.active==="gvinisKompania"? activestyle : null}>
                      <div
                        className="a"
                        onClick={() =>
                          this.showActiveRestaurant("gvinisKompania")
                        }
                      >
                        {" "}
                        ღვინის კომპანია
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="itemnew">
              <button type="" onClick={this.saveValues} className="itemnew1">
                <div>
                  ხმის მიცემა
                  <img src="images/group 23.png" alt="a" />
                </div>
              </button>
            </div>
          </div>

          {/* {Object.keys(this.state.restaurants).map(key => (
            <EditRestaurantsForm
              key={key}
              index={key}
              restaurant={this.state.restaurants[key]}
              updateRestaurant={this.updateRestaurant}
            />
          ))} */}

          <News />
          <div className="formfooter">
            <Form
              // counter={this.counter}
              addRestaurants={this.addRestaurants}
              handleChange={this.handleChange}
              handleUpload={this.handleUpload}
              // state={this.state}
              url={this.state.url}
              progress={this.state.progress}
              reset={this.reset}
            />
            {/* <progress value={this.state.progress} /> */}
            {/* <input type="file" onChange={this.handleChange} /> */}
            {/* <button onClick={this.handleUpload}>Upload</button> */}
            {/* <Myform addRestaurants={this.addRestaurants} /> */}
            {/* <img src={this.state.url} alt=""   /> */}
            <Footer />
          </div>
        </div>

        <button onClick={this.openModal}>Open Modal</button>
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal"
        >

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
        
      </div>
    );
  }
}

export default App;

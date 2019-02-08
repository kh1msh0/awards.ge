import React from "react";
import Cards from "./Cards";
import "../App.css";
import {base} from "../base";  
import EditRestaurantsForm from "./EditRestaurantsForm";

class Admin extends React.Component {
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
    active: "interieri"
  };
  
  
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


  updateRestaurant=(key, updatedRestaurant)=>{
    const restaurants={...this.state.restaurants};
    restaurants[key]=updatedRestaurant;
    this.setState({restaurants})
  };


  removeRestaurant= (key)=>{
    const restaurants ={...this.state[ this.getActive()]}
    restaurants[key]=null;
    this.setState({[this.getActive()]:restaurants})
  }

  getActive(){
    if(this.state.active === 'interieri')
      return 'interieri'
    return this.state.active;
  }

  showActiveRestaurant=(type)=>{
    // const active="restaurant"
    this.setState({active:type})
  }
  render() {
    let activestyle={paddingBottom: "1.16rem", borderBottom: "1px solid rgb(75, 75, 75)"}
    return (
      <div className="root">
       <a href="/" className="btn btn-primary">go to site</a>
      

            <div className="testmtavari" >
            <div className="flex-container">
            {this.state.active === "interieri"
                ? Object.keys(this.state.interieri).map(key => (
                    <Cards
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
                    <li style={this.state.active==="interieri" ? activestyle : null} >
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("interieri")}
                      >
                        ინტერიერი
                      </div>
                    </li>
                    <li style={this.state.active==="exterieri" ? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("exterieri")}
                      >
                        ექსტერიერი
                      </div>
                    </li>
                    <li style={this.state.active==="momsaxureba" ? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("momsaxureba")}
                      >
                        მომსახურება
                      </div>
                    </li>
                    <li style={this.state.active==="kerdzi" ? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("kerdzi")}
                      >
                        კერძი
                      </div>
                    </li>
                    <li style={this.state.active==="restorani" ? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("restorani")}
                      >
                        რესტორანი
                      </div>
                    </li>
                    <li style={this.state.active==="ludisBari" ? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("ludisBari")}
                      >
                      {" "}
                        ლუდის ბარი
                      </div>
                    </li>
                    <li style={this.state.active==="butikSastumro" ? activestyle : null}>
                      <div
                        className="a"
                        onClick={() =>
                          this.showActiveRestaurant("butikSastumro")
                        }
                      >
                      {" "}
                        ბუტიკ სასტუმრო
                      </div>
                    </li>
                    <li style={this.state.active==="sastumro" ? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("sastumro")}
                      >
                        {" "}
                        სასტუმრო
                      </div>
                    </li>
                    <li style={this.state.active==="gvinisKompania" ? activestyle : null}>
                      <div
                        className="a"
                        onClick={() => this.showActiveRestaurant("gvinisKompania")}
                      >
                        {" "}
                        ღვინის კომპანია
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>


        {Object.keys(this.state[this.getActive()]).map(key => (
            <EditRestaurantsForm
              key={key} 
              index={key}
              removeRestaurant={this.removeRestaurant}
              restaurant={this.state[this.getActive()][key]}
              updateRestaurant={this.updateRestaurant}
            />
          ))}
        
      </div>
    );
  }
}

export default Admin;

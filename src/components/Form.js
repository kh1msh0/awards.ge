import React from "react";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import ImageUpload from "./uploadFile";
// import {storage} from "firebase"

import Modal from 'react-modal';

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

class Form extends React.Component {
  constructor() {
    super();

    this.state = {
      modalIsOpen: false
    };

    this.openModal = this.openModal.bind(this);
    this.afterOpenModal = this.afterOpenModal.bind(this);
    this.closeModal = this.closeModal.bind(this);
  }


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


  saxeliRef = React.createRef();
  mplobeliRef = React.createRef();
  descRef = React.createRef();
  // imageRef=React.createRef();
  kategoriaRef = React.createRef();

  createRestaurant = event => {
    event.preventDefault();
    const restaurant = {
      saxeli: this.saxeliRef.current.value,
      mplobeli: this.mplobeliRef.current.value,
      desc: this.descRef.current.value,
      image: this.props.url,
      kategoria: this.kategoriaRef.current.value,
      like: parseFloat(0)
    };
    this.props.addRestaurants(restaurant);
    this.setState({modalIsOpen: false});
    event.currentTarget.reset()
  };

  

  render() {
    return (
      <div className="form">
      <div className="kompaniis-daregistrireba">
        <div className="sidebar-line" />
        <p className="rotate">კომპანიის დარეგისტრირება</p>
        </div>
        <form   >
          <p className="registrheader">კომპანიის დარეგისტრირება</p>
          <div className="row">
            <div>
              <input
                type="text"
                name="saxeli"
                ref={this.saxeliRef}
                className="inputtype"
                id="exampleFormControlInput1"
                placeholder="დასახელება"
                autoComplete="off"
              />
            </div>

            <div>
              <input
                type="text"
                name="mplobeli"
                ref={this.mplobeliRef}
                className="inputtype"
                id="exampleFormControlInput1"
                placeholder="მფლობელი"
                autoComplete="off"
              />
            </div>

            {/* <div className="form-group">
          <label >suratis linki am etapze :D</label>
          <input
            type="text"
            name="image"
            ref={this.imageRef}
            className="form-control"
            id="exampleFormControlInput1"
            placeholder="ჩააგდეთ ლინკი "
          />
        </div> */}

            <div>
              <select
                className="inputtype"
                name="kategoria"
                ref={this.kategoriaRef}
                autoComplete="off"
              >
                <option value="interieri">ინტერიერი</option>
                <option value="exterieri">ექსტერიერი</option>
                <option value="momsaxureba">მომსახურება</option>
                <option value="kerdzi">კერძი</option>
                <option value="restorani">რესტორანი</option>
                <option value="ludisBari">ლუდის ბარი</option>
                <option value="butikSastumro">ბუტიკ სასტუმრო</option>
                <option value="sastumro">სასტუმრო</option>
                <option value="gvinisKompania">ღვინის კომპანია</option>
              </select>
            </div>

            <div>
              <input
                type="number"
                name="desc"
                ref={this.descRef}
                className="inputtype"
                // id="exampleFormControlTextarea1"
                rows="3"
                placeholder="საკონტაქტო ნომერი"
                autoComplete="off"
                
              />
            </div>
          </div>

          {/* <ImageUpload 
        progress={this.props.progress}
        handleChange={this.props.handleChange}
        handleUpload={this.props.handleUpload} 
        url={this.props.url}
        /> */}

          {/* <button type="submit"  className="damateba">დამატება <FontAwesomeIcon  className="ml-3 iconi"  icon="long-arrow-alt-right" /></button> */}

          <button type="button" onClick={this.openModal} className="damateba">
            დამატება <img className="iconi" src="images/group 22.png" alt="" />
          </button>
          
          <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          style={customStyles}
          contentLabel="Example Modal">

          <h2 ref={subtitle => this.subtitle = subtitle}>Hello</h2>
          <button onClick={this.closeModal}>close</button>
          <button onClick={this.createRestaurant}  >yes</button>
        </Modal>

        </form>        
      </div>
    );
  }
}

export default Form;

import React from "react";

class Ceckdot extends React.Component {
  render() {
    return (
      <div  style={{ marginTop: "" }}>
        <label className="containeri">
          <input
            type="radio"
            name="radio"
            value={this.props.index}
            // checked={this.props.cardwatch === {}}
            onChange={this.props.cardhandleChange}
          />
          <span className="checkmark" />
        </label>
        {/* <button onClick={this.props.saveValues}>nnn</button> */}
      </div>
    );
  }
}

export default Ceckdot;

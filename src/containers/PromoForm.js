import React, { Component } from "react";

class PromoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <form onSubmit={this.updatePrice.bind(this, this.state.value)}>
        <input
          value={this.state.value}
          onChange={this.onInputChange.bind(this)}
        />
        <button>Apply</button>
      </form>
    );
  }

  onInputChange(ev) {
    let value = ev.target.value;

    this.setState({
      value
    });
  }

  updatePrice(val, ev) {
    ev.preventDefault();

    if (val === "DISCOUNT") {
      this.props.discount(10);
    }

    this.setState({
      value: ""
    });
  }
}

export default PromoForm;

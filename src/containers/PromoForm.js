import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { applyDisc } from "../state/discount/action-creators";

import "../styles/PromoForm.css";

class PromoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      value: ""
    };
  }

  render() {
    return (
      <form
        className="wm-form-discount"
        onSubmit={this.updatePrice.bind(
          this,
          this.state.value,
          this.props.total
        )}
      >
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

  updatePrice(val, total, ev) {
    ev.preventDefault();

    if (val === "DISCOUNT") {
      this.props.applyDisc(total.total);
    }

    this.setState({
      value: ""
    });
  }
}

function mapStateToProps(state) {
  console.log(state);
  return {
    total: state.discount
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ applyDisc }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(PromoForm);

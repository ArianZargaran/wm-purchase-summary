import React, { Component } from "react";

import OrderBreakdown from "./OrderBreakdown";

import "../styles/OrderSummary.css";

export default class OrderSummary extends Component {
  render() {
    return (
      <section className="wm-block-order-summary">
        <OrderBreakdown />
        <div>item Details</div>
        <div>Promo Code</div>
      </section>
    );
  }
}

import React from "react";
import { connect } from "react-redux";
function Product({ productReducer: { product }, dispatch }) {
  return (
    <div className="p-4">
      <h1>Products</h1>
    </div>
  );
}

export default connect((store) => store)(Product);

import React from 'react'
import { connect } from 'react-redux'

const mapStatetoProps = state => ({
  count: state,
});

const CounterComponent = ({ count, dispatch }) => (
  <div>
    <p>{count}</p>
    <button onClick={() => dispatch({ type: "Add1" })}>Add 1</button>
    <button onClick={() => dispatch({ type: "Remove1" })}>Remove 1</button>
    <button onClick={() => dispatch({ type: "Add10" })}>Add 10</button>
    <button onClick={() => dispatch({ type: "Remove10" })}>Remove 10</button>
    <button onClick={() => dispatch({ type: "Reset" })}>Reset</button>
  </div>
);

export default connect(mapStatetoProps)(CounterComponent);
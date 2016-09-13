import React, { PropTypes } from 'react';
import { connect } from 'react-redux';

const CounterView = ({ count, onPlusClick, onMinusClick }) => (
  <div>
    <h2>Redux Counter:</h2>
    <p>
      <button onClick={onMinusClick}>-</button>
      {count}
      <button onClick={onPlusClick}>+</button>
    </p>
  </div>
);

CounterView.propTypes = {
  count: PropTypes.number.isRequired,
  onPlusClick: PropTypes.func.isRequired,
  onMinusClick: PropTypes.func.isRequired
};

const mapStateToProps = state => {
  return {
    count: state.count
  };
};

const mapDispatchToProps = dispatch => ({
    onPlusClick: () => dispatch({ type: 'INCREMENT' }),
    onMinusClick: () => dispatch({ type: 'DECREMENT' })
});

export default connect(mapStateToProps, mapDispatchToProps)(CounterView)

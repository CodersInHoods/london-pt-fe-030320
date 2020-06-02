import React from "react";

class CounterPage extends React.Component {

  render() {
    const { setCounter, toggleDoubler, counter, isDoublerEnabled } = this.props;

    return (
      <div>
        <p>Counter value: {counter}</p>
        <p className={isDoublerEnabled ? "enabled" : "disabled"} onClick={toggleDoubler}>
          Doubler enabled? {isDoublerEnabled ? "YES" : "NO!"}
        </p>
        <button onClick={() => setCounter(isDoublerEnabled ? counter * 2 : counter + 1)}>
          +
        </button>
      </div>
    );
  }
}

export default CounterPage;

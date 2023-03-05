import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header">hello Japiaya Kopa Ujjal,time the bolto</h1>
        <h3>The time is: {new Date().toLocaleTimeString(this.props.locale)}</h3>
      </div>
    );
  }
}

export default Clock;

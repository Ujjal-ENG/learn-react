import React from "react";

class Clock extends React.Component {
  render() {
    return (
      <div>
        <h1 className="header">
          hello Japiaya Kopa Ujjal,{this.props.children}
        </h1>
        <h3>
          The time is: {new Date().toLocaleTimeString(this.props.locale)}
          <br></br>
          {this.props.children}
        </h3>
      </div>
    );
  }
}

export default Clock;

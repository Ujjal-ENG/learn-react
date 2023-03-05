import React from "react";

class Clock extends React.Component {
  state = { date: new Date() };

  componentDidMount() {
    this.clockTimer = setInterval(() => {
      this.tick();
    }, 1000);
  }

  tick() {
    this.setState({
      date: new Date(),
    });
  }

  componentWillUnmount() {
    clearInterval(this.clockTimer);
  }

  render() {
    return (
      <div>
        <h1 className="header">
          hello Japiaya Kopa Ujjal,{this.props.children}
        </h1>
        <h3>
          The time is: {this.state.date.toLocaleTimeString(this.props.locale)}
          <br></br>
          {this.props.children}
        </h3>
      </div>
    );
  }
}

export default Clock;

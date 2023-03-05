import React from "react";

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
  }

  componentDidMount() {
    setInterval(() => {
      this.setState({
        date: new Date(),
      });
    }, 1000);
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

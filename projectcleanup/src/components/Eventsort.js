import React from "react";

class EventSort extends React.Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <h5>{this.props.event.group_name}</h5>
        <h5>{this.props.event.city}</h5>
        <h5>{this.props.event.state}</h5>
      </div>
    );
  }
}
export default EventSort;

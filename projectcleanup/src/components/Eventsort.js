import React from "react";
import moment from "moment";

class EventSort extends React.Component {
  render() {
    let dateFormated = moment("" + this.props.event.start_date + "").format(
      "MMM DD, YYYY"
    );
    console.log(this.props.event.start_date);
    return (
      <div>
        <div className="card">
          <div className="cardTitle">
            <h3>{this.props.event.group_name}</h3>
            <h4>{dateFormated}</h4>
          </div>
          <h5>
            {this.props.event.start_time}-{this.props.event.end_time}
          </h5>
          <h5>{this.props.event.city}</h5>
          <h5>{this.props.event.state}</h5>
          {this.props.join === "true" ? <button>click to join</button> : null}
        </div>
      </div>
    );
  }
}
export default EventSort;

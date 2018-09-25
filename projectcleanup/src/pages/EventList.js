//this page will display a list of places to volunteer for community pickup events based on location of user.
//can also search by inputing location manually

import React from "react";
import EventSorter from "../components/EventSort"

class EventList extends React.Component {
    constructor(){
        super()
        this.state={
            events=[]
        }
    }

    componentDidMount(){
        // this will query the database for events listed in the city the user is located in based on information listed in the database. the information will update the state.events
    
    }
  render() {
    return (
      <div>
        <nav>
          <ul>
            <li>
              <a href="#">change location</a>
            </li>
            <li>
              <a href="#" />
            </li>
          </ul>
        </nav>

        <main>
            <section id="eventList">
            {/* this section will list out events occuring in individual card boxes */}
            <EventSorter events={this.state.events}/>
            </section>
        </main>
      </div>
    );
  }
}
export default EventList;

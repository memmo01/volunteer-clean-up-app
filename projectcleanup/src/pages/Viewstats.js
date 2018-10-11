import React from "react";

class Allstats extends React.Component {
  render() {
    return (
      <div>
        {/* this componenet will get all the stats from the current user 
    it will list:
    1. number of events volunteered
    2. number of event lead
    3. number of events upcoming
    4. amount of hours spend volunteering
    5. city spend most of the time volunteering in
    
    
    */}
        This page will allow the user to see all of there stats since they have
        been a volunteering member with the site
        <div className="volunteerStats">
        <section>
          <ul>
         <li>number of events volunteered</li>
         <li>number of lead events</li>
         <li>hours spend volunteering</li>
         <li>city volunteered most</li>
          </ul>
        </section>

        
        </div>
          
        </section>
      </div>
    );
  }
}
export default Allstats;

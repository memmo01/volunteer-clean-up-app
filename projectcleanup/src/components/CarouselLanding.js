import React from "react";
import imgs from "../blankImg.png";
import hh from "../icon-javascript.png";

class CarouselLanding extends React.Component {
  render() {
    return (
      <section>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="d-block w-100" src={imgs} alt="First slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={hh} alt="Second slide" />
            </div>
            <div className="carousel-item">
              <img className="d-block w-100" src={hh} alt="Third slide" />
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#carouselExampleControls"
            role="button"
            data-slide="prev"
          >
            <span className="carousel-control-prev-icon" aria-hidden="true" />
            <span className="sr-only">Previous</span>
          </a>
          <a
            className="carousel-control-next"
            href="#carouselExampleControls"
            role="button"
            data-slide="next"
          >
            <span className="carousel-control-next-icon" aria-hidden="true" />
            <span className="sr-only">Next</span>
          </a>
        </div>
      </section>
    );
  }
}
export default CarouselLanding;

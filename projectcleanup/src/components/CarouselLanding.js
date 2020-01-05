import React from "react";
import img1 from "../images/commClean.JPG";
import img2 from "../images/clean.JPG";

class CarouselLanding extends React.Component {
  render() {
    return (
      // this section pictures need to be added and text in front of the pictures as an advertisment with a theme of helping the community
      <section>
        <div
          id="carouselExampleControls"
          className="carousel slide"
          data-ride="carousel"
        >
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img
                className="d-block w-100 bannerImg"
                src={img1}
                alt="First slide"
              />
              <div id="slideOneTitle">Community Cleanup</div>
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 bannerImg"
                src={img2}
                alt="Second slide"
              />
            </div>
            <div className="carousel-item">
              <img
                className="d-block w-100 bannerImg"
                src={img2}
                alt="Third slide"
              />
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

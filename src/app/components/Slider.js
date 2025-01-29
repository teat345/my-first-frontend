// components/Slider.js
import Image from "next/image";

export default function Slider() {
  return (
    <div id="carouselExample" className="carousel slide my-0" data-bs-ride="carousel">
      <div className="carousel-inner">
        <div className="carousel-item active">
          <Image
            src="/image1.jpg"
            className="d-block w-100"
            alt="Slide 1"
            width={500}
            height={600}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/image2.jpg"
            className="d-block w-100"
            alt="Slide 2"
            width={500}
            height={600}
          />
        </div>
        <div className="carousel-item">
          <Image
            src="/image3.jpg"
            className="d-block w-100"
            alt="Slide 3"
            width={500}
            height={600}
          />
        </div>
      </div>
      <button
        className="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="prev"
      >
        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
      </button>
      <button
        className="carousel-control-next"
        type="button"
        data-bs-target="#carouselExample"
        data-bs-slide="next"
      >
        <span className="carousel-control-next-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>
    </div>
  );
}

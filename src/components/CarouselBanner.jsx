import Carousel from "react-bootstrap/Carousel";

function CarouselBanner({ movies }) {
  return (
    <Carousel>
      {movies.map((movie) => (
        <Carousel.Item key={movie.id} >
          <img
            variant="top"
            src={`https://image.tmdb.org/t/p/w1280${movie.backdrop_path}`} // Use movie backdrop image
            alt={movie.title}
            style={{ width: "100%", objectFit: "cover" }} // Adjust the size and fit
          />
          <Carousel.Caption>
            <h3>{movie.title}</h3>
            <p>{movie.overview}</p>
          </Carousel.Caption>
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselBanner;

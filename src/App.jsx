import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import axios from "axios";
import "./App.css";
import Navbarc from "./components/Navbarc.jsx";
import Cards from "./components/Cards.jsx";
import CarouselBanner from "./components/CarouselBanner.jsx";
import CustomPagination from "./components/CustomPagination.jsx";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const cardsPerPage = 8;

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        setLoading(true);
        const response = await axios.get("http://localhost:3000/movies"); // Correct API endpoint
        console.log("API Response:", response.data); // Debugging
        setMovies(response.data.results || []); // Safeguard against missing results
      } catch (error) {
        setError("Failed to load movies. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchMovies();
  }, []);

 // Pagination logic
 const indexOfLastCard = currentPage * cardsPerPage;
 const indexOfFirstCard = indexOfLastCard - cardsPerPage;
 const currentMovies = movies.slice(indexOfFirstCard, indexOfLastCard);

 const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <>
      <Navbarc />
      <Container fluid className="text-center">
        {loading ? (
          <h1>Loading movies...</h1>
        ) : error ? (
          <h2>{error}</h2>
        ) : (
        <>
          <CarouselBanner movies={movies} />
          <h2 className="py-4">Popular This Week</h2>
          <hr></hr>
          <Row className="mt-4 text-center">
            {currentMovies.map((movie) => (
              <Col key={movie.id} xs={12} sm={6} md={4} lg={3} className="mb-4  d-flex justify-content-center">
                <Cards
                  title={movie.title}
                  description={movie.overview}
                  image={
                    movie.poster_path
                      ? `https://image.tmdb.org/t/p/w500${movie.poster_path}`
                      : "https://placehold.co/500x750?text=No+Image"
                  }
                  rating={movie.vote_average}
                />
              </Col>
            ))} 
          </Row>
          {/* Add Pagination Controls */}
          <CustomPagination
              currentPage={currentPage}
              totalPages={Math.ceil(movies.length / cardsPerPage)}
              paginate={paginate}
          />
        </>
        )}
      </Container>
    </>
  );
}

export default App;

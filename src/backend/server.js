import express from "express";
import dotenv from "dotenv";

import cors from "cors";
import axios from "axios";

const app = express();
dotenv.config({ path: "./src/backend/.env" });
app.use(cors());

const PORT = process.env.PORT || 4000;


// Endpoint to get movie data from MovieDB API
app.get("/movies", async (req, res) => {
  try {
    const response = await axios.get("https://api.themoviedb.org/3/discover/movie", // MovieDB endpoint
      {
        api_key: process.env.API_KEY,
        params: {
          include_adult: false,
          include_video: false,
          language: "en-US",
          page: 1,
          sort_by: "popularity.desc",
          with_genres:27
        },
        headers: {
          accept: "application/json",
          Authorization: `Bearer ${process.env.AUTH_KEY}`, // Use AUTH_KEY from .env
        },
      }
    );
    console.log("Movies fetched:", response.data);
    res.send(response.data); // Send movie data to client
  } catch (e) {
    console.error("Error fetching movies:", e.response ? e.response.data : e.message); // Log the detailed error
    res.status(500).send("Internal server error");
  }
});
console.log('API_KEY:', process.env.API_KEY);
console.log('AUTH_KEY:', process.env.AUTH_KEY);
// Start the server
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

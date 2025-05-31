
document.addEventListener("DOMContentLoaded", () => {
  fetch(`https://api.themoviedb.org/3/movie/popular?api_key=${TMDB_API_KEY}&language=en-US&page=1`)
    .then((res) => res.json())
    .then((data) => {
      const container = document.getElementById("movieList");
      data.results.forEach((movie) => {
        const div = document.createElement("div");
        div.className = "movie-card";
        div.innerHTML = `
          <img src="https://image.tmdb.org/t/p/w300${movie.poster_path}" alt="${movie.title}" />
          <h2>${movie.title}</h2>
          <p>${movie.release_date}</p>
          <a href="watch.html?id=${movie.id}">Watch Now</a>
        `;
        container.appendChild(div);
      });
    });
});

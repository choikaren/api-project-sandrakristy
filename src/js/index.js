// import { genres } from "./genre";
import{ DOMSelectors} from "./DOM";
// import {click} from "./search";
//import "regenerator-runtime/runtime";


const query = `https://api.jikan.moe/v3/search/anime?q=anime`;
console.log (query);


const init = async function () {
  try {
    const response = await fetch(query);
    const data = await response.json();
    const animeList = data.results;
    console.log(animeList);

    animeList.forEach((anime) => {
      // console.log(anime.title)
      DOMSelectors.movieGrid.insertAdjacentHTML("beforebegin",
      `
      <div class="movie-card">
      <div class="movie-card-front">
        <img
          src="${anime.image_url}"
          alt=""
          class="poster"
        />
      </div>
      <div class="movie-card-back">
        <h3 class="movie-card-header">${anime.title}</h3>
        <div class="synopsis-box">
        <p class="synopsis">${anime.synopsis}</p>
      </div>
        <div class="score-box">
          <p class="user-score">Community Score: ${anime.score}</p>
        </div>
        <div class="release-box">
          <p class="release-date">Released: ${anime.start_date}</p>
        </div>
      </div>
    </div>`
      )
    }

    )

  } catch (error) {
    console.log(error);
  }
};

init();


// const init = async function () {
//     try {
//       const response = await fetch(query);
//       const data = await response.json();
//       console.log (data);

//     //const searchBar = document.getElementById("searchBar");
//     //console.log(searchBar);
//     //searchBar.addEventListener("keyup", function() {
//      // console.log("a");
  
//       //const searchString = e.target.value; //
      
//     //});

  
//       data.results.forEach((anime) => {
//         let genreArr = [];
//         const addGenre = function () {
//           genres.forEach((element) => {
//             if (anime.genre_ids.includes(element.id)) {
//               genreArr.push(element.name);
//               return genreArr;
//             }
//           });
//         };
//         addGenre();
//         DOMSelectors.grid.insertAdjacentHTML(
//           "beforeend",
//           `<div class="anime-card">
//         <div class="anime-card-front">
//           <img
//             src="https://image.tmdb.org/t/p/w300/${anime.poster_path}"
//             alt=""
//             class="poster"
//           />
//         </div>
//         <div class="anime-card-back">
//           <h3 class="anime-card-header">${anime.original_title}</h3>
//           <div class="score-box">
//             <p class="user-score">Community Score</p>
//             <p class="user-score">${anime.vote_average}</p>
//           </div>
//           <div class="release-box">
//             <p class="release-date">Released</p>
//             <p class="release-date">${anime.release_date}</p>
//           </div>
//           <div class="anime-genres">
//             <div>${genreArr}</div>
//           </div>
//         </div>
//       </div>`
//         );
//       });
//     } catch (error) {
//       console.log(error);
//     }
// };
// init();  
   
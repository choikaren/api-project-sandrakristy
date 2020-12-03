import { genres } from "./genre";
import{ DOMSelectors} from "./DOM";
//import "regenerator-runtime/runtime";


const query = ` https://jikan.moe/`;


const NextPage = async function() {
    DOMSelectors.nextButton.addEventListener("click", function (e) {
      DOMSelectors.grid.innerHTML = "";
      offset += 30;
      defaultPage();
    });
    DOMSelectors.previousButton.addEventListener("click", function (e) {
      if (offset == 0) {
        offset = 0;
      } else {
        DOMSelectors.grid.innerHTML = "";
        offset -= 30;
        defaultPage();
      }
    });
 
}

const init = async function () {
    try {
      const response = await fetch(query);
      const data = await response.json();

    //const searchBar = document.getElementById("searchBar");
    //console.log(searchBar);
    //searchBar.addEventListener("keyup", function() {
     // console.log("a");
  
      //const searchString = e.target.value; //
      
    //});

  
      data.results.forEach((anime) => {
        let genreArr = [];
        const addGenre = function () {
          genres.forEach((element) => {
            if (anime.genre_ids.includes(element.id)) {
              genreArr.push(element.name);
              return genreArr;
            }
          });
        };
        addGenre();
        DOMSelectors.grid.insertAdjacentHTML(
          "beforeend",
          `<div class="anime-card">
        <div class="anime-card-front">
          <img
            src="https://image.tmdb.org/t/p/w300/${anime.poster_path}"
            alt=""
            class="poster"
          />
        </div>
        <div class="anime-card-back">
          <h3 class="anime-card-header">${anime.original_title}</h3>
          <div class="score-box">
            <p class="user-score">Community Score</p>
            <p class="user-score">${anime.vote_average}</p>
          </div>
          <div class="release-box">
            <p class="release-date">Released</p>
            <p class="release-date">${anime.release_date}</p>
          </div>
          <div class="anime-genres">
            <div>${genreArr}</div>
          </div>
        </div>
      </div>`
        );
      });
    } catch (error) {
      console.log(error);
    }
};
init();  
   
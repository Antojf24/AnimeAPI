const API = "https://api.jikan.moe/v4/anime";

let animes = document.querySelector("#animes");

fetch(API)
    .then((res) => res.json())
    .then((data) => {
        data.data.forEach((anime) => {
            if(anime.trailer.url != null){
                animes.innerHTML += `
                <div class="card col-2 justify-content-center align-items-center m-1">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <a class="btn orange text-white" href="${anime.trailer.url}">Go watch <i class="fa-regular fa-share-from-square"></i></a>
                </div>
                `;
            }else{
                animes.innerHTML += `
                <div class="card col-2 justify-content-center align-items-center m-1">
                <img src="${anime.images.jpg.image_url}" alt="${anime.title}">
                <h3>${anime.title}</h3>
                <button class="btn orange text-white">Go watch <i class="fa-regular fa-share-from-square"></i></button>
                <span>Trailer not available</span>
                </div>
                `;
            }
           
        })
    })

let more = document.getElementById("more");

more.addEventListener("click", function() {
    if(animes.classList.contains("non-active")) {
        animes.classList.remove("non-active");
        animes.classList.add("active");
        more.innerHTML = 'Show less <i class="fa-solid fa-chevron-up"></i>';
    } else {
        animes.classList.remove("active");
        animes.classList.add("non-active");
        more.innerHTML = 'Show more <i class="fa-solid fa-chevron-down"></i>';
    }
});
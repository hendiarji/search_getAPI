const searchBtn = document.getElementById("search-btn");
const articlelList = document.getElementById("articles");

searchBtn.addEventListener("click", getArticleList);

function getArticleList() {
  let searchInputTxt = document.getElementById("search-input").value.trim();
  fetch(`https://newsapi.org/v2/top-headlines?q=${searchInputTxt}&country=&category=business&apiKey=8759106afb7b49a896e487b994b6022e`)
    .then((response) => response.json())
    .then((data) => {
      let html = "";
      if (data.articles) {
        data.articles.forEach((articles) => {
          html += `
          <div class="card" style="width: 18rem;">
            <img src=${articles.urlToImage} class="card-img-top">
            <div class="card-body">
              <h5 class="card-title">${articles.title}</h5>
              <p class="card-text"> <Moment format="YYYY/MM/DD">${articles.publishedAt}</Moment></p>
              <p class="card-text">${articles.source.name}</p>
              <a href="${articles.url}" class="btn btn-primary">Read More</a>
            </div>
          </div>
          `;
        });
      }

      articlelList.innerHTML = html;
    });
}

const container = document.querySelector(".container");
console.log(container);

const postComponent = ({ image, title, date }) => {
  const finalDate = Date.parse(date);
  return `<div class="post">
  <div class="image-container">
    <img src="${image}" />
  </div>
  <div class="content">
    <div class="title">${title}</div>
    <div class="date">${Number.isNaN(finalDate) ? "invalid date" : date}</div>
  </div>
  </div>`
}
//container.innerHTML = post({ image: "./assets/post-image.png", title: "Title", date: "Date" });

const posts = [{ image: "./assets/post-image.png", title: "Title", date: "02/02/2021" }, { image: "https://d3hnfqimznafg0.cloudfront.net/images/news/ImageForNews_26919_15786618897301054.png", title: "Title2", date: "Date2" }]
//container.innerHTML = "";
posts.forEach((post) => {
  const element = document.createElement("div")
  element.innerHTML = postComponent(post);
  container.appendChild(element);
})
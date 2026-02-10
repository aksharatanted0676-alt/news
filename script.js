const API_KEY = "04f8fe92cedb403d889c9dec5ae94ff7";



async function loadNews(category) {

    // ENGLISH ONLY NEWS
    const apiURL = `https://gnews.io/api/v4/top-headlines?country=in&category=${category}&lang=en&token=${API_KEY}`;

    try {
        const response = await fetch(apiURL);
        const data = await response.json();
        console.log(data);

        const newsBox = document.getElementById("newsBox");
        newsBox.innerHTML = "";

        data.articles.forEach(article => {
            const div = document.createElement("div");
            div.classList.add("news-card");

            div.innerHTML = `
                <img src="${article.image || 'https://via.placeholder.com/300'}">
                <h3>${article.title}</h3>
                <p>${article.description || "No description available"}</p>
                <a href="${article.url}" target="_blank">Read More</a>
            `;

            newsBox.appendChild(div);
        });

    } catch (error) {
        console.log("Error loading news:", error);
        alert("News not loading. Check API key or internet.");
    }
}

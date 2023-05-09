export default function generateArticleCards(article) {
	const articleCard = document.createElement("div");
	const articleImage = document.createElement("img");
	const articleTitle = document.createElement("h2");

	articleCard.className = "article__card";

	articleImage.src = article.image;
	articleImage.alt = article.image_alt_text;

	articleTitle.textContent = article.title;

	articleCard.appendChild(articleImage);
	articleCard.appendChild(articleTitle);

	return articleCard;
}
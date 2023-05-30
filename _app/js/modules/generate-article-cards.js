export default function generateArticleCards(article) {
	// generating article cards and card elements
	const articleCard = document.createElement("button");
	const articleImage = document.createElement("img");
	const articleTitle = document.createElement("h3");
	const articleCategory = document.createElement("p");

	articleCard.className = "article__card";
	articleImage.className = "article__card-image";
	articleTitle.className = "article__card-title";
	articleCategory.className = "article__card-category";

	// displaying article data in generated elements
	articleImage.src = article.image;
	articleImage.alt = article.image_alt_text;

	articleTitle.textContent = article.title;

	articleCategory.textContent = article.category;

	articleCard.appendChild(articleImage);
	articleCard.appendChild(articleTitle);
	articleCard.appendChild(articleCategory);

	return articleCard;
}
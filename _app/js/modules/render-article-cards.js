import { getAllArticles } from "./get-articles.js";
import generateArticleCards from "./generate-article-cards.js";

export async function renderArticleCards() {
	const articles = await getAllArticles();
	const articleCardContainer = document.getElementById("article-card__container");

	articles.forEach((article) => {
		const articleCard = generateArticleCards(article);
		articleCardContainer.appendChild(articleCard);
	});
}
import { getAllArticles } from "./get-articles.js";

export async function generateCategoryButtons() {
	const articles = await getAllArticles();

	const buttonContainer = document.getElementById('menu__category-buttons-container');

	articles.forEach((article, index) => {
		const categories = articles[index].category;
		const categoryButton = document.createElement('button');

		categoryButton.className = 'menu__category-button'
		categoryButton.innerText = categories;

		buttonContainer.appendChild(categoryButton);

	})
}
import { getAllCategories } from "./get-categories.js";

export async function generateCategoryButtons() {
	const categories = await getAllCategories();

	const buttonContainer = document.getElementById('menu__category-button-container');

	categories.forEach(category => {
		const categoryButton = document.createElement('button');

		categoryButton.className = 'menu__category-button'
		categoryButton.innerText = category.category;

		buttonContainer.appendChild(categoryButton);

	})
}
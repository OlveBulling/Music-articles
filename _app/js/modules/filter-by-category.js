export function filterArticlesByCategory(category) {
	const articleCards = document.querySelectorAll('.article__card');

	// hides articles without chosen category using css
	articleCards.forEach((card) => {
		if (card.querySelector('.article__card-category').textContent === category) {
			card.classList.remove('article__card--hidden');
		} else {
			card.classList.add('article__card--hidden');
		}
	});
}
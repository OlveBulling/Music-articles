export function filterArticlesByCategory(category) {
	const articleCards = document.querySelectorAll('.article__card');

	articleCards.forEach((card) => {
		if (card.querySelector('.article__card-category').textContent === category) {
			card.classList.remove('hidden-article');
		} else {
			card.classList.add('hidden-article');
		}
	});
}
import { sanity } from "../sanity.js";

export async function getAllCategories() {
	const query = `*[_type == 'category'] {
		category,
	 }`;

	const categories = await sanity.fetch(query);

	return categories;
}
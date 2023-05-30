import { sanity } from "../sanity.js";

export async function getAllArticles() {
	// fetching more information than dispalayed in cards for future purposes
	const query = `*[_type == 'article'] {
		'image': image.asset->url,
		title,
		'category': category->category,
		'author': author->name,
		'image_alt_text': alt_text,
		date,
		image_source,
		'body': text_content[].children[0].text,
		lead,
		'related_articles': related_articles[]->title,
	 }`;

	const articles = await sanity.fetch(query);
	return articles;
}
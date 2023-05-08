export default {
	title: 'Article',
	name: 'article',
	type: 'document',
	fields: [
		{
			title: 'Title',
			name: 'title',
			type: 'string',
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Slug',
			name: 'slug',
			type: 'slug',
			options: {
				source: 'title'
			},
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Image',
			name: 'image',
			type: 'image',
		},
		{
			title: 'Author',
			name: 'author',
			type: 'reference',
			to: { type: 'author' },
			validation: (Rule) => Rule.required()
		},
	]
}
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
			title: 'Image source',
			name: 'image_source',
			type: 'string',
			description: 'Paste image link here',
		},
		{
			title: 'Alt text',
			name: 'alt_text',
			type: 'string',
			description: 'Alt text for the image',
		},
		{
			title: 'Author',
			name: 'author',
			type: 'reference',
			to: { type: 'author' },
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Lead',
			name: 'lead',
			type: 'string'
		},
		{
			title: 'Date',
			name: 'date',
			type: 'date',
			description: 'The date the article will be published',
		},
		{
			title: 'Text content',
			name: 'text_content',
			type: 'array',
			of: [{ type: 'block' }],
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Category',
			name: 'category',
			type: 'reference',
			to: { type: 'category' },
			validation: (Rule) => Rule.required()
		},
		{
			title: 'Related articles',
			name: 'related_articles',
			type: 'array',
			of: [
				{
					type: 'reference',
					to: { type: 'article' },
				}
			]
		}
	]
}
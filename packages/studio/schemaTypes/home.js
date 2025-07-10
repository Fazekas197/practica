import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home Page Content',
  type: 'document',
  groups: [
    {
      name: 'heroSection',
      title: 'Hero Section',
    },
    {
      name: 'categorySection',
      title: 'Popular Categories Section',
    },
    {
      name: 'promoSection',
      title: 'Promotion Section',
    },
    {
      name: 'benefitsSection',
      title: 'Benefits Section',
    },
    {
      name: 'aboutSection',
      title: 'About Section',
    },
  ],
  fields: [
    // HERO SECTION //
    defineField({
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'heroSection',
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Section Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'heroSection',
    }),
    defineField({
      name: 'heroImg',
      title: 'Hero Section Image',
      type: 'image',
      validation: (rule) => rule.required(),
      group: 'heroSection',
    }),

    // CATEGORY SECTION //
    defineField({
      name: 'popularCategories',
      title: 'Popular Categories',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'categories'}]}],
      validation: (rule) => rule.required().max(4),
      group: 'categorySection',
    }),

    // PROMOTION SECTION //
    defineField({
      name: 'promoTitle',
      title: 'Promotion Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'promoSection',
    }),
    defineField({
      name: 'promoDesc',
      title: 'Promotion Description',
      type: 'text',
      validation: (rule) => rule.required(),
      group: 'promoSection',
    }),
    defineField({
      name: 'promoImg',
      title: 'Promotion Image',
      type: 'image',
      validation: (rule) => rule.required(),
      group: 'promoSection',
    }),

    // BENEFITS SECTION //
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'icon',
              type: 'string',
              description: 'Icons from https://icones.js.org',
            },
            {
              name: 'text',
              type: 'string',
            },
          ],
        },
      ],
      validation: (rule) => rule.required(),
      group: 'benefitsSection',
    }),

    // ABOUT SECTION //
    defineField({
      name: 'aboutImg',
      title: 'Promotion Image',
      type: 'image',
      validation: (rule) => rule.required(),
      group: 'aboutSection',
    }),
    defineField({
      name: 'aboutTitle',
      title: 'About Title',
      type: 'string',
      validation: (rule) => rule.required(),
      group: 'aboutSection',
    }),
    defineField({
      name: 'aboutText',
      title: 'About Text',
      type: 'text',
      validation: (rule) => rule.required(),
      group: 'aboutSection',
    }),
  ],
})

import {defineField, defineType} from 'sanity'

export const home = defineType({
  name: 'home',
  title: 'Home Page Content',
  type: 'document',
  fields: [
    defineField({
      name: 'heroTitle',
      title: 'Hero Section Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroSubtitle',
      title: 'Hero Section Subtitle',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'heroImg',
      title: 'Hero Section Image',
      type: 'image',
      validation: (rule) => rule.required(),
    }),
  ],
})

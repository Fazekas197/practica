import {defineField, defineType} from 'sanity'

export const product = defineType({
  name: 'product',
  title: 'Products',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'desc',
      title: 'Product Description',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'price',
      title: 'Product Price',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Product Images',
      type: 'array',
      of: [{type: 'image'}],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'cod',
      title: 'Product Code',
      type: 'number',
      validation: (rule) => rule.required(),
    }),
  ],
})

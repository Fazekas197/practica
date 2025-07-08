import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export const dataset = process.env.SANITY_STUDIO_DATASET || 'production'
export const projectId = process.env.SANITY_STUDIO_PROJECTID
export const title = process.env.SANITY_STUDIO_TITLE

export default defineConfig({
  name: 'default',
  title,

  projectId,
  dataset,

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})

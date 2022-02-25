import { createCurrentUserHook, createClient } from 'next-sanity'
import createImageUrlBuilder from '@sanity/image-url'

export const config = {
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET || 'production',
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: process.env.NODE_ENV === 'production',
  apiVersion: '2021-03-25',
}

export const sanityClient = createClient(config)

export const imageBuilder = createImageUrlBuilder(config)

export const urlForImage = (source) =>
  imageBuilder.image(source).auto('format').fit('max')

export const useCurrentUser = createCurrentUserHook(config)

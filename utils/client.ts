import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'nmour9po',
  dataset: 'production',
  apiVersion: '2023-02-27',
  useCdn: false,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

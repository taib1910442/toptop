import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'nmour9po',
  dataset: 'production',
  apiVersion: '2021-10-21',
  useCdn: false,
  token: 'sk4KBnhKgksju6pl3lJlwb4GBfrU6vL4tni6k8dOKoHo8qxQNlmwsYhmVkgrT5cwBnl1A1AG6vaNSsOcMiqdWYxdBGzbd2aUFkH5AGX02veoEY5aLJIVO3sEMyXKvSvGCtiK8ZyvtNfBj7u5NPlEoqnfhDnXpFeJ2mD6iAkd1dvyLnRmGFK7',
});

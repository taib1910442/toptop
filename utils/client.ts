import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'nmour9po',
  dataset: 'production',
  apiVersion: '2023-02-27',
  useCdn: false,
  token: 'skA1l9WBcWmdglRg7a2axfI4O9vYL8rHftjz0VRRQVbC0VN4YBADXXAHEM8OS9KS2Xi9Mh6hLnri8VHdtNnSYCOvROuaD7cI3VKst5Qbv2cnoYVmdsDQ8uwwXduNAOegyagqKaF8gF9FlRTiblOq9QRKCJFwTYACdT6N0zLQCj6CoTC1sgx2',
});

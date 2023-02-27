import sanityClient from '@sanity/client';

export const client = sanityClient({
  projectId: 'nmour9po',
  dataset: 'production',
  apiVersion: '2023-02-27',
  useCdn: false,
  token: 'skPMTWjsyuXByrAuQQ1lemnJDBJzFdoGQVbdab4Wg5r0JxHkjBxrQXvGOQMTqKGu2c8X8d0hc3vJLil6vfa5WJfIFUaH1TOwqld159Ylo7R0HdMpTtfYRjGe7B9nY2o8codK2hpWSzDqrDMVs4ugYBA9OFA8LrDLQHHhAQz1wKDjceepebeQ',
});

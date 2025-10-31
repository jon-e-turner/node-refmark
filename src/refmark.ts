import { GitHubGraphQlClient } from './utils/graphql/github-graphql-client.js';

export default async function Refmark(options?: {
  pat: string;
  ref?: string;
  repo?: string;
}) {
  if (options) {
    const client = new GitHubGraphQlClient(options.pat);

    if (options.repo && options.ref) {
      await client
        .fetchRef(options.ref, options.repo)
        .then((res) => console.log(res));
    }
  }
}

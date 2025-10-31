import type { GraphQlClient } from './utils/graphql/github-graphql-client.js';
import type { GraphQlQueryResponseData } from '@octokit/graphql';

export default async function FetchRef(
  client: GraphQlClient,
  ref: string,
  repo: string
): Promise<string | undefined> {
  const ghClient = await client.client();

  if (ghClient) {
    const { repository } = (await ghClient(
      `
        query commitUrl($repo:String!, $ref:String!) {
          repository(owner:$repo, name:$repo) {
            ref(qualifiedName:$ref) {
              target {
                commitUrl
              }
            }
          }
        }
      `,
      {
        repo: repo,
        ref: ref,
      }
    )) as GraphQlQueryResponseData;

    return repository.ref.target.commitUrl;
  }

  return undefined;
}

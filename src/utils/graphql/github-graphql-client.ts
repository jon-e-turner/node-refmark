import { graphql } from '@octokit/graphql';
import FetchRef from '../../fetch-ref.js';

export interface GraphQlClient {
  client: () => Promise<typeof graphql | undefined>;
  endpoint: URL;
  name: string;
  pat: string;

  fetchRef: (ref: string, repo: string) => Promise<string | undefined>;
}

export class GitHubGraphQlClient implements GraphQlClient {
  private static _name: string;
  private static _endpoint: URL;
  private static _instance: GitHubGraphQlClient;
  private static _pat?: string;
  private static _client?: typeof graphql;

  constructor(pat?: string) {
    if (GitHubGraphQlClient._instance) {
      return GitHubGraphQlClient._instance;
    }

    GitHubGraphQlClient._name = 'GitHub GraphQL Client';
    GitHubGraphQlClient._endpoint = new URL('https://api.github.com/graphql');
    GitHubGraphQlClient._pat = pat ?? process.env.REFMARK_TOKEN;

    GitHubGraphQlClient._instance = this;
  }

  get name() {
    return GitHubGraphQlClient._name;
  }

  get endpoint() {
    return GitHubGraphQlClient._endpoint;
  }

  set pat(value: string) {
    GitHubGraphQlClient._pat = value;
  }

  get client() {
    return async (): Promise<typeof graphql | undefined> => {
      if (!GitHubGraphQlClient._client) {
        if (!GitHubGraphQlClient._pat || GitHubGraphQlClient._pat.length <= 0) {
          // logger.log(
          //   `No GitHub personal access token found. Cannot create the GraphQL client.`
          // );
          return undefined;
        }

        const { createTokenAuth } = await import('@octokit/auth-token');
        const auth = createTokenAuth(GitHubGraphQlClient._pat);

        GitHubGraphQlClient._client = graphql.defaults({
          request: {
            hook: auth.hook,
          },
        });
      }

      return GitHubGraphQlClient._client;
    };
  }

  public fetchRef = async (ref: string, repo: string) => {
    return await FetchRef(this, ref, repo);
  };
}

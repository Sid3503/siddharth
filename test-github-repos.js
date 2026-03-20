/**
 * Test script to count contributions across all user repositories
 * This queries GraphQL for each repo individually to get accurate counts
 * Run with: node test-github-repos.js
 */

const token = process.env.VITE_GITHUB_TOKEN;

if (!token) {
  console.error('❌ Error: VITE_GITHUB_TOKEN not found');
  process.exit(1);
}

console.log('🔍 Fetching all repositories...\n');

// First, get all repos
const reposQuery = `
  query($first: Int = 100, $after: String) {
    viewer {
      repositories(first: $first, after: $after) {
        edges {
          node {
            name
            isPrivate
            url
          }
        }
        pageInfo {
          hasNextPage
          endCursor
        }
      }
    }
  }
`;

async function getAllRepos() {
  let allRepos = [];
  let hasNextPage = true;
  let after = null;

  while (hasNextPage) {
    const response = await fetch('https://api.github.com/graphql', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        query: reposQuery,
        variables: { after },
      }),
    });

    const data = await response.json();

    if (data.errors) {
      console.error('GraphQL Error:', data.errors);
      process.exit(1);
    }

    const repos = data.data.viewer.repositories.edges.map(e => e.node);
    allRepos = allRepos.concat(repos);

    hasNextPage = data.data.viewer.repositories.pageInfo.hasNextPage;
    after = data.data.viewer.repositories.pageInfo.endCursor;
  }

  return allRepos;
}

async function getRepoStats(owner, repo) {
  const query = `
    query($owner: String!, $repo: String!, $from: DateTime!, $to: DateTime!) {
      repository(owner: $owner, name: $repo) {
        defaultBranchRef {
          target {
            ... on Commit {
              history(first: 0, since: $from, until: $to) {
                totalCount
              }
            }
          }
        }
      }
    }
  `;

  const oneYearAgo = new Date();
  oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
  const today = new Date();

  const response = await fetch('https://api.github.com/graphql', {
    method: 'POST',
    headers: {
      'Authorization': `Bearer ${token}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables: {
        owner,
        repo,
        from: oneYearAgo.toISOString(),
        to: today.toISOString(),
      },
    }),
  });

  const data = await response.json();

  if (data.errors) {
    return null;
  }

  return data.data.repository.defaultBranchRef?.target?.history?.totalCount || 0;
}

(async () => {
  const repos = await getAllRepos();
  console.log(`📦 Found ${repos.length} repositories\n`);

  console.log('Repository Summary:');
  console.log('Name | Private | Commits (last year)');
  console.log('-----|---------|--------------------');

  let totalCommits = 0;

  // Get commits for each repo
  for (const repo of repos) {
    const commits = await getRepoStats('Sid3503', repo.name);
    if (commits !== null && commits > 0) {
      console.log(`${repo.name.padEnd(25)} | ${repo.isPrivate ? 'Yes' : 'No '} | ${commits}`);
      totalCommits += commits;
    }
  }

  console.log('-----|---------|--------------------');
  console.log(`\n📊 Total commits across all repos (last year): ${totalCommits}\n`);

  console.log('⚠️  Note: This counts ONLY commits, not PRs/Issues/Reviews');
  console.log('    The GraphQL ContributionsCollection API may count differently\n');
})();

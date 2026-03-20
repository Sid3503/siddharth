/**
 * Test script to debug GitHub GraphQL API responses
 * Run with: node test-github-api.js
 */

const token = process.env.VITE_GITHUB_TOKEN;

if (!token) {
  console.error('❌ Error: VITE_GITHUB_TOKEN not found in environment variables');
  console.error('Please set: export VITE_GITHUB_TOKEN=your_token_here');
  process.exit(1);
}

console.log('🔍 Testing GitHub GraphQL API...\n');

const query = `
  query($username: String!, $from: DateTime!, $to: DateTime!) {
    user(login: $username) {
      name
      login
      contributionsCollection(from: $from, to: $to) {
        totalCommitContributions
        totalIssueContributions
        totalPullRequestContributions
        totalPullRequestReviewContributions
        contributionCalendar {
          totalContributions
        }
      }
    }
  }
`;

const oneYearAgo = new Date();
oneYearAgo.setFullYear(oneYearAgo.getFullYear() - 1);
const today = new Date();

const variables = {
  username: 'Sid3503',
  from: oneYearAgo.toISOString(),
  to: today.toISOString(),
};

console.log('📅 Date Range:', {
  from: variables.from,
  to: variables.to,
});
console.log('');

fetch('https://api.github.com/graphql', {
  method: 'POST',
  headers: {
    'Authorization': `Bearer ${token}`,
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({
    query,
    variables,
  }),
})
  .then(res => res.json())
  .then(data => {
    console.log('📊 GraphQL Response:\n');
    console.log(JSON.stringify(data, null, 2));

    if (data.errors) {
      console.log('\n❌ GraphQL Errors:');
      data.errors.forEach(err => {
        console.log(`  - ${err.message}`);
      });
      process.exit(1);
    }

    if (data.data && data.data.user) {
      const user = data.data.user;
      const collection = user.contributionsCollection;

      console.log('\n✅ Parsed Results:\n');
      console.log(`User: ${user.name} (@${user.login})`);
      console.log(`Commits: ${collection.totalCommitContributions}`);
      console.log(`Pull Requests: ${collection.totalPullRequestContributions}`);
      console.log(`Issues: ${collection.totalIssueContributions}`);
      console.log(`Code Reviews: ${collection.totalPullRequestReviewContributions}`);

      const total =
        collection.totalCommitContributions +
        collection.totalPullRequestContributions +
        collection.totalIssueContributions +
        collection.totalPullRequestReviewContributions;

      console.log(`Total: ${total}`);
      console.log(`\n📈 Percentages:\n`);
      console.log(`Commits: ${Math.round((collection.totalCommitContributions / total) * 100)}%`);
      console.log(`Pull Requests: ${Math.round((collection.totalPullRequestContributions / total) * 100)}%`);
      console.log(`Issues: ${Math.round((collection.totalIssueContributions / total) * 100)}%`);
      console.log(`Code Reviews: ${Math.round((collection.totalPullRequestReviewContributions / total) * 100)}%`);

      if (collection.contributionCalendar) {
        console.log(`\n📅 Total Contributions (all types): ${collection.contributionCalendar.totalContributions}`);
      }
    }
  })
  .catch(err => {
    console.error('❌ Fetch Error:', err);
    process.exit(1);
  });

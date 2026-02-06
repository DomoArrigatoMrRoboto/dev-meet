export async function fetchGitHubStats(user,repo) {
    const reposRes = await fetch(`https://api.github.com/repos/${user}/repos`);
    const repos = await reposRes.json();

    const prsRes = await fetch(`https://api.github.com/repos/${user}/${repo}/pulls`);
    const prs = await prsRes.json();

    const issuesRes = await fetch(`https://api.github.com/repos/${user}/${repo}/issues?state=closed`);
    const issues = await issuesRes.json();

    return {
        project: repos.length,
        prs: prs.length,
        issues: issues.length,
    };

}
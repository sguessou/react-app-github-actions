module.exports = {
    branches: "master",
    repositoryUrl: "https://github.com/sguessou/react-app-github-actions",
    plugins: [
        "@semantic-release/commit-analyzer",
        "@semantic-release/release-notes-generator",
        "@semantic-release/github"
    ]
}
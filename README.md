# Linting Templates

This repository provides the latest linting templates for use in your projects.

## General Recommendations

### Local IDEs (e.g. VSCode, IntelliJ)
- DO prefer project settings over user settings to minimise conflicts
- DO configure IDE extensions to use project env for linting
  - Some IDE linting extensions (e.g. python black) are shipped with their own linting version, which may not match the linting version in CI
  - By pointing the extension to the project env, we can ensure that local and CI are linted consistently

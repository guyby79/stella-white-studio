#!/usr/bin/env bash
# Build the static export and publish out/ to the gh-pages branch (GitHub Pages serves that branch).
# Needs node/npm, git and the gh CLI logged in as the repo owner. No tokens are stored or printed.
set -euo pipefail
cd "$(dirname "$0")/.."

REPO="guyby79/stella-white-studio"
REMOTE="https://github.com/${REPO}.git"
GIT_NAME="$(git config user.name || echo guyby79)"
GIT_EMAIL="$(git config user.email || echo guyby79@users.noreply.github.com)"

npm run build
test -f out/index.html || { echo "build produced no out/index.html" >&2; exit 1; }

WORK="$(mktemp -d)"
trap 'rm -rf "$WORK"' EXIT
cp -a out/. "$WORK/"
touch "$WORK/.nojekyll"

cd "$WORK"
git init -q -b gh-pages
git add -A
git -c user.name="$GIT_NAME" -c user.email="$GIT_EMAIL" commit -q -m "Publish static export"
git -c credential.helper= -c credential.helper='!gh auth git-credential' push -q --force "$REMOTE" gh-pages:gh-pages
echo "Pushed to gh-pages. Live at https://guyby79.github.io/stella-white-studio/ (Pages rebuilds in about a minute)."

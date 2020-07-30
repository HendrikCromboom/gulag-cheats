## Git-Github Cheat by Hendrik Cromboom

----------------------------------------

`git init "target"` creates repo in target, or in current position without a target

`git add "filename.extention"` adds said file to your queue

`git commit` commits the queued files to a new commit/hash, also moves master/branch

`git commit -m "changelog"`commits and uses the example text as the changelog

`git commit -amend`replaces last commit with current added changes, if no changes it changes just the changelog message

`git push`pushes your commit to the original/public

`git pull` pulls the public state to the local state and merges

`git fetch`pulls the public state but doesnt merge

`git merge "branch"` merges your head with the target

`git diff` shows differences between local and public state

`git log` shows commit and changes history

`git branch "branchname"` creates branch on HEAD with as name "branchname"

`git branch -f "branchname"`as above but it will replace an already existing branch if so

------------------------

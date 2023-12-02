# github-actions

# Basic Building Blocks

* Workflows define events and jobs.
* GitHub workflows are picked up from the .github/workflows directory. This is a fixed place where workflows are scanned
  for. Inside this directory, .yml files are defined that follow the GitHub Actions syntax.
  The file name can be any custom name different then the name defined in the file.
* The `name` keyword of a workflow is user defined and serves a purpose similar to a "Subject".
* The `on` keyword is similar to the triggers. This decides how a workflow should start.
    * Common examples used are `push`, `workflow_dispatch`, and `issues`.
    * `workflow_dispatch` allows you to manually trigger a build rather than on an event
* Multiple `jobs` can be defined in a single action. These can be parallel or sequential.
* Each job needs a type of server it will run on specified with the `runs-on` keyword.
* Each job can contain multiple `steps` that run sequentially. The GitHub Marketplace is a good place to find common
  actions such as `actions/checkout@v3` to checkout your repo from the build server.
* Custom expressions are defined by `${{ ... }}`. This is useful for pulling attributes/context defined elsewhere.

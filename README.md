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

# Workflows & Events - Deep Dive

* Most events are repository related but others exist such as workflow/schedule related.
* Workflow triggers: https://docs.github.com/en/actions/using-workflows/events-that-trigger-workflows
* Activity types and Event Filters give more control over workflow triggers
  * Documentation contains activity types that can be used on a webhook event
  * Event filters can be found in workflow syntax documentation
* Workflows can be cancelled manually if you recognize errors
* Workflows can be skipped by adding `[skip ci]` to the commit message

# Job Artifacts & Outputs

* Job artifacts are the output assets generated by a job
  * Can download and use manually or in other jobs via actions
  * Examples include deployable website files, logs, binaries, etc...
* upload-artifact provided by GitHub actions team. download-artifact allows use in deployment.
* Job outputs can be values used by subsequent jobs. An example is a file generated in a previous build step.
* Caching  can reduce workflow time for common steps such as `install dependencies` or reused files.
  * GitHub provides the `actions/cache@...` for tmaarijmmaarijhis common use case.
  * Cached dependencies are available across workflow executions. 
  * Caching should not be used for outputs such as artifacts

# Using Environment Variables & Secrets

* Portions of code may involve dynamic values from environments variables such as credentials, ports.
* `env` is a keyword that can be set on a workflow level for a variable consistent between jobs.
  * This can also be defined on the job level for more precision.
* GitHub Actions provides default environment variables that are set automatically - find these in the docs.
* GitHub Actions allows you to store secrets for values you don't want to expose. You can access these with the 
`secrets` context object.
* GitHub environment secrets are used for environment specific secrets such as databases.
  * You can define this inside your job with the `environment` keyword.
  * This helps separate environment jobs and environment branches

# Controlling Workflow & Job Execution

* Jobs and Steps can be executed conditionally
  * `if` and `continue-on-error` are examples of this. We can evaluate conditions via expressions.
  * These work well when you need to evaluate prior step outcomes/conclusions which trigger special condition functions
    * `failure()`, `success()`, `always()`, `cancelled()` -- Docs contain definitions
* 
const core = require('@actions/core')
const github = require('@actions/github')
const exec = require('@actions/exec')

function run() {
  core.note('Hello from custom JavaScript Action!')
}

run();
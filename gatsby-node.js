const fs = require(`fs`)
const path = require(`path`)
const mkdirp = require(`mkdirp`)
const crypto = require(`crypto`)
const Debug = require(`debug`)

const debug = Debug(`gatsby-theme-nodeschool`)
const withDefaults = require(`./utils/default-options`)

// Ensure that content directories exist at site-level
exports.onPreBootstrap = ({ store }, themeOptions) => {
  const { program } = store.getState()
  // const { contentPath, assetPath } = withDefaults(themeOptions)

  const dirs = [
    path.join(program.directory, 'data/attendees'),
    path.join(program.directory, 'data/mentors'),
    path.join(program.directory, 'data/photos'),
    path.join(program.directory, 'data/pages'),
  ]

  dirs.forEach(dir => {
    debug(`Initializing ${dir} directory`)
    if (!fs.existsSync(dir)) {
      mkdirp.sync(dir)
    }
  })
}

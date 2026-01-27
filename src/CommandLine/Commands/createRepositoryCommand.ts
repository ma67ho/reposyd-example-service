export default function (parent, name) {
  const cmd = parent.command(name)
  cmd.option('-p, --password <password>', 'admin user password to be set')
    .option('--silent', 'suppresses all outputs', false)
    .option('-u, --user <name>', 'name of the admin user', 'admin')
    .option('--url <url>', 'url of the repository. If not specified, env variable REPOSYD_URL is used as default')
  return cmd
}

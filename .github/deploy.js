var FtpDeploy = require("ftp-deploy")
var path = require("path")
var ftpDeploy = new FtpDeploy()

var args = process.argv.slice(2)
if (args[2] !== undefined) {
  var config = {
    host: args[0],
    user: args[1],
    password: args[2],
    port: 21,
    localRoot: path.join(__dirname, "..", "public"),
    remoteRoot: "/",
    include: ["*", "**/*", ".htaccess"],
    deleteRemote: true,
  }

  ftpDeploy
    .deploy(config)
    .then(res => console.log("\x1b[32m", "\nDeployed\n"))
    .catch(err => console.log(err))

  ftpDeploy.on("uploading", function (data) {
    console.log("\x1b[32m", "Uploaded file: ", data.filename)
    console.log(
      "\x1b[33m",
      "Files remaining: ",
      data.totalFilesCount - data.transferredFileCount,
      "\n"
    )
  })

  ftpDeploy.on("upload-error", function (data) {
    console.log(data.err)
  })
} else {
  console.error("\x1b[31m", "\bError! host, user and password required!")
  console.log("\x1b[32m", "\bUsage: npm run deploy -- <host> <user> <password>")
}

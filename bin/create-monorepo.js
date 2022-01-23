const fs = require("fs");
const os = require("os");
const { exec, execSync, spawn } = require("child_process");
const { mkdtemp, mkdtempSync } = require("fs");

async function main() {
  const desiredDir = process.argv[2];
  if (!desiredDir) return;
  const tempDir = mkdtempSync(os.tmpdir() + desiredDir);
  const currDir = process.cwd();

  // fs.opendirSync(tempDir);
  fs.mkdirSync("debug");
  // exec("npm init -y", console.log);
  execSync("npm init -y", { cwd: "debug" }, (e, s, er) => {
    console.log(e, s, er);
  });

  fs.rmSync("debug", { recursive: true, force: true });
}
main();

console.log("Bye");

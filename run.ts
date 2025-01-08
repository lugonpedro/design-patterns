import {exec} from 'child_process' 

const folderName = process.argv[2];
const scriptName = process.argv[3];

if (!folderName || !scriptName) {
  console.error('Please provide both a folder name and a script name to run.');
  process.exit(1);
}

const command = `node --no-warnings --loader ts-node/esm ${folderName}/${scriptName}/index.ts`;

exec(command, (error, stdout, stderr) => {
  if (error) {
    console.error(`Error executing script: ${scriptName}`);
    return;
  }

  if (stderr) {
    console.error(`Error: ${stderr}`);
    return;
  }

  console.log(stdout);
});
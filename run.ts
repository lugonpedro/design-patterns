import {exec} from 'child_process' 

const scriptName = process.argv[2];

if (!scriptName) {
  console.error('Please provide a script name to run.');
  process.exit(1);
}

const command = `node --no-warnings --loader ts-node/esm ${scriptName}.ts`;

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
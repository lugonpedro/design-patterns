import {exec} from 'child_process';
import os from 'os';

const folderName = process.argv[2];
const scriptName = process.argv[3];

const clearConsole = () => {
  const platform = os.platform();
  if (platform === 'win32') {
    exec('cls', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(stdout);
    });
  } else {
    exec('clear', (error, stdout, stderr) => {
      if (error) {
        console.error(`Error: ${error.message}`);
        return;
      }
      if (stderr) {
        console.error(`Stderr: ${stderr}`);
        return;
      }
      console.log(stdout);
    });
  }
};


const execCommand = () => {
  if (!folderName || !scriptName) {
    console.error('Please provide both a folder name and a script name to run.');
    process.exit(1);
  }

  exec(`npx sucrase-node ${folderName}/${scriptName}/index.ts`, (error, stdout, stderr) => {
    if (error) {
      console.error(`Error executing script: ${scriptName}`);
      console.error(error)
      return;
    }
  
    if (stderr) {
      console.error(`Error: ${stderr}`);
      return;
    }
  
    console.log(stdout);
  });
}

clearConsole()
execCommand()
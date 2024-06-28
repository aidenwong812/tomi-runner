import commander from "commander";

export type Workflow = {
    commands: string[],
    cpu: string,
    memory: string
}

// Imaginary database
const workflows: Workflow[] = [];

import { exec } from 'child_process';

// Function to execute a shell command
function executeCommand(command: string): Promise<string> {
    return new Promise((resolve, reject) => {
        exec(command, (error, stdout, stderr) => {
            if (error) {
                reject(`error: ${error.message}`);
                return;
            }
            if (stderr) {
                reject(`stderr: ${stderr}`);
                return;
            }
            resolve(stdout);
        });
    });
}

export const runner = {
    run: async (workflow: Workflow) => {
        const commands = workflow.commands
        console.log("Requested CPU: ", workflow.cpu)
        console.log("Requested Memory: ", workflow.memory)
        for (const command of commands) {
            console.log("Running command now:", command);
            await executeCommand(command)
                .then(output => console.log('-----Command output-----\n', output))
                .catch(err => console.error('-----Command failed-----\n', err));
        }
        workflows.push(workflow)
        console.log('-----END OF WORKFLOW-----')
        return { succeeded: true }
    }
}

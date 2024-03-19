const core = require('@actions/core');

try {
  // Get the inputs
  const param1 = core.getInput('param1');
  const param2 = core.getInput('param2');

  // Print the inputs
  console.log(`Parameter 1: ${param1}`);
  console.log(`Parameter 2: ${param2}`);

  // Set the outputs (if needed)
  core.setOutput('result', `combined ${param1} - ${param2}`);
} catch (error) {
  core.setFailed(error.message);
}

const chalk = require('chalk');

const streamError = (error) => console.log(chalk.red(error));

module.exports = streamError;
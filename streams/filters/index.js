const chalk = require('chalk');

const streamFilter = (tweet) => console.log(chalk.green(`${tweet.user.screen_name} : ${tweet.text}`));

module.exports = streamFilter;
#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import Refmark from '../src/refmark.js';

program
  .version('1.0.0')
  .description('Benchmark JavaScript applications by git ref')
  .option('-p --repo <type>', 'The name of the GitHub repository to clone')
  .option('-r --ref <type>', 'The ref to fetch')
  .action((options) => {
    // Call options validator
    const wait = ora(`Validating options...`).start();
    const fetch = ora(chalk.yellowBright(`Fetching ${options.ref}`));

    setTimeout(() => {
      wait.succeed(chalk.cyanBright(`Options OK!`));

      fetch.start();
      // Call main function
      Refmark(options);
      fetch.succeed();
    }, 3000);
  });

program.parse(process.argv);

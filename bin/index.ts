#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import ora from 'ora';
import Refmark from '../src/refmark.js';

program
  .version('1.0.0')
  .description('Benchmark JavaScript applications by git ref')
  .option('-o --repo <type>', 'The name of the GitHub repository')
  .option(
    '-p --pat <type>',
    'GitHub authentication token',
    process.env.REFMARK_TOKEN
  )
  .option('-r --ref <type>', 'The ref to fetch')
  .action(async (options) => {
    // Call options validator
    const fetch = ora(chalk.yellowBright(`Fetching ${options.ref}`));

    fetch.start();
    // Call main function
    await Refmark(options).then(
      () => fetch.succeed,
      () => fetch.fail
    );
  });

program.parse(process.argv);

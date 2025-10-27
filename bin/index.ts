#!/usr/bin/env node

import { program } from 'commander';
import chalk from 'chalk';
import ora from 'ora';

program
  .version('1.0.0')
  .description('Benchmark JavaScript applications by git ref')
  .option('-n, --name <type>', 'Add your name')
  .action((options) => {
    const wait = ora(`Thinking...`).start();

    setTimeout(() => {
      wait.succeed(chalk.cyan(`Hey, ${options.name}!`));
    }, 3000);
  });

program.parse(process.argv);

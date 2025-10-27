#!/usr/bin/env node

import { program } from "commander";

program
  .version("1.0.0")
  .description("Benchmark JavaScript applications by git ref")
  .option("-n, --name <type>", "Add your name")
  .action((options) => {
    console.log(`Hey, ${options.name}!`);
  });

program.parse(process.argv);
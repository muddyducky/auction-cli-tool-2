#!/usr/bin/env node
import inquirer from "inquirer"
import { Command } from "commander"
import { cliCommands } from "../utils/listings/cliConfig.js"

const program = new Command()

//__ Set up CLI ___
program
    .version("1.0.0")
    .description("Auction listing management CLI")

cliCommands.forEach(cmd => {
    const command = program
    .command(cmd.name)
    .alias(cmd.alias)
    .description(cmd.description)

    if(cmd.prompt){
        if(cmd.name.includes("<")) {
            command.action(async (...args) => {
                const answers = await inquirer.prompt(cmd.prompt)
                await cmd.action(...args.slice(0, -1),answers);
            });
        } else {
        command.action(async() => {
            const answers = await inquirer.prompt(cmd.prompt)
            await cmd.action(answers)
        })
    }
    } else {
        command.action(cmd.action)
    }  
})   

program
    .parse(process.argv)


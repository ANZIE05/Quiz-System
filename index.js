// #! /usr/node/
import inquirer from "inquirer";
import chalk from "chalk";
const quiz = await inquirer.prompt([
    {
        name: "ques_1",
        type: "list",
        message: (chalk.red.bold("Q.1: How many pillars of Islam?")),
        choices: ['Three', 'Four', 'Five', 'Seven']
    },
    {
        name: "ques_2",
        type: "list",
        message: (chalk.red.bold("Q.2: How many Surahs are there in the Holy Quran?")),
        choices: ['112', '114', '116', '118']
    },
    {
        name: "ques_3",
        type: "list",
        message: (chalk.red.bold("Q.3: In which month pilgrims are perform the Hajj?")),
        choices: ['Moharram ul Haram', 'Rabi Ul Awal', 'Ramadan', 'Dhul Hijjah']
    },
    {
        name: "ques_4",
        type: "list",
        message: (chalk.red.bold("Q.4: Name the largest Mosque in the world?")),
        choices: ['Masjid al-Haram', 'Al-Masjid an-Nabawi', 'Al-Aqsa Mosque', 'Faisal Mosque']
    }
]);
let score = 0;
switch (quiz.ques_1) {
    case 'Five':
        console.log(chalk.green.bold("1. Your answer is correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magenta.bold("1. Wrong answer!"));
}
switch (quiz.ques_2) {
    case '114':
        console.log(chalk.green.bold("2. Your answer is correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magenta.bold("2. Wrong answer!"));
}
switch (quiz.ques_3) {
    case 'Dhul Hijjah':
        console.log(chalk.green.bold("3. Your answer is correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magenta.bold("3. Wrong answer!"));
}
switch (quiz.ques_4) {
    case 'Masjid al-Haram':
        console.log(chalk.green.bold("4. Your answer is correct!"));
        ++score;
        break;
    default:
        console.log(chalk.magenta.bold("4. Wrong answer!"));
}
console.log(chalk.yellow.bold.italic((`Your Final Score is: ${score}`)));

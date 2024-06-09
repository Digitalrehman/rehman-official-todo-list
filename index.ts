#! /usr/bin/env node
import inquirer from 'inquirer';

let todoList = [];
let todoOption = await inquirer.prompt([
    {
        type: 'list',
        name: 'option',
        message: 'What do you want to do?',
        choices: [
            'Add Todo',
            'View Todo',
            'Delete Todo',
            'Update Todo',
            'Exit'
        ]
    }
])

while (todoOption.option != 'Exit') {
    switch (todoOption.option) {
        case 'Add Todo':
            let addTodo = await inquirer.prompt([
                {
                    name: 'todo',
                    type: 'input',
                    message: 'Enter Your Todo here'
                }
            ])
            todoList.push(addTodo.todo);
            break;
        case 'View Todo':
            console.log(todoList);
            break;
        case 'Delete Todo':
            let deleteTodo = await inquirer.prompt([
                {
                    name: 'todo',
                    type: 'list',
                    message: 'Enter Todo',
                    choices: todoList
                }
            ])
            let index = todoList.indexOf(deleteTodo.todo);
            todoList.splice(index, 1);
            break;
        case 'Update Todo':
            let updateTodo = await inquirer.prompt([
                {
                    name: 'todo',
                    type: 'list',
                    message: 'Enter Todo',
                    choices: todoList
                }
            ])
            let newTodo = await inquirer.prompt([
                {
                    name: 'newTodo',
                    type: 'input',
                    message: 'Enter New Todo'
                }
            ])
            let index2 = todoList.indexOf(updateTodo.todo);
            todoList.splice(index2, 1, newTodo.newTodo);
            break;
    }
    todoOption = await inquirer.prompt([
        {
            type: 'list',
            name: 'option',
            message: 'What do you want to do?',
            choices: [
                'Add Todo',
                'View Todo',
                'Delete Todo',
                'Update Todo',
                'Exit'
            ]
        }
    ])
}

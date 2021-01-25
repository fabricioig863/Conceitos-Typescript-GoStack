import { Request, Response } from 'express';
import CreateUser from './services/CreateUser';

// string, number, boolean, object, Array
// Interfaces utilizamos para definir qual seria o formato do objeto

export function helloWorld(request: Request, response: Response){
    const user = CreateUser({
        email: 'fabricioig863@gmail.com',
        password: 123456,
        techs: [
            'Node.JS', 
            'ReactJS', 
            'React-Native',
            { title: 'Javascript', experience: 100},
        ],
    });

    return response.json({ message: "Hello World"});
}
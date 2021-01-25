/**
 * Para criar: name, email, password 
 */

//  A 'interface' é como definimos os tipos de um conjunto de informações geralmente um objeto
interface TechObject {
    title: string,
    experience: number,
}

interface CreateUserData {
    name?: string; // A interrogação deixa a variável opcional
    email: string;
    password: number;
    techs: Array <string | TechObject>;
}

export default function CreateUser({name = '', email, password}: CreateUserData) {
     const user = {
         name,
         email,
         password,
     }

     return user;
}
import express from 'express';
import { helloWorld } from './routes';
const PORT = 3333;

const app = express();

app.get('/', helloWorld)

app.listen(PORT, () => {
    console.log(`Server running port...${PORT}`)
});

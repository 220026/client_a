const message = require("./message");
const dotenv = require("dotenv");
dotenv.config();

const name = process.env.NAME;
const number = process.env.NUMBER;

const result = message.create(name, number);
console.log(result);

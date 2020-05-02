import { example } from './example';

const body = document.querySelector("body");
const div = document.createElement("div");
div.appendChild(document.createTextNode(example(41) + ""));
body.appendChild(div);

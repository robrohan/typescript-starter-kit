import { example } from './example';

const body = document.querySelector("body");
const div = document.createElement("div");
div.appendChild(document.createTextNode(example(10) + ""));
body.appendChild(div);

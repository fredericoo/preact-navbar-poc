import fs from 'fs';
import { h } from 'preact';
import render from "preact-render-to-string";
import { DATA_ATTRIBUTE } from '../constants';
import App from "./index";

const appHtml = render(h('div', {[DATA_ATTRIBUTE]: '', children: h(App,{})}), {}, { pretty: true });

console.log(appHtml);

fs.writeFile('build.html',appHtml, ()=>{ console.log("Success") });
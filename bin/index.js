#!/usr/bin/env node

const fs = require('fs');
const path = require('path');

const eslintRCFile = fs.readFileSync(path.resolve(__dirname, '../.eslintrc'), 'UTF-8');
const editorConfigFile = fs.readFileSync(path.resolve(__dirname, '../.editorconfig'), 'UTF-8');
const jsConfigFile = fs.readFileSync(path.resolve(__dirname, '../jsconfig.json.template'), 'UTF-8');

fs.writeFileSync(path.join(process.cwd(), '.eslintrc'), eslintRCFile);
fs.writeFileSync(path.join(process.cwd(), '.editorconfig'), editorConfigFile);
fs.writeFileSync(path.join(process.cwd(), 'jsconfig.json'), jsConfigFile);

#!/usr/bin/env node

const path = require('path');
const fs = require('fs');
var chalk = require('chalk');
var cmd = require('commander');
var co = require('co');
var prompt = require('prompt');


prompt.message = 'dev';

exports.paths = {
    home: process.env.HOME,
    dev: __dirname,
    dev_home: path.join( __dirname, '/home' ),
    dev_homestead: path.join( __dirname, '/homestead' ),
    cwd: process.cwd(),
    project_home: path.join( __dirname, '/..' )
};


exports.compareFiles = function (file1, file2){
    var stat1 = fs.statSync( file1 );
    var stat2 = fs.statSync( file2 );

    console.log(stat1);

};

exports.getDirectories = function (srcpath){
  return fs.readdirSync(srcpath)
    .filter(file => fs.statSync(path.join(srcpath, file)).isDirectory());
};

exports.promptConfirm = function(message, callback){
    prompt.start();

    var property = {
        name: 'yesno',
        message: message,
        validator: /y[es]*|n[o]?/,
        warning: 'Must respond yes or no',
        default: 'no'
    };

    prompt.get(property, function(err, result){
        callback(result.yesno === 'yes' || result.yesno === 'y');
    });
};

exports.console = {
    info: function(obj){
        console.log( chalk.blue(obj) );
    },
    file: function(content){
        console.log( chalk.dim(content) );
    },
    error: function(obj){
        console.log( chalk.blue(obj) );
    },
    warn: function(obj){
        console.log( chalk.yellow(obj) );
    },
    success: function(obj){
        console.log( chalk.green(obj) );
    },
    h1: function(obj){
        console.log(chalk.magenta.bold.underline(obj));
    },
};
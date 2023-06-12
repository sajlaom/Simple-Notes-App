// const add = require('./utils.js')
// const sum = add(4,2);
// console.log(sum);


 const notes = require('./notes.js')    //this step is to load that file into a variable which contains all its functions
// const msg = getNotes()
// console.log(msg );


//------Validation example------//
 
// const validator = require('validator');
// console.log(validator.isEmail('gmail.com'));
// console.log(validator.isURL('https://mead.io'));
// console.log(validator.isURL('https:mead.io'));


//------CHALK module example------//

//const chalk = require('chalk');          //loading chalk into project

// const greenMsg = chalk.green("Success!!");
// console.log(greenMsg);
// const log = console.log;
// log(chalk.blue("hello")+"Iam"+chalk.red("Sajla"));
// log(chalk.blue('Hello', 'World!', 'Foo', 'bar', 'biz', 'baz'));
// log(chalk.bgRed.bold('Hello world!'));
// log(chalk.green(
// 	'I am a green line ' +
// 	chalk.black.yellow.underline.bold.inverse('with a blue substring') +
// 	' that becomes green again!'
// ));


//------Command line argument example------//

// const proces = process.argv[2];
// console.log(proces);
// const command = process.argv[2];
// if(command === "add"){
// 	console.log("something is added");
// }else if(command==="sajla"){
// 	console.log("my name is added");
// }


//------yargs module example------//

const yargs = require('yargs');

yargs.command({
    command:'add',
    description:'something to be read',
    builder:{
        title:{
            describe:'title of read data',
            demandOption: true,
            type:'string'
        },
        body:{
            describe:'body content',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
    //     console.log('Title: ',argv.title);
    //     console.log('Body: ',argv.body);
    
    notes.addNotes(argv.title,argv.body);
    }
}).parse();

yargs.command({
    command:'remove',
    description:'something to be removed',
    builder:{
        title:{
            describe:'title of removing data',
            demandOption: true,
            type:'string'
        
        }

    },
    handler(argv){
    notes.removeNotes(argv.title);
    }
}).parse();

yargs.command({
    command:'list',
    description:'something to be listed',
    handler(argv){
            notes.listNotes(argv.title)
        
    }
}).parse();

yargs.command({
    command:'read',
    description:'something to be read',
    builder:{
        title:{
            describe:'title of reading data',
            demandOption:true,
            type:'string'
        }
    },
    handler(argv){
         notes.readNotes(argv.title)
    }
}).parse();

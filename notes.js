const fs=require('fs')
const chalk = require('chalk');


const addNotes=(title,body)=>{
const notes = loadNotes()  //the output(object)from loadnotes is saved to  'notes'

// const duplicateNotes = notes.filter((note)=> note.title === title       //short hand syntax of arrow fntn
//     //return note.title === title              //if title is same which makes the boolean value as true it then returns that note 
// )
const duplicateNote = notes.find((note)=> note.title === title)      //most apt method to find any duplicates rather than the above'filter' method  so that it dont search throughout the whole data

debugger

if(!duplicateNote){

    notes.push({
        title:title,           //title gets the value from the title argument above(arg of addNotes) same for body also
        body:body
    })

    saveNotes(notes)          //the new updated notes  is to saved hence called savenots fnctn

    console.log(chalk.green.inverse('new note added'));
}else{
    console.log('Note duplicated');
}
}

const saveNotes = (notes)=>{   //it takes an array as argmnt,when we want to save data,we'l pass an objct or array as argmnts
   const dataJson = JSON.stringify(notes)
   fs.writeFileSync('notes.json',dataJson)
}

const loadNotes= ()=>{
    try{
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJson = dataBuffer.toString()
        return JSON.parse(dataJson)
    }catch(e){
        return [];
    } 
}

const removeNotes = (title)=>{
    const notes = loadNotes()
    
    const notesToKeep = notes.filter(function (note){
       return note.title !== title
       
    })
if(notes.length > notesToKeep.length){
    const greenMsg = chalk.inverse.green('Note Removed');
       console.log(greenMsg);
       saveNotes(notesToKeep)
}else{
    console.log(chalk.red.inverse('No note found!!'))
}  
}

const listNotes = ()=>{
    console.log(chalk.yellow.inverse('Your Notes!!'))
    const notes = loadNotes()
    notes.forEach((note)=>{
console.log(note.title)
    })
}

const readNotes = (title)=>{
  const notes = loadNotes()
  const readNote = notes.find((note)=>note.title === title)  //if any title founds matching ,that note is saved to the "readNote"

if(!readNote){            //if nothing present in it
    console.log(chalk.inverse.red('No Notes Found!!'))
}else{
   console.log(chalk.inverse.white(readNote.title))
   console.log(readNote.body)
}

}

module.exports = {
    removeNotes:removeNotes,     //since more than one fntn to be exported,they are passed as a single object in exports to app.js
    addNotes:addNotes,
    listNotes:listNotes,
    readNotes:readNotes
}
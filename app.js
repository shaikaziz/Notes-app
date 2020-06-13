const yargs=require('yargs')
// const notes=require('./notes')
const chalk=require('chalk')
const fs=require('fs')
const { addNote } = require('./notes')
const { title } = require('process')
const notes = require('./notes')
const { demandOption, command } = require('yargs')

yargs.command({
    command:'add',
    describe:'adding note',
    builder:{
        title:{
            describe:'a title',
            type:'string',
            demandOption:true
        },
        body:{
            describe:'a body',
            demandOption:true,
            type:'string'
        }
    },
    handler:(argv)=>{
        notes.addNote(argv.title,argv.body)
    }
})

yargs.command({
    command:'remove',
    describe:'removing note',
    builder:{
        title:{
            describe:'a title',
            type:'string'
        },
    },
    handler:(argv)=>{
        notes.removenote(argv.title);
    }
})

yargs.command({
    command:'list',
    describe:'list notes',
    handler:()=>{
        notes.listnotes();
        
    }
})

yargs.command({
    command:'read',
    describe:'reading note',
    handler:()=>{
        notes.listnotes()   
    }
})

yargs.parse()

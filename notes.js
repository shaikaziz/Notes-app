const fs=require('fs')
const { default: chalk } = require('chalk')

const notes=() =>{
    return 'Your notes are....'
}


//remove
const removenote=(title) => {
    const notes=loadNote()
    const num=notes.length
    const keep=notes.filter( (n) =>  n.title!==title )
    if(num!==keep.length){
        console.log(chalk.inverse.green('Removed note: ')+title)
    }
    else
        console.log(chalk.inverse.red('No note found'))
    savenote(keep)
    
}


//add
const addNote = (title,body) => {

    const notes=loadNote()

    const dups=notes.filter((n)=> n.title===title)
    if(dups.length===0){
        console.log(chalk.inverse.green('Note added!'));
    }
    else{
        console.log(chalk.inverse.red('Note already there!'));
        
    }
    
    notes.push({
        title:title,
        body:body,
    })
    savenote(notes)
}

//save
const savenote= (notes) =>{
    const dataJSON=JSON.stringify(notes)
    fs.writeFileSync('input.json',dataJSON )

}


//list
const listnotes=() =>{
    const notes=loadNote()
    console.log(chalk.inverse.yellow('Your Notes:')+'\n')
    var i=1
    notes.forEach((n) => {
        console.log(i+'. '+n.title);
        i++
        
    })
}

const loadNote= () =>{
    try{
    const dataBuffer=fs.readFileSync('input.json')
    const datastring=dataBuffer.toString()
    return JSON.parse(datastring)
    }
    catch(e){
        return[]
    }
}

module.exports={
    addNote:addNote,
    loadNote:loadNote,
    notes:notes,
    removenote:removenote,
    listnotes:listnotes

}
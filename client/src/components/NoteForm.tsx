import { useState } from "react";
import {trpc} from '../trpc'
import { util } from "zod";

const NoteForm = () => {

const  [note, setNote] = useState({
    title: "",
    description: ""
})


   const addNote =  trpc.note.create.useMutation()
   const utils = trpc.useContext()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) =>{
        e.preventDefault();
        console.log(e);
        addNote.mutate(note, {
            onSuccess: ()=>{
                console.log("todo ok")
                utils.note.invalidate()
            }
        })
        
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>{
        setNote({...note,[e.target.name] : e.target.value})
    }

  return (
    <form onSubmit={handleSubmit}>

        <input 
            type="text"
            placeholder="Title"
            name="title"
            autoFocus
            onChange={handleChange}/>


        <textarea
            name="description"
            placeholder="Description"
            onChange={handleChange}>

        </textarea>
        <button>Save</button>
    </form>
  )
}

export default NoteForm
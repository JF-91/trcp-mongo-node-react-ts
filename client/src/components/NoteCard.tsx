import React from 'react'
import { trpc } from '../trpc';

interface Props {
    note:{
        id_: string;
        title: string;
        description: string;
    }

}

const NoteCard:React.FC<Props> = ({note}) => {

  const deleteNote = trpc.note.delete.useMutation()
  const utils = trpc.useContext()

    
  const deleteClick = ()=>{
    deleteNote.mutate(note.id_, {
      onSuccess: (data) => {
        if(data){
          utils.note.get.invalidate();
        }
      }
    })
  }

  return (
    <div>
        <h1>{note.title}</h1>
        <p>{note.description}</p>
        <button onClick={deleteClick}>Delete</button>
        <button>Done</button>
        <button>Update</button>
    </div>
  )
}

export default NoteCard
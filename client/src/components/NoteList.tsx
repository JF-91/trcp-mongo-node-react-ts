import note from '../../../src/models/note';
import {trpc} from '../trpc'
import NoteCard from './NoteCard';

const NoteList = () => {

    const {data, isLoading, isError, error} = trpc.note.get.useQuery();


  return (
    <div>
      {
        isLoading && <div>Loading...</div>
        
      }
      {
        isError && <div>{error.message}</div>
      }
      
      {
        data?.map( (note:any) => (
          <NoteCard note={note} key={note._id}/>
        ))
      }
    </div>
  )
}

export default NoteList
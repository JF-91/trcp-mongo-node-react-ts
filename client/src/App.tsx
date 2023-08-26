import { useState } from 'react'
import {trpc} from './trpc'
import {httpBatchLink} from '@trpc/client'
import  {QueryClientProvider, QueryClient} from '@tanstack/react-query'
import NoteList from './components/NoteList'
import NoteForm from './components/NoteForm'


function App() {


  const [queryclient] = useState(()=>{
    return new QueryClient()
  })


  const [trpcClient] = useState(()=>{
    return  trpc.createClient({
      links: [
        httpBatchLink({
          url: 'http://localhost:3000/trpc'
        })
      ],
    });
  });





  return (
    <trpc.Provider client={trpcClient} queryClient={queryclient}>
      <QueryClientProvider client={queryclient}>
        <div>
          <NoteForm />
          <NoteList />
        </div>
      </QueryClientProvider>
    </trpc.Provider>
  )
}

export default App

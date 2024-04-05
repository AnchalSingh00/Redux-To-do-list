import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addSong, removeSong } from './Store'


function Songs() {

    let[songtxt, setsongtxt]= useState('')

// useselector

let songsData = useSelector(state=>(state.songs))
console.log(songsData);

    // usedispatch hook

    let dispatch = useDispatch()

   const handleSongsAdd = () =>{
    // alert(34)
 dispatch(addSong(songtxt))
 setsongtxt('')
   }


let removeHandleSong = (para) =>{
  // alert(22)

 dispatch(removeSong(para))
}

    
  return (
    <div>
        <input type="text"
        value={songtxt}
        onChange={(e)=>setsongtxt(e.target.value)}
        placeholder='Enter Songs'
        className='form-control m-3 w-50 d-inline-block'
        />
        <button
        onClick={handleSongsAdd}
        className='btn btn-success'>Add Songs</button>

{
  songsData.length > 0 && songsData.map((ele,index)=>{
    return <div className='d-flex justify-content-between my-3' key={index}>
   <h4>{ele}</h4>
   <button 
   onClick={()=>removeHandleSong(ele)}
   className='btn btn-danger'>X</button>
    </div>
   })
}
    </div>
  )
}

export default Songs
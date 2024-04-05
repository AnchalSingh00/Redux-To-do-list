import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addMovie, removeMovie } from './Store'

function Movies() {

  let [movietxt, setmovietxt]= useState('')

// useselector
let moviesData = useSelector(state=>(state.Movies))
console.log(moviesData);

  let dispatch = useDispatch()

  const handleMovieAdd = ()=>{
dispatch(addMovie(movietxt))
setmovietxt('')
  }


let handleRemoveMovie = (para)=>{
  dispatch(removeMovie(para))
}

  return (
    <div>
         <div>
        <input type="text"
        placeholder='Enter Movies'
        className='form-control m-3 w-50 d-inline-block'
        value={movietxt}
        onChange={(e)=>setmovietxt(e.target.value)}
        />
        <button 
        onClick={handleMovieAdd}
        className='btn btn-success'>Add Movies</button>
    </div>
    {
      moviesData.length > 0 && moviesData.map((ele,index)=>(
        <div key={index} className='d-flex justify-content-between my-3'>
          <h3>{ele}</h3>
          <button 
          onClick={()=>handleRemoveMovie(ele)}
          className='btn btn-danger'>X</button>
        </div>
      ))
    }
    </div>
  )
}

export default Movies
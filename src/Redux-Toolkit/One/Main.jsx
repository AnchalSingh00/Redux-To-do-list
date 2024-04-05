import React from 'react'
import Songs from './Songs'
import Movies from './Movies'
import { useDispatch } from 'react-redux'
import { reset } from './Store'

function Main() {

let dispatch = useDispatch()


let handleReset =()=>{
 dispatch(reset())
}


  return (
    <div className='row' style={{height:'90vh'}}>
        <div className="col-6 bg-info">
            <Songs/>
        </div>
        <div className="col-6 bg-warning">
            <Movies/>
        </div>
        <div className="col-12 mt-3">
            <button 
            onClick={handleReset}
            className='btn btn-danger m-3 d-block w-75 m-auto'>Reset Data</button>
        </div>
    </div>
  )
}

export default Main
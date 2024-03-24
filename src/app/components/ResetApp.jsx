import React from 'react'
import { useDispatch } from 'react-redux'
//import { resetDestinationApp } from '../../redux/slice/destinationSlice.js';
//import { resetCouterApp } from '../../redux/slice/counterSlice.js';
import { resetReduxOPedia } from '../../redux/action/action.js';



const ResetApp = () => {
    const dispatch = useDispatch();
    // const resetAllApp = ()=>{
        
    //     dispatch(resetCouterApp());
    //     dispatch(resetDestinationApp());
    // };

  return (
    <div className=' text-center '>
      <button className='btn btn-warning' onClick={()=> {dispatch(resetReduxOPedia())}}
      
      >
        Reset App
      </button>
    </div>
  )
}

export default ResetApp

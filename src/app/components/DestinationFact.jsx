import React from 'react'
import { useSelector } from 'react-redux'

const DestinationFact = () => {
 const selectedDestination = useSelector((state) => state.destinationStore.destinationSelected);
 if(selectedDestination == undefined) {
    return (
      <div className=' text-center  pt-4  text-warning '>Select a Destination</div>
    )
 }
 else {
    return (
        <div className=' text-center  border  p-3 m-3 '>
            <h4 className='text-success '>{selectedDestination.name}</h4>
            Days Recommended: {selectedDestination.days} <br />
            Fun Facts: {selectedDestination.fact}
        </div>
    )
 }

 
}

export default DestinationFact

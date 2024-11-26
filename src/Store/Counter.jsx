import React, { useEffect } from 'react'
import { connect } from 'react-redux'
function Counter({count,incCount,decCount,resCount}) {
  useEffect(()=>{
    console.log("counter rerendered")
  })
  return (
    <div className='p-4 d-flex justify-content-center flex-column align-items-center'>
      <h3>COUNTER:{count}</h3>
      <div className='mx-1'>
        <button className='btn btn-secondary' onClick={incCount}>Increment</button>&nbsp;
        <button className='btn btn-secondary' onClick={decCount}>Decrement</button>&nbsp;
        <button className='btn btn-secondary' onClick={resCount}>Reset</button>
      </div>
    </div>
  )
}
function mapStateToProps(state){ return state.counterReducer}
function mapDispatchToProps(dispatch){ 
  return {
    incCount:()=>{dispatch({type:"INC"})},
    decCount:()=>{dispatch({type:"DEC"})},
    resCount:()=>{dispatch({type:"RESET"})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Counter)

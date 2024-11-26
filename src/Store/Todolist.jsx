import React from 'react'
import { connect } from 'react-redux'

function Todolist({todos,addNewTodo,delTodo}) {
  return (
    <div className='p-4 d-flex justify-content-center align-items-center flex-column'>
      <h3>TODOLIST</h3>
      <div>
        <input type="text" id='d' className='pb-2 mb-3'/>
        <button className='btn btn-secondary mx-1' onClick={()=>{addNewTodo(document.getElementById('d').value)}}>
            Add Todo
        </button>
      </div>
      {
        todos.map((todo,i)=>{
            return <h5 className='list-unstyled' key={i}>{todo} <button className='btn btn-secondary' onClick={()=>{delTodo(i)}}>Del</button></h5>
        })
      }
    </div>
  )
}
function mapStateToProps(state){return state.todoReducer}
function mapDispatchToProps(dispatch){
   return {
      addNewTodo:(nt)=>{dispatch({type:"ADDTODO",payload:nt})},
      delTodo:(ind)=>{dispatch({type:"DELTODO",payload:ind})}
   }
}
export default connect(mapStateToProps,mapDispatchToProps)(Todolist)

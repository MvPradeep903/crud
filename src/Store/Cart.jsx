import React from 'react'
import { connect } from 'react-redux'
import { useNavigate } from 'react-router-dom'

function Cart({cartItems,incItemCount,decItemCount,remItemCount}) {
  var navigate = useNavigate();
  function handleShop(){
    navigate("/product");
  }
  return (
    <div className='p-4'>
      <h4 className='d-flex justify-content-center'>CART</h4>
      {
        (!cartItems || cartItems.length === 0 ) ? ( <div className='p-4 d-flex flex-wrap justify-content-center flex-column align-items-center'>
                            <h4>Cart is empty please select a product</h4>
                            <button className='btn btn-outline-danger' onClick={handleShop}>Shop Now</button>
                        </div>
        ) : ( <table className='table table-bordered container text-center'>
        <thead>
            <tr>
                <th>Image</th>
                <th>Title</th>
                <th>Price</th>
                <th>Volume</th>
                <th>Total Price</th>
            </tr>
        </thead>
        <tbody>
            {
                cartItems.map((c)=>{
                    return <tr>
                              <td><img src={c.image} style={{width:"100px",height:"100px"}} /></td>
                              <td>{c.title}</td>
                              <td>${c.price}</td>
                              <td>
                                <button className='btn btn-warning mx-2' onClick={()=>{decItemCount(c.id)}}>-</button>
                                <b>{c.count}</b>
                                <button className='btn btn-success mx-2' onClick={()=>{incItemCount(c.id)}}>+</button>
                                <button className='btn btn-danger rounded-5' onClick={()=>{remItemCount(c.id)}}>
                                  <i class="bi bi-x-lg"></i>
                                </button>
                              </td>
                              <td className='text-end'>{c.price * c.count}</td>
                           </tr>
                })
            }
        </tbody>
        <tfoot>
            <tr>
                <th colSpan={5} className='text-end'>Total:{ cartItems.reduce((a,b)=>{
                                return a + b.price * b.count
                            },0) }
                </th>
            </tr>
        </tfoot>
      </table>
     )
      }
    </div>
  )
}
function mapStateToProps(state){return state.productReducer}
function mapDispatchToProps(dispatch){
  return {
    incItemCount:(id)=>{dispatch({type:"INC_COUNT",payload:id})},
    decItemCount:(id)=>{dispatch({type:"DEC_COUNT",payload:id})},
    remItemCount:(id)=>{dispatch({type:"REMOVE_ITEM",payload:id})}
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(Cart)

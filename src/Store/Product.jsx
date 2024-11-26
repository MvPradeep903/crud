import React, { useState } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

function Product({productReducer:{allproducts,cartItems},dispatch}) {
   // console.log("pdt",products)

  var [search,setSearch] = useState('');

  function handleSearch(ev){
    setSearch(ev.target.value);
  }

  // function filteredProducts(allproducts,search){
  //   return allproducts.filter(function(product){
  //     return product.title.toLowerCase().includes(search.toLowerCase())
  //   })
  // }
  var filteredProducts = allproducts.filter((product) => {
    return product.title.toLowerCase().includes(search.toLowerCase())
  })

  return (
    <div className='p-4'>
      <div className='d-flex justify-content-center'>
        <h1 className="d-flex justify-content-center me-2">Products</h1>
        <form class="d-flex" role="search">
          <input className="form-control me-2 my-2" type="search" placeholder="Search" aria-label="Search" value={search} onChange={handleSearch}/>
          <button className="btn btn-outline-success my-2" type="submit" onClick={(e) => {e.preventDefault()}}>Search</button>
        </form>
      </div>
      <div className='d-flex flex-wrap justify-content-center m-3 gap-3'>
        {
            filteredProducts.map((p,i)=>{
                return <div className="card p-2" style={{ width: "18rem" }} key={i}>
                            <img src={p.image} className="card-img-top" style={{ width: "100%", height: "200px" }} />
                            <div className="card-body">
                                <h5 className="card-title"><b>Name</b>: {p.title.slice(0,20)}</h5>
                                <p className="card-text"><b>Price</b>: ${p.price}</p>
                                <p className="card-text"><b>Category</b>: {p.category}</p>
                                <p className="card-text"><b>Description</b>: {p.description.slice(0,40)}</p>
                                <div className="d-flex justify-content-around">
                                    {
                                        cartItems.some((item)=>{ if(item.id === p.id){ return true } }) ? 
                                       ( <Link to="/cart"><button className="btn btn-warning">Go To Cart</button></Link> ) : (<button className="btn btn-primary" onClick={()=>{dispatch({type:"ADDTOCART",payload:p})}}>Add To Cart</button>)
                                    }
                                </div>
                            </div>
                       </div>
            })
        }
      </div>
    </div>
  )
}
export default connect(store=>store)(Product)

// import React, { useState } from 'react';
// import { connect } from 'react-redux';
// import { Link } from 'react-router-dom';

// function Product({ productReducer: { allproducts, cartItems }, dispatch }) {
//   const [searchTerm, setSearchTerm] = useState('');

//   const handleSearchChange = (event) => {
//     setSearchTerm(event.target.value);
//   };

//   const filteredProducts = allproducts.filter((product) =>
//     product.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className='p-4'>
//       <div className='d-flex justify-content-center'>
//         <h1 className="d-flex justify-content-center me-2">Products</h1>
//         <form className="d-flex" role="search">
//           <input
//             className="form-control me-2 my-2"
//             type="search"
//             placeholder="Search"
//             aria-label="Search"
//             value={searchTerm}
//             onChange={handleSearchChange}
//           />
//           <button className="btn btn-outline-success my-2" type="submit" onClick={(e) => e.preventDefault()}>Search</button>
//         </form>
//       </div>
//       <div className='d-flex flex-wrap justify-content-center m-3 gap-3'>
//         {filteredProducts.map((p, i) => (
//           <div className="card p-2" style={{ width: "18rem" }} key={i}>
//             <img src={p.image} className="card-img-top" style={{ width: "100%", height: "200px" }} />
//             <div className="card-body">
//               <h5 className="card-title"><b>Name</b>: {p.title.slice(0, 20)}</h5>
//               <p className="card-text"><b>Price</b>: ${p.price}</p>
//               <p className="card-text"><b>Category</b>: {p.category}</p>
//               <p className="card-text"><b>Description</b>: {p.description.slice(0, 40)}</p>
//               <div className="d-flex justify-content-around">
//                 {cartItems.some((item) => item.id === p.id) ? (
//                   <Link to="/cart"><button className="btn btn-warning">Go To Cart</button></Link>
//                 ) : (
//                   <button className="btn btn-primary" onClick={() => dispatch({ type: "ADDTOCART", payload: p })}>Add To Cart</button>
//                 )}
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// export default connect((store) => store)(Product);

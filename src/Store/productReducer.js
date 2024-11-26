import products from "./products"

var initialState = {
    allproducts:products,
    cartItems:[]
}
console.log("Red",initialState.allproducts)
function productReducer(state=initialState,action){
    //console.log("state",state)
   switch(action.type){
    case "ADDTOCART":
        return {...state,cartItems:[...state.cartItems,{...action.payload,count:1}]}

    case "INC_COUNT":
        var cartItems = state.cartItems.map((item)=>{
            if(action.payload === item.id){
                item.count++;
            }
            return item;       
        })
                return {...state,cartItems:[...cartItems]}  

    case "DEC_COUNT":   
        var cartItems = state.cartItems.map((item)=>{
            if(action.payload === item.id){
                item.count--;
            }
            return item;
        }).filter((item)=> item.count > 0);
            return {...state,cartItems:[...cartItems]}   

    case "REMOVE_ITEM":   
        var updatedItem = state.cartItems.filter((item)=> item.id !== action.payload)
           return {...state,cartItems:updatedItem} 

    default:
        return state           
   }
    
}

export default productReducer


//  if(action.type === "ADDTOCART"){
//     return {...state,cartItems:[...state.cartItems,{...action.payload,count:1}]}
// }
// if(action.type === "INC_COUNT"){
//     var cartItems = state.cartItems.map((item)=>{
//         if(action.payload === item.id){
//             item.count++;
//         }
//         return item;
//     })
//     return {...state,cartItems:[...cartItems]}
// }
// if(action.type === "DEC_COUNT"){
//     var cartItems = state.cartItems.map((item)=>{
//         if(action.payload === item.id){
//             item.count--;
//         }
//         return item;
//     }).filter((item)=> item.count > 0);
//     return {...state,cartItems:[...cartItems]}
// }
// if(action.type === "REMOVE_ITEM"){
//     var updatedItem = state.cartItems.filter((item)=> item.id !== action.payload)
//     return {...state,cartItems:updatedItem}
// }
// return state
function Filterreducer(state, action) {
  switch (action.type) {
    case "ADD_CART_ITEMS":
      let cartitemname = action.payload[0];
      let cartitemprice = action.payload[1];
      let cartitemquantity = action.payload[2];
      let cartitemimage = action.payload[3];
      let cartitem = action.payload[4];
      let newcartitem = {
        name: cartitemname,
        price: cartitemprice,
        quantity: cartitemquantity,
        image: cartitemimage,
      };
      cartitem.push(newcartitem);

      return {
        
        cartitems: cartitem,
      };

    case "DELETE":
      let itemForDelete = action.payload[0];
      let cartItems = action.payload[1];

      let updatedCartItems = cartItems.filter((i, index) => {
        return index != itemForDelete;
      });
      return {
        cartitems: updatedCartItems,
    
      };

      case "CLEAR_CART":
        return {
            cartitems:[] 
        }

    default:
      return state;
  }
}

export default Filterreducer;

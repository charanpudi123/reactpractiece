const item = state.myItems.find((item) => item.id==action.payload.id)
const inCart = state.addedItems.find((item) => item.id == action.payload ? true : false)
return{
    ...state,
    addedItems : inCart ? 
           state.addedItems.map((item) => item.id == action.payload.id ? {...item, qty+1} : item):
           [...state.addedItems,{...item,qty:1}]
}
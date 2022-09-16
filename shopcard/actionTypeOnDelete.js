return{
    ...state,
    addedItems : state.addedItems.filter((item) => item.id!=action.payload.id)
}
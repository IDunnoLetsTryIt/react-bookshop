const reducer = (oldContext, action) => {
switch (action.type){
    case 'currency/set':
        return {
            ...oldContext,
            currency: action.payload
        }
    case 'exchangeRate/set':
         return {
                ...oldContext,
                exchangeRate: action.payload
            }
    case 'cart/addItem':
                return {
                    ...oldContext,
                    shoppingCart: [ ...oldContext.shoppingCart,action.payload ] 
                }
}
}

export default reducer;
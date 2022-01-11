const redux = require('redux')
const createStore = redux.createStore


const BUY_CAKE = 'BUY_CAKE'
const BUY_ICECREAM = 'BUY_ICECREAM'

function buyCake() {
  return  {
      type: BUY_CAKE,
      info: 'hello redux'
    }
}

function buyIceCream() {
  return {
    type : BUY_ICECREAM
  }
}
const initialCakeState = {
  numOfCakes: 10
} 

const initialIceCreanState = {
  numOfIceCreams: 20
}

const cakeReducer = (state= initialCakeState, action) => {
  switch (action.type) {
    case BUY_CAKE: return {
      ...state, numOfCakes: state.numOfCakes -1
    }
    default: return state
  }

}

const iceCreamReducer = (state = initialIceCreanState, action) => {
  switch (action.type) {
    case BUY_ICECREAM: return {
      ...state, numOfIceCreams: state.numOfIceCreams - 1
    }
  }
}

const store = createStore(reducer)
console.log('store:', store.getState())
const unsubscribe = store.subscribe(() => console.log('updates state', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
unsubscribe()
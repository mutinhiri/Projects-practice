const BUY_CAKE = 'BUY_CAKE'

function buyCake() {
  return  {
      type: BUY_CAKE,
      info: 'hello redux'
    }
}

const initialState = {
  numOfCakes: 10
} 
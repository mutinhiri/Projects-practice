import React from 'react'
import { buyCake } from '../redux/cakes/cakeActions'

function CakeContainer() {
  return (
    <div>
      <h2>Number of cakes</h2>
      <button>buy cake</button>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    numOfCakes: state.numOfCakes
  }
}

const mapDispatchToProps = dispatch => {
  return {
    buyCake: () => dispatch(buyCake())
  }
}
export default CakeContainer

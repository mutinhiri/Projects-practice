import React from 'react'

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
export default CakeContainer

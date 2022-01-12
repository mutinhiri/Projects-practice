import React from 'react'

function ItemContainer(props) {
  return (
    <div>
      <h2>item-{ props.item}</h2>
    </div>
  )
}

const mapStateToProps = (state, ownProps) => {
  const itemState = ownProps.cake ? state.cake.numOfCakes :
    state.iceCream.numOfIceCream
  return {
    item: itemState
  }
}

export default ItemContainer

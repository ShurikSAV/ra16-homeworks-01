import React, { Component } from 'react'
import CardsView from '../CardsView';
import ListView from '../ListView';
import IconSwitch from '../IconSwitch'

const products = [{
  name: "Nike Metcon 2",
  price: "130",
  color: "red",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/1.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/2.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "blue",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/3.jpg"
}, {
  name: "Nike Metcon 2",
  price: "130",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/4.jpg"
}, {
  name: "Nike free run",
  price: "170",
  color: "black",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/7.jpg"
}, {
  name: "Nike Metcon 3",
  price: "150",
  color: "green",
  img: "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/events-state/layouts/img/5.jpg"
}];


export class Store extends Component {
  static propTypes = {}
  
  /**переключение между типами расположения товаров */
  onSwitch(evt) {
    this.setState(prevState => ({
        ...prevState,
        switchMode: prevState.switchMode + 1 > 2 ? 1 : prevState.switchMode + 1
      })
    )
  }

  constructor(props) {
    super(props)
    this.state = {
      products,
      switchMode: 1
    }
    //this.children = props.children
  }

  render() {
    return (
      <>
        <IconSwitch 
          icon={"view_module"} 
          onSwitch={evt => this.onSwitch(evt)}
          />
        {this.state.switchMode === 1 && <CardsView cards={this.state.products} />}
        {this.state.switchMode === 2 && <ListView cards={this.state.products} />}
      </>

    )
  }
}

export default Store
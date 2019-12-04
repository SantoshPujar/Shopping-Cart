import * as React from 'react'
import './style.css'
import shirt from '../Images/shirt.jpg'
import tshirt from '../Images/tshirt.jpg'
import watch  from '../Images/watch.jpg'
import jeans from '../Images/jeans.jpg'
import cart from '../Images/cart.png'


export default class Items extends React.Component{
    constructor(props){
        super(props);

        this.state={
            data:[
                {
                 id:'1',
                 name: 'Tshirt',
                 description: 'Tshirt',
                 price: 50,
                 imgUrl:tshirt
                },
                {
                    id:'2',
                    name: 'Shirt',
                    description: 'Shirt',
                    price: 100,
                    imgUrl: shirt
                },
                {
                    id:'3',
                    name: 'Jeans',
                    description: 'Jeans',
                    price: 150,
                    imgUrl:jeans
                },
                {
                    id:'4',
                    name: 'Watch',
                    description: 'Watch',
                    price: 200,
                    imgUrl:watch
                }
              ],
              count:0,
              cartList:[]
            }
    }

componentWillReceiveProps(nxtProps){
    this.setState({cartList:nxtProps.cartData, count:nxtProps.cartData.length})
}

    addCart =(item)=>{
        this.state.cartList.push(item);
        this.setState({count:this.state.cartList.length})
    }

    cartClick(){
        this.props.onCartClick(this.state.cartList)
    }
    render(){
        return(
            <div>
                <div className='cartIcon'>
                <img src={cart} className="cartImage" onClick={()=>this.cartClick()}/>
                <label style={{position: 'absolute'}}>{this.state.count}</label>
                </div>
                {this.state.data.map(item=>{
                    return(<div className='container'>
                        <div className='imgContainer'> <img src={item.imgUrl} className='image' /></div>
                        <div className='label'>Name  : {item.name}</div>
                        <div className='label'>Price :{item.price}</div>
                        <div className='label'>
                            <button type='submit' onClick={()=>this.addCart(item)}>Add to cart</button>
                        </div>
                    </div>)
                })}
            </div>
        )
    }
} 
import * as React from 'react'
import './style.css'
import cart from '../Images/cart.png'


export default class Cart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            cartData:[]
        }
    }

    componentWillReceiveProps(nxtprops){
        this.setState({cartData:nxtprops.data})
    }

    backClick=()=>{
        this.props.onBackClick(this.state.cartData);
    }

    removeItem=(item)=>{
        this.setState({ cartData : this.state.cartData.filter(x => x.id !== item.id)})
    }
   


    render(){
        return(
            <div>
                <button onClick={()=>this.backClick()}>Back</button>
                <h3>Your Cart</h3>
                {this.state.cartData.map(item=>{
                    return(<div className='container'>
                        <div className='imgContainer'> <img src={item.imgUrl} className='image' /></div>
                        <div className='label'>Name  : {item.name}</div>
                        <div className='label'>Price :{item.price}</div>
                        <div className='label'>
                            <button onClick={()=>this.removeItem(item)}>Remove from cart</button>
                        </div>
                    </div>)
                })}
            </div>
        )
    }
} 
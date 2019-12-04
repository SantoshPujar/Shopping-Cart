import * as React from 'react'
import './style.css'
import Items from './items'
import Cart from './cart'

export default class ShoppingCart extends React.Component{
    constructor(props){
        super(props);
        this.state={
            showItems:true,
            showCart:false,
            cartData:[]
        }
    }

    cartClick=(data)=>{
        //console.log(data); 
        this.setState({cartData:data})
        this.setState({showItems:false,showCart:true}) 
    }

    backClick=(data)=>{
        this.setState({cartData:data})
        this.setState({showItems:true,showCart:false}) 
    }


    render(){
        return(
            <div>
                <div style={{display:this.state.showItems?'block':'none'}}>
                    <Items onCartClick={(data)=>this.cartClick(data)} cartData={this.state.cartData}/>
                </div>

                <div style={{display:this.state.showCart?'block':'none'}}>
                    <Cart data={this.state.cartData} onBackClick={(data)=>this.backClick(data)}/>
                </div>
            </div>
            
        )
    }
} 
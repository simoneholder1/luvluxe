import React, { Component } from 'react';
import axios from 'axios';

// using html input types below.
class Admin extends Component {
    constructor (){
        super();

        this.initialState={
                imageUrl: "",
                brand: "",
                productName:"",
                price: "",
                dateAdded: "",
                accessoryType:"",
                color:"",
                material:"",
                style:"",
                detail:"",
                length:"",
                width:"",
                height:"",
                drop:"",
                productLocation:"",
                yearMade:"",
                comesWith:""
        }

        this.state=this.initialState
    }

// Since we want to update all of these different elements for the incoming object we can create 1 method that will allow us to do this for each input box, but you have to make it generic to accommodate the different descriptors.  We will do this by creating a variable, newObj, that takes in an empty object.  The variable gives the user somewhere to temporarily store their information. We can access this empty object (newObj) and we can pass the value we receive from the user onto the property we receive the user newObj[props]= value
handleChange(value,propThatNeedsToChange){
    var newObj = {}
    newObj[propThatNeedsToChange]= value
    this.setState(newObj)
}

addProduct(){
    var newObj={
        imageUrl: this.state.imageUrl,
        brand: this.state.brand,
        productName:this.state.productName,
        price: this.state.price,
        dateAdded: this.state.dateAdded,
        accessoryType:this.state.accessoryType,
        color:this.state.color,
        material:this.state.material,
        style:this.state.style,
        detail:this.state.detail,
        length:this.state.length,
        width:this.state.width,
        height:this.state.height,
        drop:this.state.drop,
        productLocation:this.state.productLocation,
        yearMade:this.state.yearMade,
        comesWith:this.state.comesWith
    }
    axios.post('api/products',newObj).then(()=>{
        console.log('successful');
        this.setState(this.initialState)

    })
}


    render() {
        return (
            <div>
                <br/>
                <input value={this.state.imageUrl} placeholder="Product Image Url" onChange={(e)=>{this.handleChange(e.target.value,'imageUrl')}}/>
                <br/>
                <input value={this.state.brand} placeholder="Brand of Product" onChange={(e)=>{this.handleChange(e.target.value,'brand')}}/>
                <br/>
                <input value={this.state.price}type="number" placeholder="Price" onChange={(e)=>{this.handleChange(e.target.value,'price')}}/>
                <br/>
                <input value={this.state.accessoryType} placeholder="Accessory Type" onChange={(e)=>{this.handleChange(e.target.value,'accessoryType')}}/>
                <br/>
                <input value={this.state.color} placeholder="Color of Product" onChange={(e)=>{this.handleChange(e.target.value,'color')}}/>
                <br/>
                <input value={this.state.material} placeholder="Product Material" onChange={(e)=>{this.handleChange(e.target.value,'material')}}/>
                <br/>
                <input value={this.state.style} placeholder="Product Style" onChange={(e)=>{this.handleChange(e.target.value,'style')}}/>
                <br/>
                <textarea value={this.state.detail} placeholder="Product Description" onChange={(e)=>{this.handleChange(e.target.value,'detail')}}></textarea>
                <br/>
                <input value={this.state.length} placeholder="Product Length" onChange={(e)=>{this.handleChange(e.target.value,'length')}}/>
                <br/>
                <input value={this.state.width} placeholder="Product Width" onChange={(e)=>{this.handleChange(e.target.value,'width')}}/>
                <br/>
                <input value={this.state.height} placeholder="Product Height" onChange={(e)=>{this.handleChange(e.target.value,'height')}}/>
                <br/>
                <input value={this.state.drop} placeholder="Product Drop" onChange={(e)=>{this.handleChange(e.target.value,'drop')}}/>
                <br/>
                <input value={this.state.productLocation} placeholder="Product Location" onChange={(e)=>{this.handleChange(e.target.value,'productLocation')}}/>
                <br/>
                <input value={this.state.yearMade} placeholder="Product Year Made" onChange={(e)=>{this.handleChange(e.target.value,'yearMade')}}/>
                <br/>
                <input value={this.state.comesWith} placeholder="Product Comes With..." onChange={(e)=>{this.handleChange(e.target.value,'comesWith')}}/>
                <button onClick={()=>{this.addProduct()}}>Add Product</button>
            </div>
        );
    }
}

export default Admin;

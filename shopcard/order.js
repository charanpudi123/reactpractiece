render(){
	const order = ()=>{
	  {this.props.myItems.map((item) => {
           <div className="order" >
             <h1>Your Order</h1>
             <h2>Product Name:{item.name}</h2>
             <h2>Quantity:{Item.length}</h2>
             
          </div>
	}
       }
      }
    }
    return (
      <div>
        {<Navbar/>}
        {this.order()}
    <h2>Price:{this.price}</h2>
    <h2>Total Amount:{this.total}</h2>
    <h2>Delivery Charge:{this.shippingPrice}</h2>
    <h2>Amount To Pay:{this.Amount}</h2>
      </div>
    );
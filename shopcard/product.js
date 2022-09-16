 <div className="product_list">
         {<Navbar/>}
         <div>
           {this.props.items.map((item) => {
             return(
               <div className='card' key={item.id}>
                <img src={item.src} alt={item.name}/>
                <p>{item.name}<br/>Rs {item.price}</p>
                <button onClick={()=>{this.handleView(item.id)}} className='card button'>View Product</button>
              </div>  
             );
           })}
            
         </div>
      </div>
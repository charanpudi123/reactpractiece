const views = this.props.viewItems.map((items) =>{
           return(  
          <div className="view_card" id="" key={items.id}>
           <br/>
          <table>          
          <tbody>
            <tr>
            <td>
            <h3>{items.name}</h3>
            <br/>
            </td>
            <td id="Details">
            <br/>Color:{items.color}
            <br/>RAM:{items.RAM}
            <br/>Storage:{items.Storage}
            <br/>Price:{items.price}
            <br/><button onClick={()=>{this.handleClick(items.id)}}>Add To Cart</button>
            </td>
            </tr>          
          </tbody>
          </table>          
        </div>
           )
          }
        )
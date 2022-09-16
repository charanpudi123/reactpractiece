import React from "react"
import { Link} from "react-router-dom";
import "./Header.css";
const Header = () => {
  return (
    < Header>
  <li className='home-li'>
<Link to='./' className='home-link'>Home</Link>
</li>
<li className='home-li'>
<Link to='./cart' className='home-link'>Cart</Link>
</li>
<li className='home-li'>
<Link to='./order' className='home-link'>My Order</Link>
</li>
        
    </Header>
  )
}

export default Header;

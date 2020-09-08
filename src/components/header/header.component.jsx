import React from 'react';
import {Link} from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/crown.svg';
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';
import {selectCartHidden} from '../../redux/cart/cart.selectors';
import {selectCurrentUser} from '../../redux/user/user.selector';


const Header=({currentUser, hidden})=>(
    <div className='header'>
<Link className='logo-container' to='/'>
    <Logo className='logo' /> 
</Link>
<div className='options' >
    <Link className='option' to= '/shop'>
        SHOP
    </Link>
    <Link className='option' to= '/shop'>
        CONTACTS
    </Link>
    <Link >
    {
        currentUser?
         <div className='option' onClick={()=> auth.signOut()} >
             SIGN OUT
         </div> 
         :
        <Link className='option' to='/signin' >SIGN IN</Link>
    }
    </Link>
    <CartIcon/>
</div>
{/* //right outside our options div, so that it take start from new line  */}
{hidden? null: <CartDropdown/> }

    </div>
);
//state(which  now is further destructred to user and cart..) is the rootReducer(obj)
//createStructuredSelector passes state obj to all the selectors in ftn
const mapStateToProps= createStructuredSelector(
    {
        //name of the property you pass in previously as props to this component : value
        currentUser: selectCurrentUser,
        hidden: selectCartHidden
    }
)

export default connect(mapStateToProps)(Header);
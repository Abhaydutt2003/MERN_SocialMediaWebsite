import {MyAppBar,MyTypography} from './style';
import './style.css';

import SomeImage from '../../images/SomeImage.png';

const NavBar = ()=>{
    return (
        <MyAppBar position='static' color='inherit'>
            <div className='brandContainer'>
            <MyTypography variant='h2' align = 'center'>Memories</MyTypography>
            <img className='image' src = {SomeImage} alt = "icon" height='60'></img>    
            </div>
        </MyAppBar>
    )
}

export default NavBar;
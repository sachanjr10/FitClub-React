import React from 'react'
import './Header.css'
import Logo from '../../assets/logo.png'
import Bars from '../../assets/bars.png'

// link navbar items to different portion thye refer to
import { Link } from 'react-scroll'

const Header = () => {

  const mobile = window.innerWidth<=768 ? true : false;
  const [menuOpened, setMenuOpened] = React.useState(false)
  return (
    <div className="header">

        <img src={Logo} alt="" className='logo' />
        {(menuOpened === false && mobile === true) ?
        ( <div
          style={{
            backgroundColor: "var(--appColor)",
            padding: "0.5rem",
            borderRadius: "5px",
            cursor: "pointer",
          }} 

          // for opening and closing of hamburger
          onClick={()=> setMenuOpened(true)}
         >
          <img src={Bars} alt="" style={{width: "1.5rem", height: "1.5rem"}} />
        </div> ) : 
        (
        <ul className='header-menu'>
          {/* for opening and closing of hamburger */}
        <li>
          <Link
          to='home' //class of div i want to go
          activeClass='active'
          spy={true}
          smooth={true}
          onClick={()=> setMenuOpened(false)}
          >Home</Link>
        </li>
        <li>
          <Link
          to='programs' //class of div i want to go
          spy={true}
          smooth={true}
          onClick={()=> setMenuOpened(false)}
          
          >Programs</Link>
        </li>
        <li>
          <Link
          to='reasons' //class of div i want to go
          spy={true}
          smooth={true}
          onClick={()=> setMenuOpened(false)}
          >Why us</Link>
        </li>
        <li>
          <Link

          to='plans' //class of div i want to go
          spy={true}
          smooth={true}
          onClick={()=> setMenuOpened(false)}
          
          
          >Plans</Link>
        </li>
        <li>
          <Link
          to='Testimonials' //class of div i want to go
          spy={true}
          smooth={true}
          onClick={()=> setMenuOpened(false)}
          
          >Testimonials</Link>
        </li>
        </ul>
        )}
        
    </div>
  )
}

export default Header
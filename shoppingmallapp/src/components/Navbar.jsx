import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass, faBars, faTimes } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'; 

const Navbar = ({ setAuthenticate, authenticate }) => {

  const menuList = ['여성', 'Devided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    
  const navigate = useNavigate();

  const [showMenu, setShowMenu] = useState(false);

  const loginout = () => {
    setAuthenticate(false);
    navigate("/login");
  };

  const search = (e) => {
    if(e.key === "Enter"){
      let keyword = e.target.value;

      navigate(`/?q=${keyword}`);
    }
  };

  return (
    <div>
      <div className='top-area'>
        <button className='hamburger' onClick={() => setShowMenu(!showMenu)} style={{ backgroundColor: 'white', border: 'none' }}>
          <FontAwesomeIcon icon={faBars} />
        </button>
        <div className="login-button">
          <FontAwesomeIcon icon={faUser} />
          <p onClick={loginout} style={{ cursor: 'pointer', marginTop: '14px' }}>{authenticate == true ? "로그아웃" : "로그인"}</p>
        </div>
      </div>
      <div className="logo-img">
        <img 
          width={100} 
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png" 
          onClick={() => navigate("/")}
          style={{ cursor: 'pointer'}}
        />
      </div>
      {showMenu && (
        <div className="side-menu">
          <button className="close-btn" onClick={() => setShowMenu(false)}>
            <FontAwesomeIcon icon={faTimes} />
          </button>
          <ul className="sidebar-menu">
            {menuList.map((menu, index) => (
              <li key={index}>{menu}</li>
            ))}
          </ul>
        </div>
      )}
      <div className='menu-container'>
        <ul className='menu-list'>
            {menuList.map((menu, index) => (
                <li key={index}>{menu}</li>
            ))}
        </ul>
        <div className='search-bar'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" onKeyDown={(e) => search(e)} style={{ width: '200px', height: '30px'}} placeholder='제품검색'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

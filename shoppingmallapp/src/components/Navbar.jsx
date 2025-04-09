import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons'
import { useNavigate } from 'react-router-dom'; 

const Navbar = () => {

  const menuList = ['여성', 'Devided', '남성', '신생아/유아', '아동', 'H&M Home', 'Sale', '지속가능성'];
    
  const navigate = useNavigate();

  return (
    <div>
      <div className="login-button">
        <FontAwesomeIcon icon={faUser} />
        <p onClick={() => navigate('/login')} style={{ cursor: 'pointer', marginTop: '14px' }}>로그인</p>
      </div>
      <div className="logo-img">
        <img width={100} src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/H%26M-Logo.svg/800px-H%26M-Logo.svg.png" />
      </div>
      <div className='menu-container'>
        <ul className='menu-list'>
            {menuList.map((menu, index) => (
                <li key={index}>{menu}</li>
            ))}
        </ul>
        <div className='search-bar'>
            <FontAwesomeIcon icon={faMagnifyingGlass} />
            <input type="text" style={{ width: '200px', height: '30px'}} placeholder='제품검색'/>
        </div>
      </div>
    </div>
  )
}

export default Navbar;

import React from 'react'
import message from "../../assets/Images/message.svg"
import { Link, NavLink } from 'react-router-dom'
import linkedin from  "../../assets/Images/linkedin.svg"
import twitter from  "../../assets/Images/twitter.svg"
import watsup from  "../../assets/Images/watsup.svg"
import facebook from  "../../assets/Images/facebook.svg"
import English from  "../../assets/Images/English.svg"
import loginImg from  "../../assets/Images/loginImg.svg"
import siteLogo from  "../../assets/Images/siteLogo.png"
import likeBtn from  "../../assets/Images/likeBtn.svg"
import basket from  "../../assets/Images/basket.svg"



function Header() {
  return (
    <header>
      <div className='bg-[#2A2A2A]'>
      <div className="container mx-auto  px-5 pt-[9px] pb-[10px]  w-full flex items-center justify-between">
        <div className='flex items-center space-x-3'>
          <img src={message} alt="message" width={20} height={16} />
          <Link className='text-[12px] font-semibold text-[white]'>Hello@colorlib.com</Link>
          <span className='block w-[1px] h-[14px] bg-[#FFFFFF80]'></span>
          <span className='text-[12px] font-semibold text-[white]'>Free Shipping for all order of $99</span>
        </div>
        <div className='flex items-center space-x-[40px]'>
          <div className='flex items-center space-x-[20px]'>
            <button className=' p-1 hover:scale-[1.1] hover:shadow-white hover:border-[1px] rounded-md transition-all hover:border-[#d3d1d1] border-transparent border-[1px]'>
              <img src={facebook} alt="facebook" width={18} height={18} />
            </button>
            <button className=' p-1 hover:scale-[1.1] hover:shadow-white hover:border-[1px] rounded-md transition-all hover:border-[#d3d1d1] border-transparent border-[1px]'>
              <img src={watsup} alt="watsup" width={18} height={18} />
            </button>
            <button className=' p-1 hover:scale-[1.1] hover:shadow-white hover:border-[1px] rounded-md transition-all hover:border-[#d3d1d1] border-transparent border-[1px]'>
              <img src={linkedin} alt="linkedin" width={18} height={18} />
            </button>
            <button className=' p-1 hover:scale-[1.1] hover:shadow-white hover:border-[1px] rounded-md transition-all hover:border-[#d3d1d1] border-transparent border-[1px]'>
              <img src={twitter} alt="twitter" width={18} height={18} />
            </button>
          </div>
          <div className='flex items-center space-x-[20px] '>
            <div className='flex items-center space-x-[9px]'>
              <img src={English} alt="English" width={27} height={14}/>
              <select className='text-white text-[12px] font-medium bg-transparent outline-none'>
                <option className='bg-[#2A2A2A]' value="English">Eshlish</option>
                <option className='bg-[#2A2A2A]' value="RUS">RUS</option>
                <option className='bg-[#2A2A2A]' value="UZB">UZB</option>
              </select>
            </div>
            <span className='bg-[#FFFFFF80] h-[14px] w-[1px] block'></span>
            <button className='flex items-center space-x-[10px] p-2 hover:shadow-white hover:border-[1px] rounded-md transition-all hover:border-[#d3d1d1] border-transparent border-[1px]'>
              <img src={loginImg} alt="login" width={16} height={16} />
              <span className='text-[12px] text-white font-medium'>Login</span>
            </button>
          </div>
        </div>
      </div>
      </div>
      <nav className='pt-[21px] pb-[30px] flex items-center px-5 justify-between container mx-auto'>
        <Link to={'/'}>
          <img src={siteLogo} alt="logo" width={179} height={29} />
        </Link>
        <ul className='flex items-center space-x-[35px]'>
          <li>
            <NavLink className={'text-[#2A2A2A] text-[16px] font-semibold uppercase hover:text-[#7FAD39] transition-[0.4s]'} to={'/home'}>Home</NavLink>
          </li>
          <li>
            <NavLink className={'text-[#2A2A2A] text-[16px] font-semibold uppercase hover:text-[#7FAD39] transition-[0.4s]'} to={'/shop'}>SHOP</NavLink>
          </li>
          <li>
            <NavLink className={'text-[#2A2A2A] text-[16px] font-semibold uppercase hover:text-[#7FAD39] transition-[0.4s]'} to={'/pages'}>PAGES</NavLink>
          </li>
          <li>
            <NavLink className={'text-[#2A2A2A] text-[16px] font-semibold uppercase hover:text-[#7FAD39] transition-[0.4s]'} to={'/blog'}>BLOG</NavLink>
          </li>
          <li>
            <NavLink className={'text-[#2A2A2A] text-[16px] font-semibold uppercase hover:text-[#7FAD39] transition-[0.4s]'} to={'/contact'}>CONTACT</NavLink>
          </li>
        </ul>
        <div className='flex items-center space-x-[18px]'>
          <div className='relative'>
            <img src={likeBtn} alt="like btn" width={24} height={24} />
            <div className='absolute top-[-7px] left-[15px] flex items-center justify-center 
            p-[3px]  w-[17px] h-[17px] border-[1.5px] border-white rounded-[50%] bg-[#7FAD39]'>
              <strong className='text-[10px] text-white'>3</strong>
            </div>
          </div>
          <div className='relative'>
            <img src={basket} alt="like btn" width={18} height={21} />
            <div className='absolute top-[-8px] left-[9px] flex items-center justify-center 
            p-[3px]  w-[17px] h-[17px] border-[1.5px] border-white rounded-[50%] bg-[#7FAD39]'>
              <strong className='text-[10px] text-white'>3</strong>
            </div>
          </div>
          <div>
            <span className='text-[#999999]'>
              item: <strong className='text-[#2A2A2A] text-[17px] font-bold'>$150.00</strong>
            </span>
          </div>
        </div>
      </nav>
    </header>
  )
}

export default Header
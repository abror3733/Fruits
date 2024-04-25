import React from 'react'
import hamburgerBtn from '../../assets/Images/hamburgerBtn.svg'
import vector from '../../assets/Images/vector.svg'
import vectorBlack from '../../assets/Images/vectorBlack.svg'
import telIcon from '../../assets/Images/telIcon.svg'
import { Link } from 'react-router-dom'
import heroBg from '../../assets/Images/heroBg.png'
import HeroList from '../HeroList/HeroList'
import heroImg1 from '../../assets/Images/heroImg1.png'
import HeroImg2 from '../../assets/Images/HeroImg2.png'
import HeroImg3 from '../../assets/Images/HeroImg3.png'
import HeroImg4 from '../../assets/Images/HeroImg4.png'



function Hero() {
  return (
    <section className='flex flex-col pb-[60px]'>
      <div className="container mx-auto px-5 ">
        <div className='flex items-center justify-between'>
          <div className='w-[280px] bg-[#7FAD39] flex items-center text-center pl-[20px] pr-[26px] py-[16.5px]'>
            <img src={hamburgerBtn} alt="hamburger" width={18} height={12}/>
            <strong className=' ml-[23px] text-white mr-[45px] text-[16px] font-extrabold'>All Department</strong>
            <img src={vector} alt="icon" width={12} height={7}/>
          </div>
          <div className='relative  w-[681px] pt-[15px] pb-[16px] pl-[20px] pr-[116px] border-[1px] border-[#2A2A2A33]  flex items-center space-x-[26px] '>
            <div className='flex items-center space-x-[22px]'>
              <strong className='text-[16px] text-[#2A2A2A] font-extrabold'>All Categories</strong>
              <img src={vectorBlack} alt="icon" width={12} height={7} />
            </div>
            <span className='block w-[1px] h-[14px] bg-[#2A2A2A33]'></span>
            <label>
              <input className='placeholder:text-[#2A2A2A33]  placeholder:text-[16px] placeholder:font-medium outline-none' type="text" placeholder='What do you need?' />
              <div className='pt-[15px] pb-[16px] px-[19px] bg-[#7FAD39] text-white cursor-pointer  absolute right-0 top-0 hover:bg-[#658339]'>
                <strong className='uppercase font-bold text-[16px] text-white'>Search</strong>
              </div>
            </label>
          </div>
          <div className='flex items-center space-x-[20px] ml-[50px]'>
            <Link className='hover:border-[#999999] hover:shadow-md hover:shadow-[#797474] rounded-[50%] border-[1px] border-transparent transition-[0.3s]' to={'tel:+6511188888'}>
               <img src={telIcon} alt="tel"  width={50} height={50}/>
            </Link>
            <Link className='flex flex-col ' to={'tel:+6511188888'}>
               <strong className='text-[#2A2A2A] font-extrabold text-[14px]'>+65 11.188.888</strong>
               <span className='text-[12px] text-[#999999] font-normal'>support 24/7 time</span>
            </Link>
          </div>
        </div>
        <div className='my-[20px] flex justify-between '>
          <div className='w-[22.3%] flex flex-col space-y-3 border-[1px] border-[#2A2A2A33] pt-[36px] pl-[20px]'>
            <Link className='text-[16px] text-[#999999] font-medium'>Fresh Meat</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Vegetables</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Fruit & Nut Gifts</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Fresh Berries</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Ocean Foods</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Butter & Eggs</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Fastfood</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Fresh Onion</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Papayaya & Crisps</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Oatmeal</Link>
            <Link className='text-[16px] text-[#999999] font-medium'>Fresh Bananas</Link>
          </div>
          <div className='w-[75.5%] shadow-md shadow-[#bbb6b6] bg-[#F5F5F5]  flex items-center justify-between pl-[77px] pt-[80px] pb-[30px]'>
            <div className='w-[400px] '>
              <h3 className='text-[#7FAD39] text-[16px] font-bold'>FRUIT FRESH</h3>
              <h1 className='text-[#2A2A2A] text-[40px] font-extrabold my-[10px] leading-[45px]'>Vegetable  100% Organic</h1>
              <p className='text-[16px] text-[#999999] font-medium '>Free Pickup and Delivery Available</p>
              <button className='mt-[60px] bg-[#7FAD39] text-white py-[16px] w-[141px] text-center text-[17px] font-bold hover:border-[#7FAD39] hover:bg-white hover:text-[#7FAD39] transition-[0.4s] border-[2px] border-transparent'>SHOP NOW</button>
            </div>
            <div>
              <img src={heroBg} alt="hero img" width={560} height={390}/>
            </div>
          </div>
        </div>
      </div>
      <div  className='container mx-auto px-5 mt-5 flex items-center justify-between'  data-aos="zoom-in-down">
        <HeroList ImgURL={heroImg1} title={'FRESH FRUIT'}/>
        <HeroList ImgURL={HeroImg2} title={'DRIED FRUIT'}/>
        <HeroList ImgURL={HeroImg3} title={'VEGETABLES'}/>
        <HeroList ImgURL={HeroImg4} title={'DRINK FRUITS'}/>
      </div>
    </section>
  )
}

export default Hero
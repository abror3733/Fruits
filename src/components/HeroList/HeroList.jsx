import React from 'react'

function HeroList({ImgURL,title}) {
  return (
    <div  className='w-[280px] p-[20px] bg-[#F5F5F5] shadow-md shadow-[#a8a3a3] hover:scale-[1.06] hover:rotate-[-7deg] transition duration-300'>
      <img src={ImgURL} alt="img"  width={240} height={176}/>
      <div className='bg-white py-[16px] text-center w-full shadow-md mt-2'>
        <strong className='text-[#2A2A2A] text-[20px] font-extrabold'>{title}</strong>
      </div>
    </div>
  )
}
 
export default HeroList
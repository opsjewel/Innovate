import React from 'react'
import Container from '../Layout/Container'
import bannerShape from '../../assets/bannerShape.png'
import laptopScreen from '../../assets/laptopScreen.png'

const Banner = () => {
  return (
    <section className='bg-cover bg-no-repeat bg-center pt-[110px] md:pt-[195px] pb-[100px] sm:pb-[140px] md:pb-[390px] lg:pb-[558px]'
      style={{
        backgroundImage: `url(${bannerShape})`
      }}>
      <Container>
        <div className='relative'>
          <div className='text-center '>
            <h1 className='w-full max-w-[340px] sm:max-w-[520px] md:max-w-[796px] px-2 m-auto font-secondary font-bold text-[35px] md:text-[56px] leading-[45px] md:leading-[64px] text-white'>Get your work done with Management Tool</h1>
            <p className='w-full max-w-[350px] md:max-w-[467px] px-2 m-auto font-secondary text-center font-regular md:text-lg leading-8 text-white mt-5 mb-8'>The world's first project management platform that connects everything</p>
            <div className='relative flex flex-col sm:block items-center gap-3'>
              <input type="text" className='w-full max-w-[320px] sm:max-w-[420px] md:max-w-[480px] outline-0 bg-white rounded-[6px] placeholder:text-[#B4B6C4] font-secondary font-regular text-[14px] md:text-base leading-[26px] pl-3 md:pl-6 py-3 md:py-5' placeholder='Your business email' />
              <div>
                <a className='mt-3 sm:mt-0 sm:absolute sm:top-[4px] sm:right-2 md:right-2 bg-primary py-[9px] md:py-[15px] px-7 font-priamry font-medium text-lg rounded-[6px] text-[#2C2643] inline-block'>Try for free</a>
              </div>
            </div>
          </div>
          <div className='relative sm:absolute top-auto sm:top-[250px] md:top-[300px] left-0 sm:left-0 mt-10 sm:mt-12 px-2 sm:px-0'>
            <img src={laptopScreen} alt="#laptopscreen" className='w-full max-w-[1000px] mx-auto h-auto object-contain' />
          </div>
        </div>
      </Container>
    </section>
  )
}

export default Banner

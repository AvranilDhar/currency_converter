import React from 'react'

const App = () => {
  return (
    <div className='h-screen w-screen flex justify-center flex-col ' style={{backgroundColor : "#163300"}}>
      <section className='text-center w-full'>
        <p className='font-wiseSans w-full h-full text-8xl font-bold ' style={{color : "#9ee86f"}}>Currency Converter</p>
        <p className='font-stackSans text-white text-wrap font-bold text-xl' style={{color : "#e8ebe6"}} >Real-time currency conversion built for travelers, traders, and everyday users</p>
      </section>
    </div>
  )
}

export default App
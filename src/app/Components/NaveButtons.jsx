import React from 'react'

const NaveButtons = ({name,label}) => {
  return (
    <div className='text-white bg-[#2A2A2A] px-6 pt-2 pb-10 rounded-3xl flex items-center gap-2'>
       {name}{label? ( <span className='bg-[#C2FD44]  text-[0.7rem] font-semibold px-2 py-1 text-black rounded-full'>{label}</span>):(null)}
    </div>
  )
}

export default NaveButtons
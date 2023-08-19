import React from 'react'

export default function FormField(prompt) {
  let {labelName,type,name,placeholder,value,handleChange,isSurpriceMe,handleSurprice} = prompt;
  return (
    <div>
      <div className='flex items-center gap-2 mb-2'>
       <label htmlFor={name} className='block text-sm font-medium text-gray-900'>
         {labelName}
       </label>
       { isSurpriceMe && (
        <button type='button' onClick={handleSurprice} className='font-semibold text-xs  bg-[#ececf1] py-1 px-2 rounded-[5px] text-black'>
          Surprise Me
        </button>
       )
       }
      </div>
      <input type={type} id={name} name={name} placeholder={placeholder} value={value} onChange={handleChange}  className='bg-gray-50 border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-[#6466ff] focus:ring-[#6466ff] outline-none w-full p-3 border'/>
    </div>
  )
}

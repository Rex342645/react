import React from 'react'

export default function Card({myname="somename"}) {
    console.log(myname)
  return (
    
    <div>
     
<div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md mt-4 p-4">
  <div 
className="relative mx-4 -mt-6 h-56 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
    <img
      src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"
      alt="img-blur-shadow"
      layout="fill"
    />
  </div>
  <div 
className="p-6">
    <h5 
className="mb-2 block font-sans text-xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
      UI/UX Review Check
    </h5>
    <p 
className="block font-sans text-base font-light leading-relaxed text-inherit antialiased">
      The place is close to Barceloneta Beach and bus stop just 2 min by walk
      and near to "Naviglio" where you can enjoy the main night life in
      Barcelona.
    </p>
  </div>
  <div 
className="p-6 pt-0">
    <button
      
    className="select-none rounded-lg bg-pink-500 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      type="button"
      data-ripple-light="true"
    >
      {myname}
    </button>
  </div>
</div>

<div className="w-full pt-5 px-4 mb-8 mx-auto ">
    
</div>


<link
  rel="stylesheet"
  href="https://unpkg.com/@material-tailwind/html@latest/styles/material-tailwind.css"
/>
 
<script src="https://unpkg.com/@material-tailwind/html@latest/scripts/ripple.js"></script>
    </div>
  )
}

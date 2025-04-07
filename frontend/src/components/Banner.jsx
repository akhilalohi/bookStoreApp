import React from 'react'
import banner from "../../public/banner.jpg"
function Banner() {
  return (
    <>
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 flex flex-col md:flex-row my-10">
  <div className="w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32">
    <div className="space-y-12">
    <h1 className="text-4xl font-bold">
      Hello, welcome here to learn something <span className="text-pink-500">new everyday!!!</span>
      
    </h1>
    <p className="text-xl">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
    </p>
    </div>
    <div className="mt-8">
            <label className="input input-bordered flex items-center gap-2 w-full">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16" fill="currentColor" className="w-5 h-5 opacity-70">
                <path d="M2.5 3A1.5 1.5 0 0 1 4 1.5h8A1.5 1.5 0 0 1 13.5 3v10a1.5 1.5 0 0 1-1.5 1.5H4A1.5 1.5 0 0 1 2.5 13V3zM4 4v6h8V4H4z"></path>
              </svg>
              <input type="text" className="grow w-full" placeholder="Email" />
            </label>
    </div>
    <button className="btn mt-6 btn-secondary">Secondary</button>


  </div>
  <div className="order-1 w-full md:w-1/2">
  <img src={banner} className="w-92 h-92"alt="" />
  </div>
</div>

    </>
  )
}

export default Banner
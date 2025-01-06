import React from 'react'
import Image from 'next/image'
function Landing() {
  return (
    <div className='flex flex-col items-center justify-center text-center mt-8'>
    {/* Logo Section */}
         <Image
        src="/mrbeast.webp"
        alt="MrBeast Logo"
        width={200}
        height={200}
        className="rounded-full"
      />
      <button className='bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-6 rounded-full shadow-lg mt-4'>
          <a href="https://discord.gg/C5dTyfnt8R" target="__blank">
            Join our Discord Server!
          </a>
        </button>
      <h1 className="text-4xl font-bold text-white mt-6">
        Welcome to MrBeast Fan Games
      </h1>
      <div className='max-w-md'>
      <p className="text-lg text-white mt-4">
        Think you’ve got what it takes? Dive into epic challenges, make
        predictions, and prove you're the ultimate MrBeast fan.
      </p>
      </div>
     {/* Call-to-Action Section */}
     </div>
  )
}

export default Landing;
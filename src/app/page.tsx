import Image from 'next/image'
import Navbar from './navbar'

export default function Home() {
  return (
    <div className='h-screen overflow-hidden'>
      <Navbar />
      <div className="flex flex-col justify-around h-full w-screen bg-cover bg-center bg-no-repeat" style={{ backgroundImage: 'url(\'/background-image.png\')' }}>
        <div className='-mt-20'>
          <div className='relative flex flex-col items-center text-center'>
            <h1 className="w-full text-5xl font-bold text-yellow-300 absolute left-1/2 transform -translate-x-1/2 z-10" style={{ top: '4.5rem' }}>Manta Farmers</h1>
            <Image
              src="/wooden.png"
              alt="Logo"
              width={700}
              height={600}
              className='relative z-0'
            />
          </div>

          <div className="text-center">
            <h1 className="text-2xl font-bold">Sow the $SEEDS, mint the crop, & reap the $YIELD</h1>
          </div>
        </div>

        <div className='flex flex-col items-center'>
          <div className='bg-gray-200 bg-opacity-65 py-2 px-5 rounded-lg my-3 font-medium text-2xl'>
            04:15:45
          </div>
          <div className='bg-gray-200 bg-opacity-65 py-2 px-5 rounded-3xl font-medium text-2xl'>
            Connect Wallet
          </div>
        </div>
      </div>
    </div>
  )
}

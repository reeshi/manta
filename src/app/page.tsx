import Image from 'next/image'

export default function Home() {
  return (
    <div className="bg-[url('../../public/background-image.png')] bg-cover bg-center bg-no-repeat h-screen flex flex-col items-center justify-center">
      <div className='flex flex-col items-center relative text-center'>
        <Image
          src="/wooden1.png"
          alt="Logo"
          width={700}
          height={700}
          className='mb-25'
        />
      </div>
      <h1 className="text-5xl font-bold text-yellow-300 absolute top-41">Manta Farmers</h1>
      <div className='absolute flex flex-col items-center'>
        <div className='bg-gray-200 bg-opacity-65 py-2 px-5 rounded-lg my-3 font-medium text-2xl'>
          04:15:45          
        </div>
        <div className='bg-gray-200 bg-opacity-65 py-2 px-5 rounded-3xl font-medium text-2xl'>
          Connect Wallet
        </div>
      </div>
    </div>
  )
}

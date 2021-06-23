export default function HeroSection() {
  return (
    <div className='flex flex-col h-48 text-center'>
      <h1 className='font-bold text-6xl'>Mingalapar</h1>
      <h2 className='text-xl uppercase text-indigo-500 my-4'>
        Have a great day?
      </h2>
      <div className='mt-4'>
        <a
          href='https://drive.google.com/file/d/16i9NK0TOQasZd42dXsoPzo6QgBw7W4YY/view'
          className='p-4 rounded-md border-1 border-indigo-100 bg-indigo-100 text-blue-700 text-sm hover:bg-indigo-200 transition duration-300 ease-in-out'
        >
          Download Resume
        </a>
      </div>
    </div>
  )
}
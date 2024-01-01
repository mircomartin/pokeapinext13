import { SimpleWidget } from '@/components'

const MainPage = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <p className='text-xl'>Informacion General</p>

      <div className='flex flex-wrap p-2 justify-center items-center gap-5'>
        <SimpleWidget />
      </div>
    </div>
  )
}

export default MainPage
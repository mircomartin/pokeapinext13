import { WidgetGrid } from '@/components'

const MainPage = () => {
  return (
    <div className='text-black p-2'>
      <h1 className='mt-2 text-3xl'>Dashboard</h1>
      <p className='text-xl'>Informacion General</p>

      <WidgetGrid />
    </div>
  )
}

export default MainPage
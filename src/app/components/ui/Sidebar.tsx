import Image from 'next/image'
import { IoBrowsersOutline, IoCalculator, IoFootball, IoLogoReact } from 'react-icons/io5'
import { MenuItem } from '..'

const menuItems = [
  {
    path: '/dashboard/main',
    icon: <IoBrowsersOutline size={40} />,
    title: 'Dashboard',
    subTitle: 'Visualizacion de datos'
  },
  {
    path: '/dashboard/counter',
    icon: <IoCalculator size={40} />,
    title: 'Counter',
    subTitle: 'Contador del lado del cliente'
  },
  {
    path: '/dashboard/pokemons',
    icon: <IoFootball size={40} />,
    title: 'Pokemons',
    subTitle: 'Generacion estatica'
  }
]

export const Sidebar = () => {
  return (
    <div id='menu' className='bg-gray-900 min-h-screen z-10 text-slate-300 w-96 overflow-y-scroll'>
      <div id='logo' className='my-4 px-6'>
        <h1 className='flex gap-2 items-center text-lg md:text-2xl font-bold text-white'>
          <IoLogoReact />
          <span>MY-Dash</span>
          <span className='text-blue-500'>8</span>
        </h1>
        <p className='text-slate-500 text-sm'>Gestione sus acciones y actividades</p>
      </div>

      <div id='profile' className='px-6 py-10'>
        <p className='text-slate-500 mb-1'>Hola!,</p>
        <a href='#' className='inline-flex space-x-2 items-center'>
          <span>
            <Image className='rounded-full' src='https://images.unsplash.com/photo-1542909168-82c3e7fdca5c' alt='' width={50} height={50} />
          </span>
          <span className='text-sm md:text-base font-bold'>Mirco Martin</span>
        </a>
      </div>

      <div id='nav' className='w-full px-6'>
        {
          menuItems.map( ( item ) => (
            <MenuItem key={ item.path } { ...item } />
          ) )
        }
      </div>
    </div>
  )
}

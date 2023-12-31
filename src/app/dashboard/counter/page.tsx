import { CartCounter } from '@/shopping-cart'

export const metadata = {
 title: 'Shopping Cart',
 description: 'Carrito de compras',
};

const CounterPage = () => {
  return (
    <div className='flex flex-col items-center justify-center w-full h-full gap-2'>
      <span>Productos en carrito</span>
      <CartCounter value={20} />
    </div>
  )
}

export default CounterPage

import { useCartStore } from '../store';

const Nav = () => {
    const {total, basket, clearBasket} = useCartStore();
    return ( 
        <nav className="h-16 bg-amber-500 text-white flex items-center ">
            <div className="flex items-center justify-start p-5 w-2/3 h-full">
                <ul className="flex items-center justify-start h-12 pl-5 text-xl">
                    <li className='mr-5'>
                        <a href='/' className="mr-3 hover:text-amber-800 cursor-pointer">Home</a>
                    </li>
                </ul>
            </div>
            <div className="flex justify-end items-center w-1/3 mr-5 sm:text-base md:text-xl text-xs">
                {
                    basket.length === 0 ? 
                    <span className='m-2'>Basket is empty</span>
                    :
                    <span className='m-2'>In cart ({basket.length})</span>
                }
                <span className='m-2'> {total.toFixed(2)} </span>
                <img src={`/images/basket.svg`} alt="basket" className="w-10 h-10"/>
                {basket.length === 0 ? null :
                <button className="btn-clear m-2  hover:text-blue-900" onClick={()=>{clearBasket()}}> Clean basket</button>
                }
            </div>
        </nav>
    );
};

export default Nav;
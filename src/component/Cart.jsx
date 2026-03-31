
const Cart = () => {
  return (
    <div className="py-16 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-left mb-8">Your Cart</h2>
        <div className="border border-gray-200 p-10 flex flex-col justify-center items-center gap-4 rounded-2xl">
            {/* <img src="http://www.w3.org/2000/svg" className="w-20 h-20" alt="Shopping Cart" /> */}
            <span className="text-gray-400"><i class="fa-solid fa-4x fa-cart-shopping"></i></span>
            <p className="text-gray-600 text-center mb-4">Your cart is currently empty. Browse our digital tools and add them to your cart to get started!</p>
        </div>
    </div>
  )
}

export default Cart
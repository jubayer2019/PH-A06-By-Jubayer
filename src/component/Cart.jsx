const Cart = ({ cartItems, onRemove, onCheckout, totalAmount }) => {
  const isEmpty = cartItems.length === 0;

  return (
    <div className="py-16 container mx-auto px-4 max-w-6xl min-h-125">
      <h2 className="text-4xl font-bold text-left mb-8 text-slate-800">Your Cart</h2>

      {isEmpty ? (
        <div className="border border-dashed border-slate-300 p-20 flex flex-col justify-center items-center gap-4 rounded-2xl bg-white">
          <span className="text-slate-300"><i className="fa-solid fa-4x fa-cart-shopping"></i></span>
          <p className="text-slate-500 text-center text-lg">Your cart is currently empty.</p>
        </div>
      ) : (
        <div className="border border-slate-100 shadow-xl rounded-2xl p-8 bg-white">
          <div className="space-y-4 mb-10">
            {cartItems.map((item, idx) => (
              <div key={idx} className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
                <div className="flex items-center gap-4">
                  <img src={item.image} className="w-12 h-12 object-contain bg-white p-2 rounded-lg shadow-sm" alt="" />
                  <div>
                    <h3 className="font-bold text-slate-800">{item.title}</h3>
                    <p className="text-sm text-[#4F39F6] font-semibold">${item.price}</p>
                  </div>
                </div>
                <button 
                  onClick={() => onRemove(item.title)} 
                  className="text-pink-500 font-bold hover:text-pink-700 transition-colors px-4 py-2"
                >
                  Remove
                </button>
              </div>
            ))}
          </div>

          <div className="border-t border-slate-100 pt-6 flex justify-between items-center mb-8">
            <div className="flex items-center gap-3">
              <span className="text-slate-500 font-bold text-lg">Total :</span>
              <div className="badge bg-indigo-50 border-indigo-100 text-[#4F39F6] font-bold p-3">
                {cartItems.length} Items
              </div>
            </div>
            <span className="text-4xl font-extrabold text-slate-900">${totalAmount}</span>
          </div>

          <button 
            onClick={onCheckout}
            className="w-full bg-linear-to-r from-[#4F39F6] to-[#9514FA] text-white py-4 rounded-full font-bold text-xl shadow-lg hover:opacity-90 transition-all"
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </div>
  );
};

export default Cart;
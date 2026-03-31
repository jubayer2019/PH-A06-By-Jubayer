import { use } from "react";

const badgeStyles = {
  "Best Seller": "bg-orange-100 text-orange-600",
  "Popular": "bg-purple-100 text-purple-600",
  "New": "bg-green-100 text-green-600",
};

const DigitalTools = ({ digitalPromise }) => {
  const digitalProduct = use(digitalPromise);

  return (
    <div className="bg-slate-50 py-12 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {digitalProduct.map((product, index) => (
            <div 
              key={product.id || index} 
              className="card relative bg-white shadow-sm hover:shadow-md transition-all border border-slate-100 rounded-xl p-6 flex flex-col h-full"
            >
              {product.status && (
                <div className={`absolute top-4 right-4 px-2.5 py-0.5 rounded-full text-[10px] font-bold ${badgeStyles[product.status] || 'bg-gray-100 text-gray-600'}`}>
                  {product.status}
                </div>
              )}

              <div className="mb-4">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-12 h-12 rounded-full border border-slate-200 object-contain p-2 bg-slate-50" 
                />
              </div>

              <div className="grow">
                <h3 className="text-xl font-bold text-slate-800 mb-2">{product.title}</h3>
                <p className="text-slate-500 text-sm mb-4 leading-snug line-clamp-2">
                  {product.description}
                </p>

                <div className="flex items-baseline gap-1 mb-4">
                  <span className="text-2xl font-bold text-slate-900">${product.price}</span>
                  <span className="text-slate-400 text-xs">/{product.period}</span>
                </div>

                <ul className="space-y-2 mb-6">
                  {product.features.map((f, i) => (
                    <li key={i} className="flex items-start gap-2 text-slate-600 text-xs">
                      <i className="fa-solid fa-check text-green-500 mt-0.5"></i>
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="w-full bg-gradient-to-r from-[#4F39F6] to-[#9514FA] hover:opacity-90 transition-opacity rounded-full text-white py-2.5 font-bold text-sm mt-auto">
                Buy Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DigitalTools;
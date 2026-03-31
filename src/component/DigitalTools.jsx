import { use } from "react";
const badgeStyles = {
  "Best Seller": "bg-orange-100 text-orange-600",
  "Popular": "bg-purple-100 text-purple-600",
  "New": "bg-green-100 text-green-600",
};

const DigitalTools = ({digitalPromise}) => {

    const digitalPRoduct = use(digitalPromise)
    console.log(digitalPRoduct)

    return (
        <div className="container mx-auto pb-16 px-4">   
            
            <div className="cards grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 max-w-6xl mx-auto mt-10">
                {digitalPRoduct.map((product) => (
                    <div className="card bg-white shadow rounded-lg p-6">
                        
                        {/* Badge Logic */}
                        {product.status && (
                        <div className={`absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold ${badgeStyles[product.status] || 'bg-gray-100 text-gray-600'}`}>
                            {product.status}
                        </div>
                        )}
                        <img src={product.image} alt={product.title} className="w-12 h-12 rounded-full border border-gray-400 flex justify-center items-center object-cover p-2 mb-4" />
                        <h3 className="text-xl font-bold mb-2">{product.title}</h3>
                        <p className="text-gray-600 mb-4">{product.description}</p>
                        <p className="font-bold mb-4">${product.price} / {product.period}</p>
                        <ul className="text-sm">
                            {product.features.map((f, i) => (
                            <li key={i}><i className="fa-solid fa-check text-green-500"></i><span> </span>{f}</li>
                            ))}
                        </ul>
                        <button className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] rounded-full text-white btn mt-4">
                            Buy Now
                        </button>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default DigitalTools;
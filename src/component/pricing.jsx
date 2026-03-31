const Pricing = () => {
    return (
        <div className="container mx-auto px-4 md:px-10 lg:px-20 py-12 md:py-24">
            <h2 className="text-3xl md:text-5xl font-bold text-center mb-6">Simple, Transparent Pricing</h2>
            <p className="text-base md:text-lg text-center text-gray-500 mb-12 max-w-2xl mx-auto">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
                
                <div className="flex flex-col p-8 rounded-2xl bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Starter</h3>
                        <p className="text-sm text-gray-500">Perfect for getting started</p>
                    </div>
                    <div className="mb-8 flex items-baseline text-5xl font-extrabold">
                        $0
                        <span className="text-lg font-medium ml-1 text-gray-500">/Month</span>
                    </div>
                    <ul className="mb-8 space-y-4 flex-1">
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <span className="text-sm text-gray-600">Access to 10 free tools</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <span className="text-sm text-gray-600">Basic templates</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <span className="text-sm text-gray-600">Community support</span>
                        </li>
                        <li className="flex items-center gap-3">
                            <i className="fa-solid fa-check text-green-500"></i>
                            <span className="text-sm text-gray-600">1 project per month</span>
                        </li>
                    </ul>
                    <button className="btn border-none bg-purple-600 hover:bg-purple-700 text-white w-full rounded-full mt-auto py-3 transition-colors">
                        Get Started Free
                    </button>
                </div>

                <div className="relative flex flex-col p-8 rounded-2xl bg-gradient-to-br from-[#4F39F6] to-[#9514FA] text-white shadow-xl md:scale-105 z-10 hover:shadow-2xl hover:-translate-y-3 transition-all duration-300 group">
                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-yellow-400 text-yellow-900 px-4 py-1 rounded-full text-xs font-bold tracking-wide shadow-md uppercase">
                        Most Popular
                    </div>
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Pro</h3>
                        <p className="text-sm text-purple-100">Best for professionals</p>
                    </div>
                    <div className="mb-8 flex items-baseline text-5xl font-extrabold">
                        $29
                        <span className="text-lg font-medium ml-1 text-purple-100">/Month</span>
                    </div>
                    <ul className="mb-8 space-y-4 flex-1">
                        {["Access to all premium tools", "Unlimited templates", "Priority support", "Unlimited projects", "Cloud sync", "Advanced analytics"].map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <i className="fa-solid fa-check text-purple-200"></i>
                                <span className="text-sm text-purple-50">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn border-none bg-white text-purple-600 hover:bg-purple-50 w-full rounded-full mt-auto py-3 font-bold transition-all shadow-lg group-hover:scale-105">
                        Start Pro Trial
                    </button>
                </div>

                <div className="flex flex-col p-8 rounded-2xl bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
                    <div className="mb-6">
                        <h3 className="text-xl font-bold mb-2">Enterprise</h3>
                        <p className="text-sm text-gray-500">For teams and businesses</p>
                    </div>
                    <div className="mb-8 flex items-baseline text-5xl font-extrabold">
                        $99
                        <span className="text-lg font-medium ml-1 text-gray-500">/Month</span>
                    </div>
                    <ul className="mb-8 space-y-4 flex-1">
                        {["Everything in Pro", "Team collaboration", "Custom integrations", "Dedicated support", "SLA guarantee", "Custom branding"].map((feature, i) => (
                            <li key={i} className="flex items-center gap-3">
                                <i className="fa-solid fa-check text-green-500"></i>
                                <span className="text-sm text-gray-600">{feature}</span>
                            </li>
                        ))}
                    </ul>
                    <button className="btn border-none bg-purple-600 hover:bg-purple-700 text-white w-full rounded-full mt-auto py-3 transition-colors">
                        Contact Sales
                    </button>
                </div>

            </div>
        </div>
    );
};

export default Pricing;
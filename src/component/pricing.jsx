const Pricing = () => {
    return (
        <div className="container mx-auto px-20 py-30">
            <h2 className="text-5xl font-bold text-center mb-8">Simple, Transparent Pricing</h2>
            <p className="text-lg text-center text-gray-500 mb-12">Choose the plan that fits your needs. Upgrade or downgrade anytime.</p>
            {/* Pricing cards would go here */}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-8">
                
                <div class="flex flex-col p-8 rounded-2xl bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div class="mb-6">
                    <h3 class="text-xl font-bold mb-2">Starter</h3>
                    <p class="text-sm text-gray-500">Perfect for getting started</p>
                    </div>
                    <div class="mb-8 flex items-baseline text-5xl font-extrabold">
                    $0
                    <span class="text-lg font-medium ml-1 text-gray-500">/Month</span>
                    </div>
                    <ul class="mb-8 space-y-4 flex-1">
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">Access to 10 free tools</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">Basic templates</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">Community support</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">1 project per month</span>
                    </li>
                    </ul>
                    <button class="btn border-none bg-purple-600 hover:bg-purple-700 text-white w-full rounded-full mt-auto">
                    Get Started Free
                    </button>
                </div>

                <div class="relative flex flex-col p-8 rounded-2xl bg-linear-to-br from-[#4F39F6] to-[#9514FA] text-white shadow-xl scale-105 z-10">
                    <div class="absolute -top-3 left-1/2 -translate-x-1/2 bg-yellow-100 text-yellow-700 px-3 py-1 rounded-full text-xs font-medium tracking-wide border border-yellow-200 shadow-sm">
                    Most Popular
                    </div>
                    <div class="mb-6">
                    <h3 class="text-xl font-bold mb-2">Pro</h3>
                    <p class="text-sm text-purple-100">Best for professionals</p>
                    </div>
                    <div class="mb-8 flex items-baseline text-5xl font-extrabold">
                    $29
                    <span class="text-lg font-medium ml-1 text-purple-100">/Month</span>
                    </div>
                    <ul class="mb-8 space-y-4 flex-1">
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-purple-50"></i>
                        <span class="text-sm text-purple-50">Access to all premium tools</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-purple-50"></i>
                        <span class="text-sm text-purple-50">Unlimited templates</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-purple-50"></i>
                        <span class="text-sm text-purple-50">Priority support</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-purple-50"></i>
                        <span class="text-sm text-purple-50">Unlimited projects</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-purple-50"></i>
                        <span class="text-sm text-purple-50">Cloud sync</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-purple-50"></i>
                        <span class="text-sm text-purple-50">Advanced analytics</span>
                    </li>
                    </ul>
                    <button class="btn border-none bg-white text-purple-600 hover:bg-gray-100 w-full rounded-full mt-auto">
                    Start Pro Trial
                    </button>
                </div>

                <div class="flex flex-col p-8 rounded-2xl bg-white text-gray-900 border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                    <div class="mb-6">
                    <h3 class="text-xl font-bold mb-2">Enterprise</h3>
                    <p class="text-sm text-gray-500">For teams and businesses</p>
                    </div>
                    <div class="mb-8 flex items-baseline text-5xl font-extrabold">
                    $99
                    <span class="text-lg font-medium ml-1 text-gray-500">/Month</span>
                    </div>
                    <ul class="mb-8 space-y-4 flex-1">
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">Everything in Pro</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">Team collaboration</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">Custom integrations</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">Dedicated support</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">SLA guarantee</span>
                    </li>
                    <li class="flex items-center gap-3">
                        <i class="fa-solid fa-check text-green-500"></i>
                        <span class="text-sm text-gray-600">Custom branding</span>
                    </li>
                    </ul>
                    <button class="btn border-none bg-purple-600 hover:bg-purple-700 text-white w-full rounded-full mt-auto">
                    Contact Sales
                    </button>
                </div>
                </div>
        </div>
    );
};

export default Pricing;
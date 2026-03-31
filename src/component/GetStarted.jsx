import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';

const GetStarted = () => {
    return (
        
        <div className="bg-slate-50 min-h-screen mx-auto text-center flex flex-col items-center justify-center py-16 px-4">
            
            
            <div className="mb-12 space-y-4">
                <h2 className="text-3xl md:text-5xl font-bold px-2">Get Started in 3 Steps</h2>
                <p className="text-lg text-[#627382] max-w-2xl mx-auto">
                    Start using premium digital tools in minutes, not hours.
                </p>
            </div>
            
            
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                
                
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-6 right-6 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        01
                    </div>
                    <div className="p-6 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <img src={userIcon} alt="User" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-800">Create Account</h3>
                    <p className="text-gray-500 leading-relaxed">
                        Sign up for free in seconds. No credit card required to get started.
                    </p>
                </div>

                
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-xl transition-all duration-300">
                    <div className="absolute top-6 right-6 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        02
                    </div>
                    <div className="p-6 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <img src={packageIcon} alt="Tools" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-800">Choose Products</h3>
                    <p className="text-gray-500 leading-relaxed">
                        Browse our catalog and select the tools that fit your needs.
                    </p>
                </div>

                
                <div className="group relative bg-white p-8 md:p-10 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-xl transition-all duration-300 md:col-span-2 lg:col-span-1 md:max-w-md md:mx-auto lg:max-w-none">
                    <div className="absolute top-6 right-6 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold shadow-lg">
                        03
                    </div>
                    <div className="p-6 bg-purple-100 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                        <img src={rocketIcon} alt="Creating" className="w-12 h-12 object-contain" />
                    </div>
                    <h3 className="text-2xl font-bold mb-3 text-slate-800">Start Creating</h3>
                    <p className="text-gray-500 leading-relaxed">
                        Download and start using your premium tools immediately.
                    </p>
                </div>

            </div>
        </div>
    );
};

export default GetStarted;
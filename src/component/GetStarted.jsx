import userIcon from '../assets/user.png';
import packageIcon from '../assets/package.png';
import rocketIcon from '../assets/rocket.png';
const GetStarted = () => {
    return (
        <div className="bg-slate-50 h-190.5 mx-auto text-center flex flex-col items-center justify-center gap-6">
            <h2 className="text-5xl font-bold">Get Started in 3 Steps</h2>
            <p className="text-lg text-[#627382] text-[16px]">Start using premium digital tools in minutes, not hours.</p>
            
            <div className="max-w-6xl mx-auto p-8 rounded-lg grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="relative bg-white p-10 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
                    <div className="absolute top-6 right-6 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">01
                    </div>
                    <div className="p-5 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                        <img src={userIcon} alt="User" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Create Account</h3>
                    <p className="text-gray-500 text-[16px]">Sign up for free in seconds. No credit card required to get started.</p>
                </div>
                <div className="relative bg-white p-10 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
                    <div className="absolute top-6 right-6 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">02
                    </div>
                    <div className="p-5 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                        <img src={packageIcon} alt="Tools" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Choose Products</h3>
                    <p className="text-gray-500 text-[16px]">Browse our catalog and select the tools that fit your needs.</p>
                </div>
                <div className="relative bg-white p-10 rounded-2xl border border-slate-100 shadow-sm text-center flex flex-col items-center hover:shadow-md transition-shadow">
                    <div className="absolute top-6 right-6 w-8 h-8 bg-purple-600 text-white rounded-full flex items-center justify-center text-sm font-bold">03
                    </div>
                    <div className="p-5 bg-purple-100 rounded-full flex items-center justify-center mb-6">
                        <img src={rocketIcon} alt="Creating" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">Start Creating</h3>
                    <p className="text-gray-500 text-[16px]">Download and start using your premium tools immediately.</p>
                </div>
            </div>
        </div>
    );
};

export default GetStarted;
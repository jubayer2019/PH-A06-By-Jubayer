
const Rating = () => {
  return (
    <div className="bg-linear-to-r from-[#4F39F6] to-[#9514FA] sm:h-80 md:h-61.75 w-full">
        <div className="w-[60%] mx-auto text-white grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x-3 divide-white/30 items-center h-full ">
            <div className="text-center">
                <h2 className="text-4xl font-bold">50K+</h2>
                <p>Active Users</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">200+</h2>
                <p>Premium Tools</p>
            </div>
            <div className="text-center">
                <h2 className="text-4xl font-bold">4.9</h2>
                <p>Rating</p>
            </div>
        </div>
    </div>

  )
}

export default Rating
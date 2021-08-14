import Image from 'next/image'

function Banner() {
    return (
        <div className="relative h-[300px] sm:h-[400px] lg:h-[500px] xl:h-[600px] 2xl:h-[700px]" >
            <Image src="https://images.unsplash.com/photo-1542718610-a1d656d1884c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" layout="fill" objectFit="cover" />
            <div className="absolute top-1/2 w-full text-center">
                <p className="text-sm sm:text-lg">Not sure where to go? Perfect</p>
                <button className="text-red-600 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3
                hover:shadow-xl hover:scale-105 active:scale-95 transition duration-150">I'm flexible</button>
            </div>
        </div>
    )
}

export default Banner

import Image from "next/image";

function LargeCard({ img, title, description, buttonText }) {
    return (
        <section className="relative py-16 cursor-pointer">
            <div className="relative h-96 min-w-[300px]">
                <Image src={img} layout="fill" objectFit="fill" className="rounded-2xl"/>
            </div>
            <div className="absolute top-32 left-12">
                <h3 className="text-4xl text-white mb-3 w-64">{title}</h3>
                <p className="text-gray-100">{description}</p>
                <button className="text-sm text-gray-200 
                bg-purple-500 font-bold rounded-lg mt-2 py-2 px-5
                shadow-md cursor-pointer hover:scale-105 hover:shadow-lg
                active:bg-purple-700 transition">{buttonText}</button>
            </div>          
        </section>
    )
}

export default LargeCard

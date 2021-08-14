import Image from "next/image";

function MediumCard({ img, title }) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80">
                <Image src={img} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <h3 className="text-sm md:text-xl lg:text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard

import Image from "next/image";

function MediumCard({ img, title }) {
    return (
        <div className="cursor-pointer hover:scale-105 transform transition duration-300 ease-out">
            <div className="relative w-20 h-20 md:w-40 md:h-40 lg:w-60 lg:h-60 xl:w-80 xl:h-80">
                <Image src={img} fill sizes="(max-width: 768px) 80px, (max-width: 1024px) 160px, (max-width: 1280px) 240px, 320px" style={{ objectFit: 'cover' }} className="rounded-xl" alt={title} />
            </div>
            <h3 className="text-sm md:text-xl lg:text-2xl mt-3">{title}</h3>
        </div>
    )
}

export default MediumCard

import { HeartIcon, StarIcon } from "@heroicons/react/solid";
import Image from "next/image";

function InfoCard({ img, location, title, description, star, price, total }) {
    return (
        <div className="flex py-5 border px-5 my-1
        rounded-xl shadow-md hover:opacity-80
        hover:shadow-lg transition duration-500 cursor-pointer
        first:mt-3">
            <div className="relative rounded-lg h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
                <Image className="rounded-2xl" src={img} objectFit="cover" layout="fill"/>
            </div>
            <div className="flex flex-grow flex-col pl-5">
                <div className="flex flex-grow justify-between">
                    <p>{location}</p>
                    <HeartIcon className="h-7 cursor-pointer text-red-600" />
                </div>
                <h4 className="text-xl">{title}</h4>
                <div className="border-b w-10 pt-2"/>
                <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>
                <div className="flex justify-between pr-5 items-end">
                    <p className="flex items-center">
                        <StarIcon className="h-5 text-red-600"/>
                        {star}
                    </p>
                    <div>
                        <p className="text-lg lg:text-2xl font-semibold pb-2">{price}</p>
                        <p className="text-right font-extralight">{total}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default InfoCard

import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from 'date-fns';
import InfoCard from "../components/InfoCard";
import searchResults from './api/searchResults.json';
import Map from "../components/Map";
 
function Search() {
    const router = useRouter();
    const { location, startDate, endDate, guests } = router.query;
    const formattedStartDate = startDate ? format(new Date(startDate), "MMMM dd") : '';
    const formattedEndDate = endDate ? format(new Date(endDate), "MMMM dd") : '';
    const range = `${formattedStartDate} to ${formattedEndDate}`

    
    return (
        <div>
            <Header placeholder={`${location} | ${range} | ${guests}`}/>
            <main className="flex">
                <section className="flex-grow pt-14 px-6">
                    <p className="text-xs">300+ Stays from {range} for {guests} guest{guests == 1 ? '' : 's'}</p>
                    <h1 className="text-3xl font-semibold mb-6">Stays in {location}</h1>
                    <div className="hidden lg:inline-flex space-x-3 text-gray-500 text-xs">
                        <p className="button">Cancellation Flexibility</p>
                        <p className="button">Type of place</p>
                        <p className="button">Price</p>
                    </div>
                    <div className="flex flex-col">
                                        {searchResults.map(({ img, location, title, description, star, price, total }) => (
                                            <InfoCard 
                                                key={img}
                                                img={img}
                                                location={location}
                                                title={title}
                                                description={description}
                                                star={star}
                                                price={price}
                                                total={total}
                                            />
                                        ))}
                    </div>

                </section>
                <section className="hidden border-2 xl:inline-flex xl:min-w-[600px] py-14">
                    <Map searchResults={searchResults} />
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search
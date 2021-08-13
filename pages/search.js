import { useRouter } from "next/dist/client/router";
import Footer from "../components/Footer";
import Header from "../components/Header";
import { format } from 'date-fns';
 
function Search() {
    const router = useRouter();
    const { location, startDate, endDate, guests } = router.query;
    const formattedStartDate = format(new Date(startDate), "MMMM dd");
    const formattedEndDate = format(new Date(endDate), "MMMM dd");
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
                </section>
            </main>
            <Footer />
        </div>
    )
}

export default Search

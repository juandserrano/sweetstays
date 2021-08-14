import Head from 'next/head'
import Banner from '../components/Banner'
import Footer from '../components/Footer'
import Header from '../components/Header'
import LargeCard from '../components/LargeCard'
import MediumCard from '../components/MediumCard'
import SmallCard from '../components/SmallCard'
import exploreData from './api/data.json'
import cardsData from './api/data2.json'

export default function Home() {
  return (
    <div className="">
      <Head>
        <title>SweetStays</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <Banner />

      <main className="max-w-7xl mx-auto px-8 sm:px-16">
        <section className="pt-6">
          <h2 className="text-4xl font-semibold pb-5">Explore Nearby</h2>
          
          {/* Pull some data from a server - API endpoints */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {exploreData?.map(item => (
              <SmallCard 
              key={ item.img }
              img={item.img} distance={item.distance} location={item.location} />
            ))}
          </div>
        </section>
        <section>
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          
          {/* Pull some data from a server - API endpoints */}
          <div className="flex justify-center overflow-scroll space-x-3 scrollbar-hide p-3 -ml-3">
            {cardsData?.map(item => (
              <MediumCard 
              key={item.img}
              img={item.img} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard 
          img="https://images.unsplash.com/photo-1584278773680-8d940a213dcf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1958&q=80"
          title="The Greatest Outdoors"
          description="Wishlists curated by Airbnb"
          buttonText="Get Inspired"

        />

      </main>
      <Footer />
    </div>
  )
}
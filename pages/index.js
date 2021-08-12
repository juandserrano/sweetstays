import Head from 'next/head'
import Banner from '../components/Banner'
import Header from '../components/Header'
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
        <section className="pt-6">
          <h2 className="text-4xl font-semibold py-8">Live anywhere</h2>
          
          {/* Pull some data from a server - API endpoints */}
          <div className="flex items-center h-[28rem] overflow-auto space-x-3 mb-5 flex-col sm:flex-row">
            {cardsData?.map(item => (
              <MediumCard 
              key={item.img}
              img={item.img} title={item.title} />
            ))}
          </div>
        </section>
      </main>
    </div>
  )
}


// export async function getStaticProps() {
//   const exploreData = await fetch('api/data.json')
//     .then(res => res.json());
//   return {
//     props: {
//       exploreData
//     }
//   }
// }
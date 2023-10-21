import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import PropertyList from '../components/PropertyList'

function LandForSale() {

  return (
    <div>
      <Navbar />
      <div className='text-center text-green-950 text-4xl font-bold mt-12'>Land For Sale</div>
      <div className="container mx-auto my-8">
        <PropertyList />
      </div>
      <Footer />
    </div>
  )
}

export default LandForSale

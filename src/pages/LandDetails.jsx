import Navbar from '../components/Navbar'
import Footer from '../components/Footer'
import Details from '../components/Details'

function LandDetails() {

  return (
    <div>
      <Navbar />
      <div className='flex justify-center'>
        <Details />
      </div>
      <Footer />
    </div>
  )
}

export default LandDetails

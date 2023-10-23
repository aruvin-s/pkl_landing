import callIcon from '../assets/call.png';
import bg from '../assets/bghero.png';

function Hero() {

  return (
      <div className="w-screen flex items-center justify-center bg-cover bg-center" style={{ backgroundImage: `url(${bg})`, height: '685px' }}>
      <div className="text-center">
        <h1 className="text-4xl font-bold text-green-950">
          Dapatkan Lahan dengan Lokasi dan Fasilitas Terbaik
        </h1>
        <p className="max-w-s text-lg font-medium text-green-950 mt-4">
          Prathama Land Property menawarkan berbagai macam jenis lahan properti di Malang untuk semua kebutuhanmu,
          <br/>mulai dari untuk membangun rumah hingga memulai bisnis baru diatasnya!
        </p>
        <div className='flex justify-center mt-4'>
        <a href="https://wa.me/6282144036169" target="_blank" rel="noopener noreferrer">
        <button className="flex items-center justify-center px-4 py-2 bg-green-950 text-yellow-400 rounded-md">
            <img className="h-6 mr-2" src={callIcon}/>
            <span className="font-medium">Hubungi Kami Sekarang</span>
        </button>
        </a>
        </div>
      </div>
    </div>
  )
}

export default Hero

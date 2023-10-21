import service1 from '../assets/service-1.png';
import service2 from '../assets/service-2.png';
import service3 from '../assets/service-3.png';

function Service() {

  return (
      <div className="flex w-screen h-96 items-center justify-center bg-green-950">
        <div>
        <div  className="text-4xl text-center font-bold text-yellow-400">
            Our Service
        </div>
        <div className='flex text-center mt-3'>
            <div className='mx-8 flex-col flex items-center'>
                <img className='w-24' src={service1}/>
                <p className='text-yellow-400 font-semibold'>Penjualan Lahan</p>
                <p className='w-64 text-white'>
                    Prathama Land Property menawarkan berbagai macam jenis lahan properti di Malang untuk semua kebutuhanmu, mulai dari untuk membangun rumah hingga memulai bisnis baru diatasnya!
                </p>
            </div>
            <div className='mx-8 flex-col flex items-center'>
                <img className='w-24' src={service2}/>
                <p className='text-yellow-400 font-semibold'>Notaris</p>
                <p className='w-64 text-white'>
                    Prathama Land Property menawarkan berbagai macam jenis lahan properti di Malang untuk semua kebutuhanmu, mulai dari untuk membangun rumah hingga memulai bisnis baru diatasnya!
                </p>
            </div>
            <div className='mx-8 flex-col flex items-center'>
                <img className='w-24' src={service3}/>
                <p className='text-yellow-400 font-semibold'>Manajemen dan Konstruksi</p>
                <p className='w-64 text-white'>
                    Prathama Land Property menawarkan berbagai macam jenis lahan properti di Malang untuk semua kebutuhanmu, mulai dari untuk membangun rumah hingga memulai bisnis baru diatasnya!
                </p>
            </div>
        </div>
        </div>
      </div>
  )
}

export default Service

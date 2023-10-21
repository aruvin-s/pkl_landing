import fb from '../assets/fb.png';
import wa from '../assets/wa.png';

function Footer() {

  return (
      <div className="w-screen h-96 justify-center bg-green-950">
      <div className="flex justify-center pt-24">
      <div className='mx-4'>
        <div className='text-yellow-400 font-bold text-xl'>
            Prathama Land
        </div>
        <p className='text-white w-64'>
        Prathama Land Properti berdiri sejak tahun 2017 yang berlokasi di Tawangargo Malang dengan berbagai pilihan tanah di lokasi yang keren dan indah.
        </p>
      </div>
      <div className='mx-4'>
      <div className='text-yellow-400 font-bold text-xl'>
            Hubungi Kami
        </div>
        <p className='text-white w-64'>
        Jalan Raya Tawangargo<br/>
        Phone : 012312312<br/>
        Email : loremipsum@mail.com<br/>
        WhatsApp : 1231233
        </p>
      </div>
      <div className='mx-4'>
      <div className='text-yellow-400 font-bold text-xl'>
            Sosial Media Kami
        </div>
        <p className='flex'>
        <img src={wa} className='mt-1'/>
        <img src={fb} className='mx-4 mt-1'/>
        </p>
      </div>
      </div>
      <div className='text-yellow-400 text-sm pt-24 text-center'>
      ©Copyright PT Prathama Land Property
      </div>
    </div>
  )
}

export default Footer

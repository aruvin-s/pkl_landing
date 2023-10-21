import starIcon from '../assets/star.png';
import person from '../assets/person.png';

function CardTestimony() {
    const starIcons = Array(5).fill().map((_, i) => {
        return <img key={i} className='h-6' src={starIcon} />
      });

    return (
    <div className="max-w-s h-80 rounded-md shadow-lg m-4 bg-green-950">
    <div className='flex justify-center'>
        <img className="w-169 h-157 rounded-md pt-8" src={person} alt="Card" />
    </div>
        <div className="max-w-s px-6 py-4">
          <div className="text-center font-bold text-yellow-400 text-xl mb-2">Pak Prathama</div>
          <div className="text-center">
          <div className='flex justify-center'>
            {starIcons}
          </div>
            <div className="font-medium text-white text-m mt-2 ml-2">Beli tanah disini sangat gampang juga murah,lokasinya juga keren dan indah!</div>
          </div>
        </div>
    </div>
    )
  }
  
export default CardTestimony
  
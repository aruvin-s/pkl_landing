import locIcon from '../assets/distance.png';
import land from '../assets/land.png';

function CardProperty() {

    return (
    <div className="max-w-md h-269 rounded-md shadow-lg m-4 bg-green-950">
        <img className="w-full rounded-t-md" src={land} alt="Card" />
        <div className="px-6 py-4">
          <div className="font-bold text-yellow-400 text-xl mb-2">Villa Taman Bali</div>
          <div className="flex item-center">
          <img className="h-6" src={locIcon}/>
          <div className="font-medium text-white text-m ml-2">Jalan Raya Tawangargo No XXX Blok XXX</div>
          </div>
        </div>
    </div>
    )
  }
  
export default CardProperty
  
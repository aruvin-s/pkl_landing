import callIcon from '../assets/call.png';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { doc, getDoc } from 'firebase/firestore';
import { db } from '../config/firebase';

function Details() {
    const [data, setData] = useState(null);
    const { id } = useParams();

    useEffect(() => {
        async function fetchProperties() {
          const docRef = doc(db, 'properties', id);
          const docSnap = await getDoc(docRef);
          if (docSnap.exists()) {
            setData(docSnap.data());
          } else {
            console.log('No such document!');
          }
        }
    
        fetchProperties();
      }, [id]);
    
      if (!data) {
        return <div>Loading...</div>;
      }

    return (
    <div className="w-screen">
        <div className="text-center my-8">
        <div className="font-bold text-4xl text-green-950">{data.propertyName}</div>
        <p className="font-semibold  text-green-950">{data.propertyAddress}</p>
        </div>
        <div className="flex justify-center mb-8">
            <div id="details-left" className="flex h-80 mx-4 rounded-md">
            <img src={data.propertyImage} className='w-96 h-80 rounded-md mr-4 shadow-lg'/>
            <img src={data.propertyImage} className='w-96 h-80 rounded-md mr-4 shadow-lg'/>
            </div>
            <div id="details-right" className="w-72 h-80 mx-4 bg-green-950/25 shadow-lg rounded-md">
             <div className="font-bold text-center text-2xl pt-3 text-green-950">
                {data.propertyCity}    
             </div>
             <div className="text-center text-md font-semibold text-green-950 mt-2">
                Luas : {data.propertyArea} m/2<br/>
                SHM : {data.propertySHM} <br/>
                View : {data.propertyView} <br/>
             </div>
             <div className="font-bold text-center text-xl pt-2 text-green-950">
                Harga :
            </div>
            <div className="font-bold text-center text-2xl pt-2 text-green-950">
                {data.propertyPrice}
            </div>
            <div className="flex justify-center">
            <p className="text-center text-md font-semibold text-green-950 mt-2 w-64">Free AJB, Pajak, SHM, Admin, Notaris</p>
            </div>
                <div className='flex justify-center mt-2'>
                    <button className="flex items-center justify-center px-4 py-2 bg-green-950 text-yellow-400 rounded-md">
                        <img className="h-6 mr-2" src={callIcon}/>
                        <span className="font-medium">Hubungi Kami</span>
                    </button>
                </div>
            </div>
        </div>
        <div className='mx-64 my-8'>
            <div className="font-bold text-4xl text-green-950">{data.propertyName} - {data.propertyCity} </div>
            <div className="text-xl text-green-950 mt-2 text-justify">
            {data.propertyDesc}
            </div>
            <div id="desc" className='flex mt-8'>
            <div id="desc-left">
            <div className="font-bold text-4xl text-green-950">Spesifikasi </div>
                <div className='text-xl text-green-950 mt-2 text-justify'>
                <p className='pt-2'>Luas : {data.propertyArea}</p>
                <p className='pt-2'>SHM: {data.propertySHM}</p>
                <p className='pt-2'>View : {data.propertyView}</p>
                <p className='pt-2'>Akses Jalan : {data.propertyRoad}</p>
                <p className='pt-2'>Kondisi Sekitar : {data.propertyCondition}</p>
            </div>
            </div>
            <div id="desc-right" className='ml-96'>
            <div>
            <div className="font-bold text-4xl text-green-950">
                Segera Hubungi Kami <br/> untuk Penawaran Terbaik!
            </div>
            <button className="flex items-center justify-center px-4 py-2 bg-green-950 text-yellow-400 rounded-md mt-4 w-64 h-12">
                        <img className="h-6 mr-2" src={callIcon}/>
                        <span className="font-medium">Hubungi Kami</span>
            </button>
            </div>
            </div>
            </div>
        </div>
    </div>
    )
  }
  
export default Details
  
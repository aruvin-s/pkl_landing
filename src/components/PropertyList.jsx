import CardProperty from './CardProperty';
import { collection, getDocs, deleteDoc, doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db, storage } from "../config/firebase"
import locIcon from '../assets/distance.png';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function PropertyList() {

    const [data, setData] = useState([]);

    useEffect(()=> {
        const unsub = onSnapshot(
            collection(db, "properties"),
            (snapShot) => {
              let list = [];
              snapShot.docs.forEach((doc) => {
                list.push({ id: doc.id, ...doc.data() });
              });
              setData(list);
            },
            (error) => {
              console.log(error);
            }
          );
      
          return () => {
            unsub();
          };

    }, []);

    return (
        <div>
            {data.map((data, id) => (
            <div className="max-w-md h-269 rounded-md shadow-lg m-4 bg-green-950" key={id}>
                <img className='w-full rounded-t-md' src={data.propertyImage} alt="Card" />
                <div className='px-6 py-4'>
                <div className='font-bold text-yellow-400 text-xl mb-2>'>{data.propertyName}</div>
                <div className='flex item-center'>
                    <img className='h-6' src={locIcon} alt="Location Icon"/>
                    <div className='font-medium text-white text-m ml-2'>{data.propertyAddress}</div>
                </div>
                <div classname='text-yellow-400 font-semibold pt-4'>
                <Link to={`/properties/${data.id}`}>Lihat Properti</Link>
                </div>  
                </div>
            </div>
            ))}
        </div>
    )
  }
  
export default PropertyList
  
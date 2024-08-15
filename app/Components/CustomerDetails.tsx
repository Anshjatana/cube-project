'use client'
import React, { useCallback, useEffect, useState } from 'react';
import { Customer, Photo } from '../types';
import axios from 'axios';
import Image from 'next/image';

interface CustomerDetailsProps {
  customer: Customer;
}

const CustomerDetails: React.FC<CustomerDetailsProps> = ({ customer }) => {
    const [photos, setPhotos] = useState<Photo[]>([]);
    console.log('API Key:', process.env.NEXT_PUBLIC_API_KEY);
  
    const fetchPhotos = useCallback(async () => {
      try {
        const randomPage = Math.floor(Math.random() * 100) + 1; // Generate a random page number between 1 and 100
        const options = {
          method: 'GET',
          url: 'https://api.pexels.com/v1/search',
          params: { 
            query: 'Nature', 
            orientation: 'square', 
            size: 'small', 
            per_page: '9', 
            page: randomPage // Add the random page parameter
          },
          headers: { Authorization: `${process.env.NEXT_PUBLIC_API_KEY}` }
        };
    
        const response = await axios.request(options);
        setPhotos(response.data.photos);
      } catch (error) {
        console.error('Error fetching photos:', error);
      }
    }, []);
  
    useEffect(() => {
      fetchPhotos(); // Initial fetch
  
      const intervalId = setInterval(fetchPhotos, 10000); // Fetch new photos every 10 seconds
  
      return () => clearInterval(intervalId); // Clear interval on component unmount
    }, [fetchPhotos]);

  return (
    <div className="customer-details">
      <h2 className='consumer-heading'>{customer.name} details here</h2>
      <p className='consumer-title' >{customer.title}</p>
      <div className="photo-grid">
        {photos.map(photo => (
          <Image width={180} height={180} priority key={photo.id} className='rounded-xl max-w-[85px] max-h-[85px] sm:max-w-[95px] sm:max-h-[95px] md:max-w-[115px] md:max-h-[115px]  lg:max-w-[135px] lg:max-h-[135px]' src={photo.src.medium} alt={photo.alt || 'Customer related'} />
        ))}
      </div>
    </div>
  );
};

export default CustomerDetails;

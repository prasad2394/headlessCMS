'use client'
// components/HomeBanner.tsx
import { useCallback, useEffect, useState } from 'react';
import { fetchHomePageBanner } from '../../../utils/api';
import { Banner } from '../../../utils/types';
import striptags from 'striptags';


const HomeBanner = () => {
    const [bannerData, setBannerData] = useState<Banner | null>(null);
    
    //UseEffect Used without useCallBack
    // useEffect(() => {
    //     const fetchBannerData = async () => {
    //       try {
    //         const data = await fetchHomePageBanner();
    //         setBannerData(data);
    //       } catch (error) {
    //         console.error('Error fetching homepage banner:', error);
    //       }
    //     };
    
    //     fetchBannerData();
    // }, []);


    const fetchBData = useCallback(async () => {
        try {
          const response = await fetchHomePageBanner();
          setBannerData(response);
        } catch (error) {
          console.error('Error fetching homepage banner:', error);
        }
        
    }, []);

    useEffect(() => {
      fetchBData();
    }, [fetchBData]);
    

    if (!bannerData) {
        return "Loading..."; // You can display a loading spinner or message here
    }

    const bgBannerImage = bannerData.acf.banner_home.background_image.url;
    const bannerCont = bannerData.acf.banner_home.content;
    const bCont = striptags(bannerCont);
    return (
        <div className='flex items-center justify-start h-screen max-w-full mb-12 bg-fixed bg-center bg-cover relative'  style={{ backgroundImage: `url(${bgBannerImage})`}}>
        {/* Display your banner content using the data from bannerData */}
            <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
            <div className='p-5 container px-12 text-white z-[2] mt-[-10rem]'>
              <h3 className='text-5xl font-bold'>{bannerData.acf.banner_home.title}</h3>
              <p className='py-5 text-xl w-1/2'>{bCont}</p>
              <button className='px-8 py-2 border'>{bannerData.acf.banner_home.banner_cta.title}</button>
            </div>
        </div>
    );
};

export default HomeBanner;

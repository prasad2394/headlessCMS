// utils/api.ts
import axios from 'axios';
import { Banner, Menu } from './types';

const apiUrl = 'http://localhost/blog/wp-json/';

export const fetchHomePageBanner = async (): Promise<Banner | null> => {
//export const fetchHomePageBanner = async () => {
  try {
    const response = await axios.get(`${apiUrl}wp/v2/pages?slug=home&acf_format=standard&_fields=acf.banner_home.title,acf.banner_home.content,acf.banner_home.banner_cta.title,acf.banner_home.banner_cta.url,acf.banner_home.background_image.url`);
    //console.log(response);
    //onst banner = response.data[0];
    //return banner as Banner;
    return response.data[0];
  } catch (error) {
    console.error('Error fetching homepage banner:', error);
    return null;
  }
};


export const fetchWebMenu = async (): Promise<Menu | null> => {
  //export const fetchHomePageBanner = async () => {
    try {
      //var mainMenu; 
      const response = await axios.get(`${apiUrl}wp/v2/menu`);
      return response.data;
    } catch (error) {
      console.error('Error fetching homepage banner:', error);
      return null;
    }
};
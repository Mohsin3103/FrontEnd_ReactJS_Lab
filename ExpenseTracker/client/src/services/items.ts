import axios from 'axios';
import IItem from '../models/IItem';

const baseUrl = process.env.REACT_APP_API_BASE_URL;

// function to get items from the backend
const getItems = async () => {
    const response = await axios.get<IItem[]>( `${baseUrl}/items` );
    return response.data;
};

export {
    getItems
};
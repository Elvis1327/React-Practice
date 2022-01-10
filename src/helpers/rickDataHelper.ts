import axios from 'axios';

const MAIN_URL: string = `https://rickandmortyapi.com/api/character`;

export const getRickDataFetch = async () => {
    const { data } = await axios.get(MAIN_URL);
    return data.results;
};




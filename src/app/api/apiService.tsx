import axios from 'axios';

import config from '@src/config.json';
import Config from '@interfaces/config/config';

import store from '@redux/store';
import { selectAccessToken } from '@redux/actions';

const appConfig: Config = config;

const baseURL = (): string => {
    return `${appConfig.statServer.url}:${appConfig.statServer.port}`;
}

export const fetchData = async (url: string) => {
    try {
        const accessToken = selectAccessToken(store.getState());
        const response = await axios.get(`${baseURL()}${url}`, {
            headers: {
                Authorization: `Bearer ${accessToken}`, // Pass JWT token in the Authorization header
            },
        });

        return response.data; // Return parsed response data
    } catch (error) {
        throw new Error('Error fetching data');
    }
};
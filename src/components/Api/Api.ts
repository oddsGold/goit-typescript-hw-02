import axios, {AxiosInstance, AxiosResponse} from "axios";
import {Images} from "../../App.tsx";

interface ApiResponse {
    results: Images[];
    total: number
}

const ACCESS_KEY = '4kxVO0i3L9nR4e1rOjoLZkn-NsnJP8uE4IJinxwCN6E';

const INSTANCE: AxiosInstance = axios.create({
    baseURL: 'https://api.unsplash.com/',
    headers: {
        Authorization: `Client-ID ${ACCESS_KEY}`
    }
});

export const searchPhoto = async (query: string, page: number, perPage: number): Promise<ApiResponse> => {
    try {
        const response: AxiosResponse<ApiResponse> = await INSTANCE.get(`/search/photos?query=${query}&page=${page}&per_page=${perPage}`);
        return response.data;
    } catch (error) {
        throw new Error('Failed to search photos');
    }
};
import axios from "axios";
import { API_BASE_URL } from '../utils/constants';

export const createAccount = async ({ email, username, password }: signFormType) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/register`, {
            email,
            username,
            password
        });

        return data;
    } catch (error: any) {
        console.error('Registration error:', error.response?.data || error.message);
        return error.response?.data || { statusCode: '500', message: 'Server connection failed. Check if backend is running.' };
    }
}

export const logIn = async ({ email, password }: signFormType) => {
    try {
        const { data } = await axios.post(`${API_BASE_URL}/auth/login`, {
            email,
            password
        });
        return data;

    } catch (error: any) {
        console.error('Login error:', error.response?.data || error.message);
        return error.response?.data || { statusCode: '401', message: 'Server connection failed. Check if backend is running.' };
    }
}
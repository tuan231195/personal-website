import axios from 'axios';
import { toast } from 'react-toastify';

export const clientApi = axios.create({
	baseURL: '/api',
});

clientApi.interceptors.response.use(undefined, (error) => {
	toast(error.response.data.error, {
		type: 'error',
	});
	throw error;
});

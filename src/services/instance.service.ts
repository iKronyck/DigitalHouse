import axios, {AxiosInstance, AxiosRequestConfig} from 'axios';

const URL = 'https://6222994f666291106a29f999.mockapi.io/api/v1/';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: URL,
});

export const dispatchRequest = async (request: AxiosRequestConfig) => {
  try {
    axiosInstance.defaults.headers.common['Content-Type'] = 'application/json';
    axiosInstance.defaults.headers.common.Accept = 'application/json';

    const resource = await axiosInstance.request(request);

    return Promise.resolve(resource);
  } catch (error) {
    void Promise.reject(error);
  }
};

import {AxiosResponse} from 'axios';
import {dispatchRequest} from './instance.service';

export function getProducts<T>(): Promise<AxiosResponse<T> | undefined> {
  return dispatchRequest({
    method: 'get',
    url: 'products',
  });
}

import { AxiosResponse } from "axios";
import apiClient from "./api-client";

export interface Entity {
  id: number;
}

class HttpService<T extends Entity> {
  endpoint: string;

  constructor(endpoint: string) {
    this.endpoint = endpoint;
  }

  getAll = () => {
    return this.abortableCall<T[]>(() => apiClient.get<T[]>(this.endpoint));
  };

  get = (id: number) => {
    return this.abortableCall<T>(() =>
      apiClient.get<T>(`${this.endpoint}/${id}`)
    );
  };

  delete = (id: number) => {
    return this.abortableCall<void>(() =>
      apiClient.delete(`${this.endpoint}/${id}`)
    );
  };

  create = (entity: T) => {
    return this.abortableCall<T>(() =>
      apiClient.post<T>(this.endpoint, entity)
    );
  };

  update = (entity: T) => {
    return this.abortableCall<T>(() =>
      apiClient.put<T>(`${this.endpoint}/${entity.id}`, entity)
    );
  };

  protected abortableCall = <T>(callback: () => Promise<AxiosResponse<T>>) => {
    const controller = new AbortController();
    const request = callback();

    return {
      request,
      cancel: () => controller.abort(),
    };
  };
}

export default HttpService;

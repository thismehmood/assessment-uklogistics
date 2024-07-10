import axios from 'axios';

const request = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_URL,
});

export const postRequest = async ({endpoint, payload}) => {
  const response = await request.post(endpoint, payload);
  return response;
};

export const getRequest = async ({endpoint}) => {
  const response = await request.get(endpoint);
  return response;
};

export const putRequest = async ({endpoint, payload}) => {
  const response = await request.put(endpoint, payload);
  return response;
};

export const patchRequest = async ({endpoint, payload}) => {
  const response = await request.patch(endpoint, payload);
  return response;
};

export const deleteRequest = async ({endpoint}) => {
  const response = await request.delete(endpoint);
  return response;
};

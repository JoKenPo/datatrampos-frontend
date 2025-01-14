import { axiosInstance } from "../core/apiConfig";

export async function fetchJobs(page = 1, company, remote, orderBy, location) {
  const { data } = await axiosInstance.get(
    `jobs/?page=${page}&company=${company}&remote=${remote}&orderBy=${orderBy}&location=${location}`
  );
  return data;
}

export async function fetchLocations() {
  const { data } = await axiosInstance.get(`locations`);
  return data;
}

import { useEffect, useState } from "react";
import { API_BASE_URL } from '../constants';
import { useRef } from './useRef'

export const useFetch = (endpoint) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const [ref, refIsLoading] = useRef()

  useEffect(() => {
    if(!ref || refIsLoading) {
      return () => {};
    }
    let controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/documents/search?ref=${ref}${endpoint}`, {
          signal: controller.signal
        });
        const data = await response.json();
        setData(data);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setError(e);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, [endpoint, ref, refIsLoading]);

  return [data, isLoading, error];
};

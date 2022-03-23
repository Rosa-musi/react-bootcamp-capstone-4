import { useEffect, useState } from "react";

export const useRef = () => {
  const [ref, setRef] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    let controller = new AbortController();

    const fetchData = async () => {
      try {
        const response = await fetch("https://wizeline-academy.cdn.prismic.io/api/v2", {
          signal: controller.signal
        });
        const data = await response.json();
        setRef(data.refs[0].ref);
        setIsLoading(false);
      } catch (e) {
        console.log(e);
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
      controller.abort();
    };
  }, []);

  return [ref, isLoading];
};

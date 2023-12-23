import { useState, useEffect } from 'react';

import axios, { AxiosError } from 'axios';

// import api from '../api/axios-posts';

export default function useAxios(dataUrl: string) {
  const [data, setData] = useState([]);
  const [fetchError, setFetchError] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);

  useEffect(
    function () {
      let isMount = true;
      const source = axios.CancelToken.source();

      async function fetchData(url: string) {
        setLoading(true);
        try {
          const response = await axios.get(url, {
            cancelToken: source.token,
          });
          if (isMount) {
            setData(response?.data);
            setFetchError(null);
          }
        } catch (err) {
          if (err instanceof AxiosError && err?.response) {
            if (isMount) {
              setFetchError(err.response.data);
              setData([]);
            }
          }
          if (err instanceof Error) {
            if (isMount) {
              setFetchError(err.message);
              setData([]);
            }
          }
        } finally {
          isMount &&
            setTimeout(function () {
              setLoading(false);
            }, 2000);
        }
      }
      fetchData(dataUrl);

      return function () {
        // console.log('Cleanup function....');
        isMount = false;
        source.cancel();
      };
    },
    [dataUrl]
  );
  return { data, setData, fetchError, loading };
}

// useEffect(function () {
//   async function fetchPosts(url: string) {
//     try {
//       const response = await api.get(url, {
//         timeout: 3000,
//       });
//       if (response && response?.data) {
//         setData(response.data);
//       }
//     } catch (err) {
//       if (err instanceof AxiosError && err?.response) {
//         console.error(err.response.data);
//         console.error(err.response.status);
//         console.error(err.response.headers);
//       } else {
//         if (err instanceof Error)
//           console.error(`\x1b[31mError during fetching: ${err.message}`);
//       }
//     }
//   }
//   fetchPosts(dataUrl);
//   return function () {
//     console.log('cleanup');
//   };
// }, []);

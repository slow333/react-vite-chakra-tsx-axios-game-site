import {useEffect, useState} from "react";
import ApiClient from "../services/api-client.ts";
import {AxiosRequestConfig, CanceledError} from "axios";
import {Game} from "./useGames.ts";

interface FetchResponse<T> {
   count: number;
   results: T[];
}

const UseData = <T>(endpoint: string,
                    requestConfig?: AxiosRequestConfig, // query를 보냄
                    deps?: any[]) => {
   const [data, setData] = useState<T[]>([])
   const [error, setError] = useState('');
   const [isLoading, setLoading] = useState(false);

   useEffect(() => {
      const controller = new AbortController();
      setLoading(true)
      ApiClient.get<FetchResponse<T>>(endpoint,
         { signal: controller.signal , ...requestConfig } ) // query 받음
         .then(res => {
            setData(res.data.results);
            setLoading(false)
         })//모든 내용은 data로 보냄 root
         .catch(err => {
            if(err instanceof CanceledError) return;
            setError(err.message)
            setLoading(false);
         })
      return () => controller.abort()
   }, deps ? [...deps] : []); // 선택하면 화면 랜더링

   return { data, error, isLoading };
};

export default UseData;
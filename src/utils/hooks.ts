import axios, { CanceledError } from "axios";
import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";

const API_BASE_PATH = import.meta.env.VITE_API_BASE_PATH;

const apiUrl = (action: string) => API_BASE_PATH + action;

export function useApiGet<TModel>(action: string, params: any = null) {
  const [data, setData] = useState<TModel | null>(null);
  // const navigate = useNavigate();
  const url = apiUrl(action);

  if (!params) {
    params = {};
  }

  useEffect(() => {
    setData(null);

    const abortController = new AbortController();
    axios
      .get(url, {
        params,
        signal: abortController.signal,
      })
      .then((response) => response.data)
      .then((model: TModel) => setData(model))
      .catch((err) => {
        if (err instanceof CanceledError) {
          console.info("canceled request");
        } else {
          console.error(err);
          // navigate("/");
        }
      });

    return () => {
      abortController.abort();
    };
    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [url, JSON.stringify(params)]);

  return data;
}

import { useState, useEffect } from "react";

const useAxios = () => {
  const [response, setResponse] = useState([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [controller, setController] = useState();

  const axiosFetch = async (configObj) => {
    const { axiosInstance, method, url, requestConfig = {} } = configObj;

    try {
      setLoading(true);
      const ctrl = new AbortController();
      setController(ctrl);

      const res = await axiosInstance[method.toLowerCase()](url, {
        ...requestConfig,
        signal: ctrl.signal,
      });
      console.log(res);
      setResponse(res.data);
    } catch (error) {
      console.log(error);
      setError(error.message);
    } finally {
      setLoading(false);
    }
}

  useEffect(() => {
    let isMounted = true;
    //const controller = new AbortController();

    const fetchData = async () => {};
    fetchData();
    //return () => controller.abort();
    return () => {
      isMounted = false;
    };
  }, [reload]);
  return [response, loading, error, refetch];
};

export default useAxios;

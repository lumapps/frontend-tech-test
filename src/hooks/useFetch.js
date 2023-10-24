import axios from "axios";
import { useEffect, useState } from "react";

const useFetch = (endpoint, params = {}, dependencies = []) => {
  /* 
    This hook encapsulates a fetch query and returns a loading state, errors caught and response of said query.
      Args:
          endpoint (string): endpoint of the query
          params ({method: string, body: string}): additionnal parameters of the query
          dependencies (array): array of dependencies to insert in useEffect's dependencies array
      Returns:
          loading (bool): the query is being processed at the moment
          error (object): error caught in the try/catch statement
          data ({status: int, response: object}): status of the query and response of the server
   */
  const [ data, setData ] = useState(null);
  const [ error, setError ] = useState(null)
  const [ loading, setLoading ] = useState(true)

  const APIBaseUrl = "http://gateway.marvel.com/v1/public";
  const APIKeyParameter = process.env.REACT_APP_MARVEL_API_KEY;

  const queryParams = {
    method: params?.method || "get",
    url: APIBaseUrl + endpoint,
    params: {
      apikey: APIKeyParameter,
    },
    headers: { "Content-Type": "application/json" },
    body: params?.body || null,
  };

  useEffect(() => {
    const fetchData = async () => {
        setLoading(true)
        try {
            const response = await axios(queryParams)
            setData({status: response.status, response})
            setLoading(false)
        }
        catch (error) {
            setError(error)
            setLoading(false)
        }
    }
    fetchData()
  }, []); //TO DO: include props.dependencies in dependencies array

  return { data, loading, error}
};

export default useFetch;

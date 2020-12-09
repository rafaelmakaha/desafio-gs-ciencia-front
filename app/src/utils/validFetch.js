export const validFetch = (fetchResponse) => {
    if (
      fetchResponse.ok && 
      fetchResponse.status >= 200 && 
      fetchResponse.status <= 299
      ) 
      return fetchResponse.json();
    throw fetchResponse;
}
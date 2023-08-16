export const getProduct = async () => {
  // Dynamic data fetching, Not Cache the data so the data will fetch the new data every time
  const response = await fetch("https://fakestoreapiserver.reactbd.com/tech", {
    cache: "no-cache"
  });

  if (!response.ok) {
    throw new Error('failed to fetch users')
  }

  return await response.json()
};
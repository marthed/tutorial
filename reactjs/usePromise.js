const usePromise = (promise) => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);

  React.useEffect(() => {
    setData(null);
    setError(null);

    if (promise) {
      promise.then((result) => setData(result)).catch((e) => setError(e));
    } else {
      setError(new Error(`Promise is ${promise}`));
    }
  }, [promise]);
  return [data, error];
};

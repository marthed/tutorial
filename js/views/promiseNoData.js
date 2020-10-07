const promiseNoData = (promise, error, data) => {
  return (
    (!promise && "no data") ||
    (error && <h1>{error.message}</h1>) ||
    (!data && <img src="http://www.csc.kth.se/~cristi/loading.gif"></img>)
  );
};

const useModelProp = (model, prop) => {
  const [propValue, setPropValue] = React.useState(model[prop]);
  React.useEffect(() => {
    const observer = () => setPropValue(model[prop]);
    return model.addObserver(observer);
  }, [model, prop]);
  return propValue;
};

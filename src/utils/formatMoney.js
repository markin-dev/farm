export default (value) => {
  const dollars = value / 100;

  return dollars.toLocaleString('en-US', {
    style: 'currency',
    currency: 'USD',
  });
};

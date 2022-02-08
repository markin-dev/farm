const getSecretKey = () => {
  if (!process.env.VUE_APP_SECRET_KEY) {
    console.error('SECRET KEY NOT SPECIFIED, USING UNSAFE KEY'); // eslint-disable-line

    return 'UNSAFE_KEY';
  }

  return process.env.VUE_APP_SECRET_KEY;
};

export default getSecretKey;

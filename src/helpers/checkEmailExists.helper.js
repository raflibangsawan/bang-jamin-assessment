const checkEmailExists = (email, data) => {
  const emailExists = data.some((obj) => obj.email === email);
  return emailExists;
};

export default checkEmailExists;

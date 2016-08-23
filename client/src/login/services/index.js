export const authenticate = ({ userName, password }) => {
  return Promise.resolve({ userName, password });
};

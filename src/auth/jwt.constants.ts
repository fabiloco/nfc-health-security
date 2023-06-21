export const JwtConstants = () => {
  console.log('jwt secret:', process.env.JWT_SECRET);
  return {
    secret: process.env.JWT_SECRET,
  };
};

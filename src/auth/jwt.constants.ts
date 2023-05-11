export const JwtConstants = () => {
  return {
    secret: process.env.JWT_SECRET,
  };
};

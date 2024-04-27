const accessToken = process.env.ACCESS_TOKEN_SECRET as string;

export const authenticateToken = (req: any, res: any, next: any) => {
  const token = req.headers.authorization && req.headers.authorization.split(' ')[1];
  if (!token) {
    return res.status(401).json("Unauthorized user!");
  }
  
  if (token === accessToken) {
    next();
  } else {
    return res.status(403).json("Forbidden!");
  }
}

/*export const includeBasePath = () => {
  return (req: any, _: any, next: any) => {
    const originalUrl = req.originalUrl;
    if (!originalUrl.startsWith(BASE_PATH)) {
      req.url = `${BASE_PATH}${originalUrl}`;
    }
    next();
  };
}*/
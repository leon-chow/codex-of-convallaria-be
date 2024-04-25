import { BASE_PATH } from "../utils/constants";

export const includeBasePath = () => {
  return (req: any, _: any, next: any) => {
    const originalUrl = req.originalUrl;
    if (!originalUrl.startsWith(BASE_PATH)) {
      req.url = `${BASE_PATH}${originalUrl}`;
    }
    next();
  };
}
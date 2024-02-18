import jwt from "jsonwebtoken";
import { cookies } from "next/headers";
const TokenGenerate = (key: string) => {
  return jwt.sign({ key }, `${process.env.JWT_SECRET}`);
};
const CookieSetter = async (token: string, set: boolean) => {
  cookies().set("betakey", set?token:"", {
    httpOnly: true,
    maxAge: set? 60 * 60 * 1:0,
    secure: true,
    sameSite: "strict",
  });
};
const isAuthorized=()=>{
  if(cookies().get("betakey")){
      return true
  }
  return false
}
export { TokenGenerate, isAuthorized,CookieSetter };
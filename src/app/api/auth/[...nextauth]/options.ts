

import type { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

export const options: NextAuthOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials, req) {
        const user = { id: "1", name: "newuser", email: "jmsmith@gmail.com", password: "123456" };


        console.log("Received credentials:", credentials);
        console.log("Expected user data:", user);

        const jwtSecret = process.env.NEXTAUTH_SECRET;
        if (!jwtSecret) {
          console.error("JWT secret is not set.");
          return null;
        }


        console.log("JWT Secret:", jwtSecret);


        const token = generateToken(user, jwtSecret);

 
        console.log("Generated Token:", token);


        const decodedUser = decryptToken(token, jwtSecret);

        if (decodedUser) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],


  secret: process.env.NEXTAUTH_SECRET,
};


function generateToken(user: {
        id: string; name: string; email: string; password:
         
            string;
    }, jwtSecret: string) {


  return 'your-static-token-here';
}
function decryptToken(_token: string, jwtSecret: string) {


  return { id: "1", name: "new user", email: "jmsmith@gmail.com" };
}

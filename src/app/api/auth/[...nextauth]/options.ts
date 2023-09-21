// import type { NextAuthOptions } from "next-auth";
// import CredentialsProvider from "next-auth/providers/credentials";

// export const options:NextAuthOptions ={
//     providers:[

//         CredentialsProvider({
//             name: "Credentials",
//             credentials: {
//                 email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
//                 password: { label: "Password", type: "password" }
//               },
//               async authorize(credentials, req) {
          
//                 const user = { id: "1", name: "J Smith", email: "jmsmith@gmail.com",password:"123456" }
          
//                 if(credentials?.email === user.email && credentials?.password === user.password){
//                     return user
//                 } else {
//                     return null
//                 }
//               }
//         })
//     ],

//     secret:process.env.NEXTAUTH_SECRET,
    
// }

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

        // Debugging: Log received credentials and expected user data
        console.log("Received credentials:", credentials);
        console.log("Expected user data:", user);

        // Ensure JWT secret matches the one used for token generation
        const jwtSecret = process.env.NEXTAUTH_SECRET;
        if (!jwtSecret) {
          console.error("JWT secret is not set.");
          return null;
        }

        // Debugging: Log the JWT secret
        console.log("JWT Secret:", jwtSecret);

        // Simulate token generation (Replace with your actual token generation logic)
        const token = generateToken(user, jwtSecret);

        // Debugging: Log the generated token
        console.log("Generated Token:", token);

        // Simulate token decryption (Replace with your actual decryption logic)
        const decodedUser = decryptToken(token, jwtSecret);

        if (decodedUser) {
          return user;
        } else {
          return null;
        }
      },
    }),
  ],

  // Ensure the JWT secret matches the one used in authorization
  secret: process.env.NEXTAUTH_SECRET,
};

// Simulated token generation (Replace with your actual token generation logic)
function generateToken(user: {
        id: string; name: string; email: string; password:
            // import CredentialsProvider from "next-auth/providers/credentials";
            // export const options:NextAuthOptions ={
            //     providers:[
            //         CredentialsProvider({
            //             name: "Credentials",
            //             credentials: {
            //                 email: { label: "Email", type: "text", placeholder: "jsmith@gmail.com" },
            //                 password: { label: "Password", type: "password" }
            //               },
            //               async authorize(credentials, req) {
            //                 const user = { id: "1", name: "J Smith", email: "jmsmith@gmail.com",password:"123456" }
            //                 if(credentials?.email === user.email && credentials?.password === user.password){
            //                     return user
            //                 } else {
            //                     return null
            //                 }
            //               }
            //         })
            //     ],
            //     secret:process.env.NEXTAUTH_SECRET,
            // }
            string;
    }, jwtSecret: string) {
  // Example: Use a JWT library to generate the token
  // const token = jwt.sign(user, jwtSecret, { expiresIn: '1h' });
  // return token;

  // For debugging, return a static token
  return 'your-static-token-here';
}

// Simulated token decryption (Replace with your actual decryption logic)
function decryptToken(_token: string, jwtSecret: string) {
  // Example: Use a JWT library to decode the token
  // const decoded = jwt.verify(token, jwtSecret);
  // return decoded;

  // For debugging, return a static user object
  return { id: "1", name: "new user", email: "jmsmith@gmail.com" };
}

import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
import FacebookProvider from "next-auth/providers/facebook";
import CredentialsProvider from "next-auth/providers/credentials";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),

    FacebookProvider({
      clientId: process.env.FACEBOOK_CLIENT_ID,
      clientSecret: process.env.FACEBOOK_CLIENT_SECRET,
    }),

    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials) {
        try {
          console.log("🟢 Credentials received:", credentials);

          const client = await clientPromise;
          const db = client.db(process.env.DB_NAME);
          const usersCollection = db.collection("users");

          // find user by email
          const user = await usersCollection.findOne({
            email: credentials.email
          });

          if (!user) {
          console.log("❌ No user found with this email");
           return null; // 401 Unauthorized
        }

          // compare password
          const isPasswordValid = await bcrypt.compare(
            credentials.password,
            user.password
          );

          console.log("🟣 Password valid?", isPasswordValid);


          if (!isPasswordValid) {
           console.log("❌ Invalid password");
           return null; // 401 Unauthorized
          }

          // success
          return { id: user._id.toString(), name: user.name, email: user.email };
         } catch (error) {
        console.error("🔴 Authorize error:", error);
        throw new Error(error.message );
  }
}
    }),
  ],

  pages: {
    signIn: "/login",
  },

  session: {
    strategy: "jwt",
  },

  secret: process.env.NEXTAUTH_SECRET,
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };

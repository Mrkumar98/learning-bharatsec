import NextAuth from 'next-auth';
import Providers from 'next-auth/providers';
import { FirebaseAdapter } from '@next-auth/firebase-adapter';
import { db } from '../../../firebaseConfig';

export default NextAuth({
  providers: [
    Providers.Credentials({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' }
      },
      authorize: async (credentials) => {
        // Add custom authentication logic here
      }
    })
  ],
  adapter: FirebaseAdapter(db),
  callbacks: {
    async signIn(user, account, profile) {
      // Custom sign-in logic
    },
    async session(session, user) {
      session.userId = user.id;
      return session;
    },
    async jwt(token, user) {
      if (user) {
        token.id = user.id;
      }
      return token;
    }
  }
});

import NextAuth from "next-auth"
import CredentialsProvider from "next-auth/providers/credentials";

// Função fictícia para buscar usuário. Substitua com a lógica adequada para o seu banco de dados
const findUser = async (username: string, password: string) => {
  // Aqui é onde você procuraria o usuário na sua base de dados.
  // Este é apenas um exemplo. Certifique-se de usar um método seguro para validar a senha do usuário!
  if(username === 'katherine' && password === '12345Asdfg*') {
    return { id: "1", name: "katherinepastry", email: "katherinepastry@gmail.com" }
  }
  return null;
}

export default NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        username: { label: "Username", type: "text", placeholder: "nome" },
        password: { label: "Password", type: "password" }
      },
      async authorize(credentials, req) {
        const user = await findUser(credentials!.username, credentials!.password)

      
        if (user) {
            return user
          } else {
            return null
          }
        }
      })
    ],
    pages: {
      signIn: '/login',
      signOut: '/auth/signout',
        error: '/auth/error', 
        verifyRequest: '/auth/verify-request', 
      },
      callbacks: {
        session({ session, token, user }) {
          return session // The return type will match the one returned in `useSession()`
        },
        async redirect({ url, baseUrl }) {
          return url.startsWith(baseUrl)
            ? Promise.resolve(url)
            : Promise.resolve(baseUrl + "/RegistrationProduct") // redirecionar para '/RegistrationProduct' após o login bem-sucedido
        },
        
      },
      secret: 'dfgysdfgydsghydfghfydih',
    })
//process.env.JWT_SECRET
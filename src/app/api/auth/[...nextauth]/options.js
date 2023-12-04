import CredentialsProvider from "next-auth/providers/credentials"

require("dotenv").config();

export const options = {
    providers: [
        CredentialsProvider({
            name: 'Credentials',
            credentials: {
                username: {
                    label: 'Username',
                    type: 'text',
                    placeholder: 'username...'
                },
                password: {
                    label: 'Password',
                    type: 'password',
                    placeholder: 'password...'
                }
            },
            async authorize(credentials) {
                const user = { username: 'admin', password: process.env.USER_PASSWORD }

                if (credentials?.username === user.username && credentials?.password === user.password) return user

                return null
            }
        })
    ]
}

import { Inter } from 'next/font/google'

const inter = Inter({
    weight: ['400', '600', '700'],
    subsets: ['latin'],
    variable: '--inter',
})

const Layout = ({ children }) => {
    return <html>
        <head></head>
        <body><div className={`${inter.variable}`}>
            {children}
        </div></body>
    </html>

}

export default Layout
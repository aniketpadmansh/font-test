import { Poppins } from 'next/font/google'

const poppins = Poppins({
    weight: ['300', '400', '500', '600', '700'],
    style: ['normal', 'italic'],
    subsets: ['latin'],
    variable: '--font-poppins',
})

const Index = () => {
    return <div className={`${poppins.variable}`}>Page in App</div>
}

export default Index
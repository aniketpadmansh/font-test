import { Noto_Sans } from 'next/font/google'

const notoSans = Noto_Sans({
    weight: ['300', '400', '500', '600', '700'],
    subsets: ['latin'],
    variable: '--font-noto-sans',
})

const Font = () => {
    return <div className={`${notoSans.variable}`}>Font in Page</div>
}

export default Font
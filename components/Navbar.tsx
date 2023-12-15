import Image from "next/image"
import Link from "next/link"

const navIcons = [
    { src: '/assets/icons/search.svg', alt: 'search' },
    { src: '/assets/icons/black-heart.svg', alt: 'heart' },
    { src: '/assets/icons/user.svg', alt: 'user' },
]

const Navbar = () => {
    return (
        <header style={{ width: '100%' }}>
            <nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', paddingLeft: 24, paddingRight: 24, paddingTop: 16, paddingBottom: 16 }}>
                <Link href='/' style={{ display: 'flex', alignItems: 'center', gap: 4, textDecoration: 'none' }}>
                    <Image src="/assets/icons/logo.svg" width={27} height={27} alt="logo" />
                    <p style={{ fontFamily: 'Space Grotesk, sans-serif', fontSize: 21, color: 'rgb(40 40 40)' }}>
                        Price<span style={{ color: 'rgb(228 48 48)' }}>Tracker</span>
                    </p>
                </Link>

                <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    {navIcons.map((icon) => (
                        <Image key={icon.alt} src={icon.src} alt={icon.alt} width={28} height={28} style={{ objectFit: 'contain', cursor: 'pointer' }} />
                    ))}
                </div>
            </nav>
        </header>
    )
}

export default Navbar
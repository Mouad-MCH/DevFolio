import { Moon } from 'lucide-react';
import Link from 'next/link';

const Navbar = () => {
  return (
    <div className='flex items-center justify-between w-full py-5 px-20 bg-bg-0 border-border-dark border-b-2'>
        <div className='logo'>
            <div>MC</div>
            <h2>Mouad CHARADI</h2>
        </div>

        <nav>
            <ul className="navLink flex items-center gap-5">
                <li><Link href="/">Home</Link></li>
                <li><Link href="/">About</Link></li>
                <li><Link href="/">Portfolio</Link></li>
                <li><Link href="/">Skills</Link></li>
                <li><Link href="/">Contacts</Link></li>
            </ul>
        </nav>

        <div className="flex items-center gap-5">
            <div className="flex items-center justify-center p-3 rounded-full border-border-dark border">
                <Moon />
            </div>
            <button>Download CV</button>
        </div>
    </div>
  )
}

export default Navbar

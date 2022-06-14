import Link from 'next/link'
import Image from 'next/image'

import { useAuthContext } from '../context/auth'

const Navbar = () => {

    const [auth,setAuth]=useAuthContext()

    const logout=()=>{
        localStorage.setItem('id','')
        localStorage.setItem('jwt','')
        setAuth('')
    }
    
    return ( 
        <nav>
            <div className="logo">
                <Image 
                    src='/favicon.ico'
                    width={128/2} 
                    height={128/2}
                    alt='logo'
                />
            </div>
            <Link href='/'><a>Home</a></Link>
            <Link href='/about'><a>About</a></Link>
            {
                auth?
                    <div onClick={logout}>Logout</div>
                    :
                    <Link href='/auth'><a><div>Login/Signup</div></a></Link>
            }
        </nav>
     )
}
export default Navbar;
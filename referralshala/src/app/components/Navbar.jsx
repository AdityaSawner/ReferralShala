import Link from "next/link";
import '../styles/Navbar.css'

export default function Navbar() {
    return (
      <>
      <img src='/AlumniSphere.jpg' ></img>
       <div className="nav-main">
        <div className="nav-icon">
         Referral
        </div>
        <div className="nav-links-container ">
            <Link href="/auth/sign-in" className="nav-link">
              Login
            </Link>
            <Link href="/auth/sign-up" className="nav-link">
              Candidate Sign-up
            </Link>
            <Link href="/auth/sign-up" className="nav-link">
              Employer Sign-up
            </Link>
        </div>
      </div>
      <div>
        Uniting experience with ambition.
        </div>
      </>
      
    );
  }
  
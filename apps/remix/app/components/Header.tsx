import { SignedIn, SignedOut, UserButton } from "@clerk/remix";

import { Link } from "@remix-run/react";

const Header = () => (
  <header className="navbar bg-neutral text-neutral-content shadow-xl rounded-box">
    <div className="flex-none">
      <button className="btn btn-square btn-ghost">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          className="inline-block w-5 h-5 stroke-current"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M4 6h16M4 12h16M4 18h16"
          ></path>
        </svg>
      </button>
    </div>
    <div className="flex-1">
      <a className="btn btn-ghost normal-case text-xl">daisyUI</a>
    </div>
    <div className="flex-none">
      <SignedOut>
        <Link to="/sign-in">Sign in</Link>
      </SignedOut>
      <SignedIn>
        <UserButton userProfileUrl="/user" afterSignOutUrl="/" />
      </SignedIn>
    </div>
  </header>
);

export default Header;

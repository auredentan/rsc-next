import { SignedIn, SignedOut, UserButton } from "@clerk/remix";

import { Link } from "@remix-run/react";
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetDescription,
} from "./Sheet";

const Header = () => (
  <header className="flex items-center h-14 px-6 shadow shadow-slate-400">
    <div className="flex-none">
      <Sheet>
        <SheetTrigger>
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
        </SheetTrigger>
        <SheetContent position="left" size="sm">
          <SheetHeader>
            <SheetTitle>Are you sure absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
    <div className="grow"/>
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

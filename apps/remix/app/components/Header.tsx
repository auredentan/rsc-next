import { useTranslation } from 'react-i18next';

import { SignedIn, SignedOut } from "@clerk/remix";

import { Link } from "@remix-run/react";

import { cn } from "@/utils";

import { Input } from "@/ui/Input";

import { UserNav } from "./UserNav";
import { ModeToggle } from "./Theme/Toggle";

import SignUpButton from './SignUpButton';
import SignInButton from './SignInButton';

const Header = () => {
  let { t } = useTranslation();

  return (
  <header className="border-b">
    <div className="flex h-16 items-center px-4">
      <nav className={cn("flex items-center space-x-4 lg:space-x-6 mx-6")}>
        <Link
          to="/examples/dashboard"
          className="text-sm font-medium transition-colors hover:text-primary"
        >
          Overview
        </Link>
        <Link
          to="/examples/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Customers
        </Link>
        <Link
          to="/examples/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Products
        </Link>
        <Link
          to="/examples/dashboard"
          className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
        >
          Settings
        </Link>
      </nav>
      <div className="ml-auto flex items-center space-x-4">
        <div>
          <Input
            type="search"
            placeholder={`${t('search')}...`}
            className="h-9 md:w-[100px] lg:w-[300px]"
          />
        </div>
        <SignedOut>
          <SignInButton />
          <SignUpButton/>
        </SignedOut>
        <SignedIn>
          <UserNav />
        </SignedIn>
        <ModeToggle />
      </div>
    </div>
  </header>
)}

export default Header;

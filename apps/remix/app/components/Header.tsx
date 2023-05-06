import { useAtom } from "jotai";

import { useTranslation } from "react-i18next";

import { Link } from "@remix-run/react";

import { cn } from "@/utils";

import { Input } from "@/ui/Input";

import { UserNav } from "./UserNav";
import { ModeToggle } from "./Theme/Toggle";
import { SignedIn, SignedOut } from '@clerk/remix';
import { SignInButton } from './SignInButton';
import { Icons } from '@/ui/Icons';
import NavMenu from './NavMenu';

const Header = () => {
  let { t } = useTranslation();

  return (
    <header className="border-b">
      <div className="flex h-14 items-center px-4">
        <nav className={cn("flex items-center space-x-4 lg:space-x-6 mx-6 text-sm font-medium")}>
          <Link
            to="/directory/following"
            className="transition-colors hover:text-primary"
          >
            Following
          </Link>
          <Link
            to="/directory"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Browse
          </Link>
          <Link
            to="/activities"
            className="text-muted-foreground transition-colors hover:text-primary"
          >
            Activities
          </Link>
          <NavMenu  />
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <div>
            <Input
              type="search"
              placeholder={`${t("search")}...`}
              className="h-9 md:w-[100px] lg:w-[300px]"
            />
          </div>
          <SignedOut>
            <SignInButton />
          </SignedOut>
          <SignedIn>
            <UserNav />
          </SignedIn>
          <ModeToggle />
        </div>
      </div>
    </header>
  );
};

export default Header;

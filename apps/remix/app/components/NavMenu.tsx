import { Button } from "@/ui/Button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/ui/DropdownMenu";
import { Icons } from "@/ui/Icons";

export default function NavMenu() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="link">
          <Icons.ellipsis />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>General</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>About</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Advertisers</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Blog</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Developers</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Download Apps</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Gift Cards</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>IGDB</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Jobs</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Loot Cave - Merch Store</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Music on Twitch</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Partners</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Press</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Turbo</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
        <DropdownMenuSeparator />
        <DropdownMenuLabel>Help & Legal</DropdownMenuLabel>
        <DropdownMenuGroup>
          <DropdownMenuItem>
            <span>Accessibility Statement</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Ad Choices</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Community Guidelines</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Cookie Policy</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Help</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Privacy Policy</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Safety Center</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Security</span>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <span>Terms</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

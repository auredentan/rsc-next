import { Form, useNavigation } from "@remix-run/react";

import { Loader2 } from "lucide-react"

import { Button } from "@/ui/Button";
import { Dialog, DialogContent, DialogTrigger } from "@/ui/Dialog";
import { Icons } from "@/ui/Icons";

export function AuthenticationDialog({
  triggerLabel,
}: {
  triggerLabel: string;
}) {
  const navigation = useNavigation();

  const disableFormInteraction =
    navigation.state === "submitting" || navigation.state === "loading";
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline">{triggerLabel}</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <div className="mx-auto flex flex-col justify-center space-y-6 gap-6">
          {/* Github */}
          <span>Connect with ...</span>
          <Form action="/auth/github" method="post">
            <Button
              variant="outline"
              type="submit"
              disabled={disableFormInteraction}
            >
              {navigation.location?.pathname === "/auth/github" && (
                <Loader2 className="mr-2 h-4 w-4 animate-spin" />
              )}
              <Icons.gitHub className="mr-2 h-4 w-4" />
              Github
            </Button>
          </Form>
        </div>
      </DialogContent>
    </Dialog>
  );
}

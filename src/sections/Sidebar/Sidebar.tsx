import { Link } from "react-router-dom";
import { PanelLeft } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import routes from "@/routes";

import { useSidebar } from "./hooks";

export default function Sidebar() {
  const { isOpen, close } = useSidebar();

  return (
    <Sheet open={isOpen} onOpenChange={(open) => !open && close()}>
      <SheetContent side="left" className="w-[250px] pt-10">
        <SheetHeader>
          <SheetTitle>Navigation</SheetTitle>
        </SheetHeader>
        <div className="mt-4 flex flex-col space-y-2">
          {routes
            .filter((route) => route.title)
            .map(({ path, title, icon: Icon }) => (
              <Link
                key={path}
                to={path as string}
                onClick={close}
                className="flex items-center space-x-2 rounded-md p-2 text-sm font-medium hover:bg-accent"
              >
                {Icon ? <Icon /> : <PanelLeft className="h-5 w-5" />}
                <span>{title}</span>
              </Link>
            ))}
        </div>
      </SheetContent>
    </Sheet>
  );
}
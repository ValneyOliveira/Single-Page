import Link from "next/link";
import { Menu } from "lucide-react";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface SidebarProps {
}

const Sidebar: React.FC<SidebarProps> = () => {
    const menuItem = ['Home', 'Feature', 'Community', 'Blog', 'Pricing']

    return (
        <Sheet>
        <SheetTrigger asChild>
            <button type="button" className="mr-5">
                <Menu/>
            </button>
        </SheetTrigger>

        <SheetContent className="w-[330px]">
            <SheetHeader>
                <SheetTitle>Sidebar</SheetTitle>
            </SheetHeader>
            <nav className='flex flex-col gap-y-5 mt-5'>
                    <ul className='flex flex-col gap-x-5 text-black font-medium'>
                        {menuItem.map((item, index) => (
                            <Link href={"#"} className="p-2 hover:bg-zinc-200" key={index}>{menuItem[index]}</Link>
                        ))}
                    </ul>
                    <Link href='#' className='text-black text-center font-thin bg-green-500 hover:bg-green-700 antialiased p-3 mr-5 rounded-sm'>
                        Register Now
                    </Link>
                </nav>
        </SheetContent>
        </Sheet>
    );
};

export default Sidebar;
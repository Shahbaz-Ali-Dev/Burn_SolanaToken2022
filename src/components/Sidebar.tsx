import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Sheet,
    SheetClose,
    SheetContent,
    SheetDescription,
    SheetFooter,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import WalletConnect from "./WalletConnect";
import { Menu } from "lucide-react";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { FC } from "react";
type Props = {
    network: string;
};
const Sidebar: FC<Props> = ({ network }) => {
    return (
        <Sheet modal={false}>
            <SheetTrigger asChild>
                <Button variant="outline">
                    <Menu size={24} />
                </Button>
            </SheetTrigger>
            <SheetContent className="md:hidden w-full md:w-auto">
                <SheetHeader>
                    <SheetTitle>Menu</SheetTitle>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                    <div className="animate-fade-in">
                        <div className="py-4 space-y-4">
                            <Link
                                to="/"
                                className="block text-foreground/80 hover:text-primary transition-colors duration-200"
                            >
                                Home
                            </Link>
                            <Link
                                to="https://solana.com/ru/developers/courses/tokens-and-nfts/token-program-advanced"
                                className="block text-foreground/80 hover:text-primary transition-colors duration-200"
                                target="_blank"
                            >
                                Documentation
                            </Link>
                            <div className="flex items-center justify-between gap-2">
                                {network && (
                                    <p className="uppercase glass-card px-4 py-2 text-primary hover:text-white hover:bg-primary/80 transition-colors duration-200">
                                        {network}
                                    </p>
                                )}
                                <WalletConnect />
                            </div>
                        </div>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    );
};

export default Sidebar;

import { cn } from '../../utils/cn'

export interface IMenuIconProps {
    isOpen: boolean
}

export const MenuIcon: React.FC<IMenuIconProps> = ({ isOpen }) => (
    <div className="relative w-6 h-6 flex items-center justify-center">
        <div className={cn(
            "absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300",
            isOpen ? "rotate-45" : "-translate-y-1.5"
        )} />
        <div className={cn(
            "absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300",
            isOpen ? "opacity-0" : "opacity-100"
        )} />
        <div className={cn(
            "absolute w-5 h-0.5 bg-current rounded-full transition-all duration-300",
            isOpen ? "-rotate-45" : "translate-y-1.5"
        )} />
    </div>
);
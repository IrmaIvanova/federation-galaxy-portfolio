export interface IBaseMenuItem {
    external?: boolean
}

export interface IDeviderMenuItem extends IBaseMenuItem {
    devider: true;
    deviderTitle: string;
}
export interface ILinkMenuItem extends IBaseMenuItem {
    link: string;
    name: string;

}

export type TNavMenuItem = IDeviderMenuItem | ILinkMenuItem

export interface INavMenuProps {
    options: TNavMenuItem[],
    themeBTN?: boolean,
    variant?: "vertical" | "horizontal"
    className?: string;

}


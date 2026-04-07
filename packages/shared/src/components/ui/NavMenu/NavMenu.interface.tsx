export interface INavMenuItem {
    link: string;
    name: string;
    external: boolean;

}


export interface NavMenuProps {
    options: INavMenuItem[],
    themeBTN?: boolean,
    className?: string;

}


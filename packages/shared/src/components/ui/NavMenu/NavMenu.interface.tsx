export interface INavMenuItem {
    link: string;
    name: string;
    external: boolean;

}


export interface INavMenuProps {
    options: INavMenuItem[],
    themeBTN?: boolean,
    className?: string;

}


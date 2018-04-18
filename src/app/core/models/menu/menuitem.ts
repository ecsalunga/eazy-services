import { MenuType } from "./menutype";

export class MenuItem {
    Title: string;
    ImgSrc: string;
    Blurb: string;
    Rating?: number;
    Type: MenuType;
    Selector: string;
}
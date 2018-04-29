import { MenuItem } from './menuitem';
import { MenuMode } from './menumode';

export class MenuGroup {
    Title: string;
    Mode: MenuMode;
    Items: Array<MenuItem>;
}
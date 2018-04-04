import { MenuType } from "./menutype";
import { MenuItem } from "./menuitem";

function MenuConfiguration(): { [key: string]: Array<MenuItem> } {
    let menus: { [key: string]: Array<MenuItem> } = {};
    menus["Home"] =  [
        {
            Title: "Tester Page",
            Blurb: "Go to Utility page to test features blah blah.",
            Type: MenuType.Module,
            Selector: "app-tester"
        },
        {
            Title: "Food Module",
            Blurb: "Go to Food Module to access blah blah blah.",
            Type: MenuType.Menu,
            Selector: "Food"
        },
        {
            Title: "Water Module",
            Blurb: "Go to Water Module to access blah blah blah.",
            Type: MenuType.Menu,
            Selector: "Water"
        }
    ];
    menus["Food"] = [
        {
            Title: "Food Types",
            Blurb: "View food by types.",
            Type: MenuType.Module,
            Selector: "food-type"
        },
        {
            Title: "Food Source",
            Blurb: "View food by source.",
            Type: MenuType.Module,
            Selector: "food-source"
        }
    ];
    menus["Water"] = [
        {
            Title: "Water Types",
            Blurb: "View food by types.",
            Type: MenuType.Module,
            Selector: "food-type"
        },
        {
            Title: "Water Source",
            Blurb: "View food by source.",
            Type: MenuType.Module,
            Selector: "food-source"
        }
    ];
    return menus;
}

export const Menus = MenuConfiguration();
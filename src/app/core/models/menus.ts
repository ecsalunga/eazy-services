import { MenuType } from "./menutype";
import { MenuItem } from "./menuitem";

function MenuConfiguration(): { [key: string]: Array<MenuItem> } {
    let menus: { [key: string]: Array<MenuItem> } = {};
    menus["Home"] =  [
        {
            Title: "Tester Page",
            ImgSrc: "/assets/configuration.png",
            Blurb: "Go to Utility page to test features blah blah.",
            Type: MenuType.Module,
            Selector: "app-tester"
        },
        {
            Title: "Food Module",
            ImgSrc: "/assets/food.png",
            Blurb: "Go to Food Module to access blah blah blah.",
            Type: MenuType.Menu,
            Selector: "Food"
        },
        {
            Title: "Water Module",
            ImgSrc: "/assets/configuration.png",
            Blurb: "Go to Water Module to access blah blah blah.",
            Type: MenuType.Menu,
            Selector: "Water"
        },
        {
            Title: "Settings",
            ImgSrc: "/assets/configuration.png",
            Blurb: "Go to System settings blah blah blah.",
            Type: MenuType.Module,
            Selector: "app-tester"
        }
    ];
    menus["Food"] = [
        {
            Title: "Food Types",
            ImgSrc: "/assets/food.png",
            Blurb: "View food by types.",
            Type: MenuType.Module,
            Selector: "food-type"
        },
        {
            Title: "Food Source",
            ImgSrc: "/assets/food.png",
            Blurb: "View food by source.",
            Type: MenuType.Module,
            Selector: "food-source"
        },
        {
            Title: "Home",
            ImgSrc: "/assets/configuration.png",
            Blurb: "Go to Main menu blah blah.",
            Type: MenuType.Menu,
            Selector: "Home"
        }
    ];
    menus["Water"] = [
        {
            Title: "Water Types",
            ImgSrc: "/assets/configuration.png",
            Blurb: "View food by types.",
            Type: MenuType.Module,
            Selector: "food-type"
        },
        {
            Title: "Water Source",
            ImgSrc: "/assets/configuration.png",
            Blurb: "View food by source.",
            Type: MenuType.Module,
            Selector: "food-source"
        },
        {
            Title: "Home",
            ImgSrc: "/assets/configuration.png",
            Blurb: "Go to Main menu blah blah.",
            Type: MenuType.Menu,
            Selector: "Home"
        }
    ];
    return menus;
}

export const Menus = MenuConfiguration();
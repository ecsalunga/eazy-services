import { MenuType } from "./menutype";
import { MenuItem } from "./menuitem";

function MenuConfiguration(): { [key: string]: Array<MenuItem> } {
    let menus: { [key: string]: Array<MenuItem> } = {};
    menus["Home"] =  [
        {
            Title: "Food Services",
            ImgSrc: "/assets/food.jpg",
            Blurb: "Go to Food Module to access blah blah blah.",
            Type: MenuType.Menu,
            Selector: "Food"
        },
        {
            Title: "Food Admin",
            ImgSrc: "/assets/food.jpg",
            Blurb: "Go to Food administration page blah blah blah.",
            Type: MenuType.Menu,
            Selector: "Food-Admin"
        },
        {
            Title: "Water Module",
            ImgSrc: "/assets/water.jpg",
            Blurb: "Go to Water Module to access blah blah blah.",
            Type: MenuType.Menu,
            Selector: "Water"
        },
        {
            Title: "Settings",
            ImgSrc: "/assets/setting.jpg",
            Blurb: "Go to System settings blah blah blah.",
            Type: MenuType.Module,
            Selector: "app-tester"
        }
    ];
    menus["Food"] = [
        {
            Title: "Food Types",
            ImgSrc: "/assets/menu.jpg",
            Blurb: "View food by types.",
            Type: MenuType.Module,
            Selector: "food-type"
        },
        {
            Title: "Food Source",
            ImgSrc: "/assets/location.jpg",
            Blurb: "View food by source.",
            Type: MenuType.Module,
            Selector: "food-source"
        },
        {
            Title: "Home",
            ImgSrc: "/assets/home.jpg",
            Blurb: "Go to Main menu blah blah.",
            Type: MenuType.Menu,
            Selector: "Home"
        }
    ];
    menus["Food-Admin"] = [
        {
            Title: "Food Sources",
            ImgSrc: "/assets/food.jpg",
            Blurb: "View list of food sources.",
            Type: MenuType.Module,
            Selector: "food-admin-source-list"
        },
        {
            Title: "Food Types",
            ImgSrc: "/assets/food.jpg",
            Blurb: "View list of food types.",
            Type: MenuType.Module,
            Selector: "food-admin-type-list"
        },
        {
            Title: "Home",
            ImgSrc: "/assets/home.jpg",
            Blurb: "Go to Main menu blah blah.",
            Type: MenuType.Menu,
            Selector: "Home"
        }
    ];
    menus["Water"] = [
        {
            Title: "Water Types",
            ImgSrc: "/assets/water.jpg",
            Blurb: "View food by types.",
            Type: MenuType.Module,
            Selector: "food-type"
        },
        {
            Title: "Water Source",
            ImgSrc: "/assets/water.jpg",
            Blurb: "View food by source.",
            Type: MenuType.Module,
            Selector: "food-source"
        },
        {
            Title: "Home",
            ImgSrc: "/assets/home.jpg",
            Blurb: "Go to Main menu blah blah.",
            Type: MenuType.Menu,
            Selector: "Home"
        }
    ];
    return menus;
}

export const Menus = MenuConfiguration();
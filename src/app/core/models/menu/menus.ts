import { MenuType } from "./menutype";
import { MenuItem } from "./menuitem";
import { MenuMode } from './menumode';
import { MenuGroup } from "./menugroup";

function MenuConfiguration(): { [key: string]: MenuGroup } {
    let menus: { [key: string]: MenuGroup } = {};
    menus["Home"] =  {
        Title: "Home",
        Mode: MenuMode.Card,
        Items: [
            {
                Title: "Food",
                ImgSrc: "/assets/food.jpg",
                Blurb: "Go to Food Module to access blah blah blah.",
                Type: MenuType.Menu,
                Selector: "Food"
            },
            {
                Title: "Food Administration",
                ImgSrc: "/assets/food-admin.jpg",
                Blurb: "Go to Food administration page blah blah blah.",
                Type: MenuType.Menu,
                Selector: "Food-Admin"
            },
            {
                Title: "Purchase Orders",
                ImgSrc: "/assets/order.jpg",
                Blurb: "Go to Order Module to access blah blah blah.",
                Type: MenuType.Component,
                Selector: "order-list"
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
                Type: MenuType.Component,
                Selector: "app-tester"
            }
        ]
    };
    menus["Food"] = {
        Title: "Food Services",
        Mode: MenuMode.Card,
        Items: [
            {
                Title: "Food Types",
                ImgSrc: "/assets/menu.jpg",
                Blurb: "View food by types.",
                Type: MenuType.Component,
                Selector: "food-type"
            },
            {
                Title: "Food Source",
                ImgSrc: "/assets/location.jpg",
                Blurb: "View food by source.",
                Type: MenuType.Component,
                Selector: "food-source"
            },
            {
                Title: "Home",
                ImgSrc: "/assets/home.jpg",
                Blurb: "Go to Main menu blah blah.",
                Type: MenuType.Menu,
                Selector: "Home"
            }
        ]
    };
    menus["Food-Admin"] = {
        Title: "Food Administration",
        Mode: MenuMode.Card,
        Items: [
            {
                Title: "Food Types",
                ImgSrc: "/assets/menu.jpg",
                Blurb: "View list of food types.",
                Type: MenuType.Component,
                Selector: "food-admin-type-list"
            },
            {
                Title: "Food Sources",
                ImgSrc: "/assets/location.jpg",
                Blurb: "View list of food sources.",
                Type: MenuType.Component,
                Selector: "food-admin-source-list"
            },
            {
                Title: "Home",
                ImgSrc: "/assets/home.jpg",
                Blurb: "Go to Main menu blah blah.",
                Type: MenuType.Menu,
                Selector: "Home"
            }
        ]
    };
    menus["Water"] = {
        Title: "Water Pending...",
        Mode: MenuMode.Card,
        Items: [
            {
                Title: "Water Types",
                ImgSrc: "/assets/water.jpg",
                Blurb: "View food by types.",
                Type: MenuType.Component,
                Selector: "food-type"
            },
            {
                Title: "Water Source",
                ImgSrc: "/assets/water.jpg",
                Blurb: "View food by source.",
                Type: MenuType.Component,
                Selector: "food-source"
            },
            {
                Title: "Home",
                ImgSrc: "/assets/home.jpg",
                Blurb: "Go to Main menu blah blah.",
                Type: MenuType.Menu,
                Selector: "Home"
            }
        ]
    };
    return menus;
}

export const Menus = MenuConfiguration();
import { MenuType } from "./menutype";

export const Menus = [
    {
        Name: "Home",
        Items: [
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
        ]
    },
    {
        Name: "Food",
        Items: [
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
        ]
    },
    {
        Name: "Water",
        Items: [
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
        ]
    }
];
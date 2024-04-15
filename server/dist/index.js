"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use((0, cors_1.default)());
app.use("/images", express_1.default.static(path_1.default.join(__dirname, "../public/images")));
app.get("/", (req, res) => {
    console.log(path_1.default.join(__dirname, "../public"));
    const foodData = [
        {
            name: "Boilded Egg",
            price: 550,
            text: "Served perfectly cooked with a side of artisanal condiments ",
            image: "/images/egg.png",
            type: "breakfast",
        },
        {
            name: "RAMEN",
            price: 279,
            text:"A flavorful noodle soup that tantalizes your taste buds with crafted toppings.",
            image: "/images/ramen.png",
            type: "lunch",
        },
        {
            name: "GRILLED CHICKEN",
            price: 799,
            text: "Expertly cooked to perfection with a touch of char. Juicy - flavorful - experience.",
            image: "/images/chicken.png",
            type: "dinner",
        },
        {
            name: "CAKE",
            price: 445,
            text: "Indulge in sweetness with our delectable CAKE, a treat that captivates the senses. ",
            image: "/images/cake.png",
            type: "breakfast",
        },
        {
            name: "BURGER",
            price: 199,
            text: "A juicy patty, fresh toppings delivering a wow taste in every bite.",
            image: "/images/burger.png",
            type: "lunch",
        },
        {
            name: "PANCAKE",
            price: 219,
            text: "Start your day on a sweet note,stack of fluffy goodness drizzled with syrup",
            image: "/images/pancake.png",
            type: "dinner",
        },
    ];
    res.json(foodData);
});
app.listen(9000, () => {
    console.log("Server is running on port 9000");
});
//# sourceMappingURL=index.js.map
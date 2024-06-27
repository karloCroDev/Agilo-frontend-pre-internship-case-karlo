//Since next js has already integrated google fonts, I used them instead of fetching them from google fonts
//This exports fonts so that I don't have to import them in every single file (DRY ("Don't repeat yourself")principle
//Also any other font from google can be added here

import { Inter, Caveat } from "next/font/google";

const inter = Inter({ subsets: ["latin"], display: "swap" });
const caveat = Caveat({ subsets: ["latin"], display: "swap" });

export { inter, caveat };

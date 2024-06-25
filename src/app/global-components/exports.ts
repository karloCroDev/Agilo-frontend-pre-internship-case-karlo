import Header from "./Header";
import Footer from "./Footer";
import ScrollToTopBtn from "./ScrollToTopBtn";
import Card from "../(home)/home-components/Card";
export { Header, Footer, ScrollToTopBtn, Card };

/*
    I think this is more readable than exporting each components specialy (which might be the best solution):
         export { default as Header } from './Header';  etc.
*/

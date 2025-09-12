
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import "./globals.css";

export const metadata = {
    title: "Tripass - Explore o Mundo",
    description: "Projeto de países",
    icons: {
        icon: "/icons/globo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body>
                <Header/>
                {children}
                <Footer/>
            </body>
        </html>
    );
}

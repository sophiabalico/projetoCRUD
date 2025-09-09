import Header from "./components/Header/Header";
import "./globals.css";

export const metadata = {
    title: "Countries",
    description: "Projeto de países",
    icons: {
        icon: "/icons/globo.png",
    },
};

export default function RootLayout({ children }) {
    return (
        <html>
            <body> <Header/>{children}</body>
        </html>
    );
}

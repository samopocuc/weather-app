import './App.css';
import Menu from "./Components/Menu/Menu";
import Logo from "./Components/Logo/Logo";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
export function App() {

    const logo = new URL('./assets/logo.svg', import.meta.url);
    const love = new URL('./assets/love.svg', import.meta.url);

    return (
        <>
            <Header>
                <Logo title="Weather by VicBox" url={logo} />
                <Menu items={[
                    { name: "Github", link: "/" },
                    { name: "About", link: "#about"}
                ]}/>
            </Header>
            <Footer>
                <span>Made with by <img src={love} alt="love"/>Victor Alvarado</span>
            </Footer>
        </>
    );
}
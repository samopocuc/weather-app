import './App.css';
import Menu from "./Components/Menu/Menu";
import Logo from "./Components/Logo/Logo";
import Header from "./Components/Header/Header";
export function App() {

    const logo = new URL('./assets/logo.svg', import.meta.url);

    return (
        <>
            <Header>
                <Logo title="Weather by VicBox" url={logo} />
                <Menu items={[
                    { name: "Github", link: "/" },
                    { name: "About", link: "#about"}
                ]}/>
            </Header>
        </>
    );
}
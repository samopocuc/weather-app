import './App.css';
import Menu from "./Components/Menu/Menu";
import Logo from "./Components/Logo/Logo";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Wrapper from "./Components/Card/Wrapper/Wrapper";
import Card from "./Components/Card/Card";
import Weather from "./Components/Weather/Weather";

export function App() {

    const logo = new URL('./assets/logo.svg', import.meta.url);
    const love = new URL('./assets/love.svg', import.meta.url);
    const add = new URL('./assets/add.svg', import.meta.url);

    return (
        <>
            <Header>
                <Logo title="Weather by VicBox" url={logo} />
                <Menu items={[
                    { name: "Github", link: "/" },
                    { name: "About", link: "#about"}
                ]}/>
            </Header>
            <Wrapper>
                <Card>
                    <Weather/>
                </Card>
                <Card>
                    <img src={add} alt="add"/>
                    <p>Add New Location</p>
                </Card>
            </Wrapper>
            <Footer>
                <span>Made with by <img src={love} alt="love"/>Victor Alvarado</span>
            </Footer>
        </>
    );
}
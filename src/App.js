import './App.css';
import Menu from "./Components/Menu/Menu";

export function App() {
    return (
        <>
            <h1>Parcel React App</h1>
            <Menu items={[
                { name: "Github", link: "/" },
                { name: "About", link: "#about"}
            ]}/>
            <p>Edit <code>src/App.tsx</code> to get started!</p>
        </>
    );
}
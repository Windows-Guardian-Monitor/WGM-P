// App.jsx
import NavBar from "./components/NavBar";
import MainContainer from "./components/MainContainer";
import {BrowserRouter} from "react-router-dom";
import Footer from "./components/Footer";
import {ThemeProvider} from "styled-components";
import {useState, useEffect} from "react";
import {lightTheme, darkTheme} from "./theme";
import {Father} from "./app";

export default function App() {
	// Carregar o tema inicial do localStorage
	const [isDarkTheme, setIsDarkTheme] = useState(() => {
		const savedTheme = localStorage.getItem("theme");
		return savedTheme === "dark";
	});

	const toggleTheme = () => {
		const newTheme = !isDarkTheme;
		setIsDarkTheme(newTheme);
		// Salvar o novo tema no localStorage
		localStorage.setItem("theme", newTheme ? "dark" : "light");
	};

	return (
		<ThemeProvider theme={isDarkTheme ? darkTheme : lightTheme}>
			<BrowserRouter>
				<Father>
					<NavBar toggleTheme={toggleTheme} />
					<MainContainer />
					<Footer />
				</Father>
			</BrowserRouter>
		</ThemeProvider>
	);
}

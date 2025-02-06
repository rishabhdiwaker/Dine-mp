import { ThemeProvider } from "@emotion/react";
import "./App.css";
import { Navbar } from "./component/Navbar/Navbar";
import {DarkTheme} from "./Theme/DarkTheme";
import { CssBaseline} from "@mui/material";
import Home from "./component/Home/Home";
import RestaurantDetails from "./component/Restaurant/RestaurantDetails";
import Cart from "./component/Cart/Cart";
import Profile from "./component/Profile/Profile";
import CustomerRoute from "./Routers/CustomerRoute";

function App() {
  return (
    <>
    <ThemeProvider theme = {DarkTheme}>
    <CssBaseline />
    {/* <Navbar /> */}
    {/* <Home /> */}
    {/* <RestaurantDetails /> */}
    {/* <Cart/> */}
    {/* <Profile /> */}
    <CustomerRoute />

    </ThemeProvider>
    </>
  );
}

export default App;

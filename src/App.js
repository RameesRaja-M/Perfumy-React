import Navbar from  "./components/Navbar"
import Search from "./components/Search"
import Product from "./components/Product"
import About from "./components/About"
import Footer from "./components/Footer"

function App() {
    return (
        <div>
            <Navbar></Navbar>
            <Search></Search>
            <Product></Product>
            <About></About>
            <Footer></Footer>
        </div>
    )
}

export default App
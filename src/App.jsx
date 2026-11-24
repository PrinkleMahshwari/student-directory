import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Products from './Pages/Products'
function App() {
  return (
    <div className="d-flex flex-column min-vh-100">
      <Navbar />
      <main className="flex-grow-1">
        {/* Main content goes here */}
        <Products />
      </main>
      <Footer />
    </div>
  )
}

export default App

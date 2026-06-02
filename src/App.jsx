import Navbar from './components/Navbar/Navbar'
import Dashboard from './components/Dashboard/Dashboard'
import Footer from './components/Footer/Footer'
import './App.css'

function App() {
  return (
    <div className="app">
      <Navbar />
      <main className="main-content">
        <Dashboard />
      </main>
      <Footer />
    </div>
  )
}

export default App

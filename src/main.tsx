import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter, Route, Routes } from 'react-router'
import './index.css'
import Home from './pages/Home.tsx'
import ProtectedSecondary from './pages/Protected.tsx'
import Navbar from './components/Navbar.tsx'
import Footer from './components/Footer.tsx'
createRoot(document.getElementById('root')!).render(
	<StrictMode>
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/protected" element={<ProtectedSecondary />} />
			</Routes>
			<Footer />
		</BrowserRouter>
	</StrictMode>
)

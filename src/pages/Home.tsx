import { Link } from 'react-router'

function Home() {
	return (
		<>
			<div className="hero bg-base-200 min-h-screen">
				<div className="hero-content text-center">
					<div className="max-w-md">
						<h1 className="text-5xl font-bold">Simple Starter</h1>
						<p className="py-6">
							Hello there! This is a simple starter project for my next project.
						</p>
						<Link to="/protected" className="btn btn-primary">
							Get Started
						</Link>
					</div>
				</div>
			</div>
		</>
	)
}

export default Home

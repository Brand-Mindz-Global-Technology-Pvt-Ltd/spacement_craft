import { Link } from "react-router-dom";

interface PlaceholderPageProps {
  title: string;
  description?: string;
}

const Header = () => (
  <header className="absolute top-0 left-0 w-full z-50 py-6">
    <div className="container mx-auto px-6 flex items-center justify-between">
      <Link to="/">
        <img 
          src="https://api.builder.io/api/v1/image/assets/TEMP/31a29194a779ffe11b44915573750ef951ed17b6?width=246" 
          alt="SpacemanCraft Logo" 
          className="w-[123px] h-[84px]"
        />
      </Link>
      <nav className="hidden lg:flex items-center gap-12">
        <Link to="/" className="text-white font-teachers text-lg hover:font-bold transition-all">Home</Link>
        <Link to="/product" className="text-white font-teachers text-lg hover:font-bold transition-all">Product</Link>
        <Link to="/solution" className="text-white font-teachers text-lg hover:font-bold transition-all">Solution</Link>
        <Link to="/mission" className="text-white font-teachers text-lg hover:font-bold transition-all">Mission</Link>
        <Link to="/vision" className="text-white font-teachers text-lg hover:font-bold transition-all">Vision</Link>
        <Link to="/about" className="text-white font-teachers text-lg hover:font-bold transition-all">About us</Link>
        <Link to="/career" className="text-white font-teachers text-lg hover:font-bold transition-all">Career</Link>
      </nav>
    </div>
  </header>
);

export default function PlaceholderPage({ title, description }: PlaceholderPageProps) {
  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-[#0BFFD3] opacity-20 blur-[300px]"></div>
      </div>
      
      <Header />
      
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">
        <h1 className="font-reem text-6xl md:text-7xl font-normal text-white uppercase mb-8">
          {title}
        </h1>
        {description && (
          <p className="font-inter text-xl text-white max-w-3xl mb-12 leading-8">
            {description}
          </p>
        )}
        <div className="bg-gray-900/50 border border-gray-700 rounded-2xl p-8 backdrop-blur-sm max-w-md">
          <h2 className="font-reem text-2xl text-white mb-4">Coming Soon</h2>
          <p className="font-inter text-gray-300 mb-6">
            This page is currently under development. Continue exploring our main features or return to the homepage.
          </p>
          <Link 
            to="/" 
            className="inline-block border border-white px-6 py-3 rounded-[5px] text-white font-inter text-lg hover:bg-white hover:text-black transition-all"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

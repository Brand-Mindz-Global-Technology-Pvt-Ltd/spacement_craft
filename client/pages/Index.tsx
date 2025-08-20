// import { useState } from "react";
// import { Link } from "react-router-dom";

// const ChevronDownIcon = () => (
//   <svg width="67" height="67" viewBox="0 0 67 67" fill="none" xmlns="http://www.w3.org/2000/svg">
//     <path d="M56.7071 31.4705C56.9736 31.2187 57.2872 31.0218 57.6298 30.8911C57.9724 30.7604 58.3374 30.6984 58.704 30.7088C59.0705 30.7192 59.4314 30.8017 59.7661 30.9515C60.1008 31.1014 60.4027 31.3157 60.6545 31.5822C60.9064 31.8487 61.1033 32.1622 61.234 32.5049C61.3647 32.8475 61.4266 33.2125 61.4162 33.579C61.4059 33.9456 61.3234 34.3065 61.1736 34.6412C61.0237 34.9759 60.8094 35.2777 60.5429 35.5296L35.4179 59.2588C34.8995 59.7488 34.2133 60.0219 33.5 60.0219C32.7867 60.0219 32.1004 59.7488 31.5821 59.2588L6.45433 35.5296C6.18197 35.2794 5.96204 34.9776 5.80731 34.6417C5.65259 34.3058 5.56615 33.9425 5.55302 33.5729C5.53989 33.2033 5.60033 32.8347 5.73082 32.4887C5.86132 32.1426 6.05928 31.826 6.31319 31.5571C6.5671 31.2882 6.87192 31.0724 7.20993 30.9223C7.54793 30.7722 7.91239 30.6908 8.28214 30.6827C8.65189 30.6747 9.01955 30.7402 9.36377 30.8754C9.70799 31.0106 10.0219 31.2129 10.2873 31.4705L33.5 53.3907L56.7071 31.4705Z" fill="white"/>
//   </svg>
// );

// const Header = () => {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);

//   return (
//     <header className="absolute top-0 left-0 w-full z-50 py-6">
//       <div className="container mx-auto px-6 flex items-center justify-between">
//         <Link to="/">
//           <img
//             src="https://api.builder.io/api/v1/image/assets/TEMP/31a29194a779ffe11b44915573750ef951ed17b6?width=246"
//             alt="SpacemanCraft Logo"
//             className="w-[123px] h-[84px]"
//           />
//         </Link>

//         {/* Desktop Navigation */}
//         <nav className="hidden lg:flex items-center gap-12">
//           <Link to="/" className="text-white font-teachers text-lg font-bold">Home</Link>
//           <Link to="/product" className="text-white font-teachers text-lg hover:font-bold transition-all">Product</Link>
//           <Link to="/solution" className="text-white font-teachers text-lg hover:font-bold transition-all">Solution</Link>
//           <Link to="/mission" className="text-white font-teachers text-lg hover:font-bold transition-all">Mission</Link>
//           <Link to="/vision" className="text-white font-teachers text-lg hover:font-bold transition-all">Vision</Link>
//           <Link to="/about" className="text-white font-teachers text-lg hover:font-bold transition-all">About us</Link>
//           <Link to="/career" className="text-white font-teachers text-lg hover:font-bold transition-all">Career</Link>
//         </nav>

//         {/* Mobile Menu Button */}
//         <button
//           className="lg:hidden text-white p-2"
//           onClick={() => setIsMenuOpen(!isMenuOpen)}
//         >
//           <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
//             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d={isMenuOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
//           </svg>
//         </button>
//       </div>

//       {/* Mobile Navigation */}
//       {isMenuOpen && (
//         <div className="lg:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-sm">
//           <nav className="container mx-auto px-6 py-6 flex flex-col gap-4">
//             <Link to="/" className="text-white font-teachers text-lg font-bold" onClick={() => setIsMenuOpen(false)}>Home</Link>
//             <Link to="/product" className="text-white font-teachers text-lg hover:font-bold transition-all" onClick={() => setIsMenuOpen(false)}>Product</Link>
//             <Link to="/solution" className="text-white font-teachers text-lg hover:font-bold transition-all" onClick={() => setIsMenuOpen(false)}>Solution</Link>
//             <Link to="/mission" className="text-white font-teachers text-lg hover:font-bold transition-all" onClick={() => setIsMenuOpen(false)}>Mission</Link>
//             <Link to="/vision" className="text-white font-teachers text-lg hover:font-bold transition-all" onClick={() => setIsMenuOpen(false)}>Vision</Link>
//             <Link to="/about" className="text-white font-teachers text-lg hover:font-bold transition-all" onClick={() => setIsMenuOpen(false)}>About us</Link>
//             <Link to="/career" className="text-white font-teachers text-lg hover:font-bold transition-all" onClick={() => setIsMenuOpen(false)}>Career</Link>
//           </nav>
//         </div>
//       )}
//     </header>
//   );
// };

// const HeroSection = () => (
//   <section className="relative h-screen bg-black overflow-hidden">
//     <div className="absolute inset-0">
//       <div className="absolute top-[528px] left-[193px] w-[1544px] h-[1534px] transform rotate-90">
//         <img 
//           src="https://api.builder.io/api/v1/image/assets/TEMP/92b166596dc9a5a0f6529662d0b3b035a8623c06?width=4019" 
//           alt="Earth from space" 
//           className="w-[2010px] h-[2010px] absolute -left-[185px] -top-[314px] transform rotate-90"
//         />
//       </div>
//     </div>
    
//     <Header />
    
//     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//       <h1 className="font-reem text-6xl md:text-7xl lg:text-[100px] font-normal text-white uppercase leading-[85.4px] max-w-6xl mb-8">
//         Revolutionizing Orbits
//       </h1>
//       <p className="font-inter text-lg md:text-xl text-white max-w-4xl mb-12 leading-8">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
//       </p>
//       <button className="border border-white px-6 py-4 rounded-[5px] text-white font-inter text-lg hover:bg-white hover:text-black transition-all">
//         Discover Our Thruster
//       </button>
//     </div>
    
//     <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
//       <ChevronDownIcon />
//     </div>
//   </section>
// );

// const OurProductSection = () => (
//   <section className="relative h-screen bg-[#02060F] overflow-hidden">
//     <div className="absolute inset-0">
//       <img 
//         src="https://api.builder.io/api/v1/image/assets/TEMP/504dc18339c84a27ca8f1e26e9d75665455dcf98?width=4017" 
//         alt="Spaceman Craft Orbiting Earth" 
//         className="w-[2009px] h-[1339px] absolute -left-11 -top-40"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-[492px]"></div>
//       <div className="absolute inset-0 bg-black opacity-20"></div>
//     </div>
    
//     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//       <h2 className="font-reem text-5xl md:text-7xl font-normal text-white uppercase leading-[132.4px] tracking-[2px] mb-6">
//         Our Product
//       </h2>
//       <p className="font-inter text-xl md:text-2xl text-white mb-8">
//         " Powering the Future From the Moon "
//       </p>
//       <p className="font-inter text-lg md:text-xl text-white max-w-4xl leading-7">
//         SpacemanCraft is on a mission to build the first-ever lunar data center—reshaping how the world thinks about infrastructure, connectivity, and the cosmos. Welcome to the future of data, built in space.
//       </p>
//     </div>
//   </section>
// );

// const VideoObservationSection = () => (
//   <section className="relative bg-[#030712] py-16 overflow-hidden">
//     <div className="absolute inset-0">
//       <img 
//         src="https://api.builder.io/api/v1/image/assets/TEMP/b8b9acf6016a95d32435be71013b40ab7f911b8c?width=3760" 
//         alt="Star Animation" 
//         className="w-[1880px] h-[1354px] absolute left-5 -top-[199px]"
//       />
//       <div className="absolute inset-0 bg-black opacity-20"></div>
//       <div className="absolute left-[196px] top-[275px] w-[531px] h-[513px] rounded-full bg-[#0BFFD3] opacity-30 blur-[200px]"></div>
//     </div>
    
//     <div className="relative z-10 container mx-auto px-6">
//       <div className="text-center mb-16">
//         <h2 className="font-reem text-5xl md:text-7xl font-normal text-white uppercase leading-12 mb-6">
//           Video based earth Observation
//         </h2>
//         <p className="font-inter text-xl text-white max-w-6xl mx-auto">
//           Break barriers in space. Unlock reliable, sustainable satellite operations.
//         </p>
//         <button className="mt-8 border border-yellow-500/30 px-8 py-4 rounded-lg text-white font-inter text-lg hover:bg-yellow-500/10 transition-all">
//           Explore Full Archive
//         </button>
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
//         <div className="bg-gray-700/50 border border-[#FEC053] rounded-2xl p-6 backdrop-blur-sm shadow-lg">
//           <div className="bg-white rounded-lg mb-6 h-64 overflow-hidden">
//             <img 
//               src="https://api.builder.io/api/v1/image/assets/TEMP/44d47a5d1658608c03887f3ffd188776125c7cf4?width=1051" 
//               alt="Hyperspectral vision" 
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h3 className="font-reem text-2xl text-white mb-4">Hyperspectral vision</h3>
//           <p className="font-inter text-white mb-6 leading-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.
//           </p>
//           <button className="bg-gradient-to-r from-[#0BFFD3] to-[#3070DE] px-6 py-3 rounded-lg text-white font-inter border border-yellow-500/30">
//             View Details
//           </button>
//         </div>
        
//         <div className="bg-black/60 border border-yellow-500/10 rounded-2xl p-6 backdrop-blur-sm">
//           <div className="bg-white rounded-lg mb-6 h-64 overflow-hidden">
//             <img 
//               src="https://api.builder.io/api/v1/image/assets/TEMP/3f1e84217d78a591e5fe172b0a9b8d3029537341?width=1009" 
//               alt="Defence surveillance" 
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h3 className="font-reem text-2xl text-white mb-4">Defence surveillance</h3>
//           <p className="font-inter text-gray-300 mb-6 leading-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.
//           </p>
//           <button className="border border-yellow-500/30 px-6 py-3 rounded-lg text-white font-inter">
//             View Details
//           </button>
//         </div>
        
//         <div className="bg-black/60 border border-yellow-500/10 rounded-2xl p-6 backdrop-blur-sm">
//           <div className="bg-white rounded-lg mb-6 h-64 overflow-hidden">
//             <img 
//               src="https://api.builder.io/api/v1/image/assets/TEMP/46faf5a2fa5b4c6392659eaf48c4ad8540804c04?width=978" 
//               alt="Ocean net" 
//               className="w-full h-full object-cover"
//             />
//           </div>
//           <h3 className="font-reem text-2xl text-white mb-4">ocean net</h3>
//           <p className="font-inter text-gray-300 mb-6 leading-6">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra.
//           </p>
//           <button className="border border-yellow-500/30 px-6 py-3 rounded-lg text-white font-inter">
//             View Details
//           </button>
//         </div>
//       </div>
//     </div>
//   </section>
// );

// const OurVisionSection = () => (
//   <section className="relative h-screen bg-gradient-to-b from-black to-transparent overflow-hidden">
//     <div className="absolute inset-0">
//       <img 
//         src="https://api.builder.io/api/v1/image/assets/TEMP/e16336144b5be42f508087ff833c42d7331678c6?width=3836" 
//         alt="Satellite orbit with planet earth" 
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-[629px]"></div>
//       <div className="absolute inset-0 bg-black opacity-20"></div>
//     </div>
    
//     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//       <h2 className="font-reem text-5xl md:text-7xl font-normal text-white uppercase leading-[132.4px] tracking-[2px] mb-8">
//         Our Vision
//       </h2>
//       <p className="font-inter text-xl text-white max-w-3xl leading-7">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//     </div>
//   </section>
// );

// const GoingToMoonSection = () => (
//   <section 
//     className="relative h-screen bg-black overflow-hidden"
//     style={{
//       backgroundImage: `url('https://api.builder.io/api/v1/image/assets/TEMP/41e2bccf4fa91132dcdbe4e3f61805e0504a7880?width=3840')`,
//       backgroundSize: 'cover',
//       backgroundPosition: 'center'
//     }}
//   >
//     <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-[676px]"></div>
    
//     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//       <h2 className="font-reem text-5xl md:text-7xl font-normal text-white uppercase leading-12 mb-8">
//         Going to the Moon
//       </h2>
//       <p className="font-inter text-xl text-white max-w-3xl mb-8 leading-7">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//       <button className="border border-white px-6 py-3 rounded-[5px] text-white font-inter text-xl hover:bg-white hover:text-black transition-all">
//         Explore Now
//       </button>
//     </div>
//   </section>
// );

// const DataCenterSection = () => (
//   <section className="relative h-screen bg-black overflow-hidden">
//     <div className="absolute inset-0">
//       <img 
//         src="https://api.builder.io/api/v1/image/assets/TEMP/010643e734fa23509dbd959cc526ed670b6df7d6?width=4364" 
//         alt="Data Center on Moon" 
//         className="w-[2182px] h-[1411px] absolute -left-[131px] top-1"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-[492px]"></div>
//     </div>
    
//     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//       <h2 className="font-reem text-5xl md:text-7xl font-normal text-white uppercase leading-12 mb-8">
//         Data Center on Moon
//       </h2>
//       <p className="font-inter text-xl text-white max-w-3xl mb-8 leading-7">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//       <button className="border border-white px-6 py-3 rounded-[5px] text-white font-inter text-xl hover:bg-white hover:text-black transition-all">
//         Explore Now
//       </button>
//     </div>
//   </section>
// );

// const SpaceTourismSection = () => (
//   <section className="relative h-screen bg-black overflow-hidden">
//     <div className="absolute inset-0">
//       <img 
//         src="https://api.builder.io/api/v1/image/assets/TEMP/066de53380b7223aa5f5f0f42acf5cf9ce949889?width=3840" 
//         alt="Space Tourism" 
//         className="w-full h-full object-cover"
//       />
//       <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent h-[492px]"></div>
//     </div>
    
//     <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-6">
//       <h2 className="font-reem text-5xl md:text-7xl font-normal text-white uppercase leading-12 mb-8">
//         Space Tourism
//       </h2>
//       <p className="font-inter text-xl text-white max-w-3xl mb-8 leading-7">
//         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//       </p>
//       <button className="border border-white px-6 py-3 rounded-[5px] text-white font-inter text-xl hover:bg-white hover:text-black transition-all">
//         Explore Now
//       </button>
//     </div>
    
//     <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
//       <ChevronDownIcon />
//     </div>
//   </section>
// );

// const BlogsSection = () => (
//   <section className="relative bg-black py-24 overflow-hidden">
//     <div className="absolute left-[192px] top-[217px] w-[717px] h-[691px] rounded-full bg-[#0BFFD3] opacity-30 blur-[200px]"></div>
    
//     <div className="relative z-10 container mx-auto px-6">
//       <div className="text-center mb-16">
//         <h2 className="font-reem text-5xl md:text-7xl font-normal text-white capitalize leading-12 mb-8">
//           The blogs
//         </h2>
//         <p className="font-inter text-xl text-gray-300 max-w-4xl mx-auto leading-7">
//           A blog is like your brand's personal journal — but online, public, and packed with valuable content that educates, inspires, or connects with your audience.
//         </p>
//       </div>
      
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
//         <div className="bg-gray-700/50 border-2 border-[#FEC053] rounded-2xl overflow-hidden backdrop-blur-sm">
//           <div className="h-80 overflow-hidden">
//             <img 
//               src="https://api.builder.io/api/v1/image/assets/TEMP/8d131cf968ba9d25f16ec41d57b7bf0809d4b910?width=1420" 
//               alt="Total Lunar Eclipse Gala" 
//               className="w-full h-full object-cover"
//             />
//             <div className="absolute top-4 right-4 bg-gray-600/80 px-3 py-1 rounded-full">
//               <span className="text-white text-sm">Featured Event</span>
//             </div>
//           </div>
//           <div className="p-6">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="font-reem text-2xl text-white">Total Lunar Eclipse Gala</h3>
//               <div className="text-right">
//                 <p className="text-gray-400 text-sm">Date</p>
//                 <p className="text-white">October 14, 2025</p>
//               </div>
//             </div>
//             <p className="font-inter text-gray-300 leading-6 mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Risus commodo viverra maecenas accumsan lacus vel facilisis.
//             </p>
//             <button className="bg-gradient-to-r from-[#0DF7D4] to-[#2C7BDC] px-6 py-3 rounded-lg text-white font-inter border border-yellow-500/30">
//               Explore more
//             </button>
//           </div>
//         </div>
        
//         <div className="space-y-8">
//           <div className="bg-black/60 border border-yellow-500/10 rounded-2xl p-6 backdrop-blur-sm">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="font-reem text-2xl text-white">Total Lunar Eclipse Gala</h3>
//               <div className="text-right">
//                 <p className="text-gray-400 text-sm">Date</p>
//                 <p className="text-white">May 22-25, 2025</p>
//               </div>
//             </div>
//             <p className="font-inter text-gray-300 leading-6 mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <button className="border border-yellow-500/30 px-6 py-3 rounded-lg text-gray-200 font-inter">
//               Read
//             </button>
//           </div>
          
//           <div className="bg-black/60 border border-yellow-500/10 rounded-2xl p-6 backdrop-blur-sm">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="font-reem text-2xl text-white">Total Lunar Eclipse Gala</h3>
//               <div className="text-right">
//                 <p className="text-gray-400 text-sm">Date</p>
//                 <p className="text-white">August 11-13, 2025</p>
//               </div>
//             </div>
//             <p className="font-inter text-gray-300 leading-6 mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <button className="border border-yellow-500/30 px-6 py-3 rounded-lg text-gray-200 font-inter">
//               Read
//             </button>
//           </div>
          
//           <div className="bg-black/60 border border-yellow-500/10 rounded-2xl p-6 backdrop-blur-sm">
//             <div className="flex justify-between items-start mb-4">
//               <h3 className="font-reem text-2xl text-white">Total Lunar Eclipse Gala</h3>
//               <div className="text-right">
//                 <p className="text-gray-400 text-sm">Date</p>
//                 <p className="text-white">September 5, 2025</p>
//               </div>
//             </div>
//             <p className="font-inter text-gray-300 leading-6 mb-6">
//               Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
//             </p>
//             <button className="border border-yellow-500/30 px-6 py-3 rounded-lg text-gray-200 font-inter">
//               Read
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
    
//     <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
//       <ChevronDownIcon />
//     </div>
//   </section>
// );

// const AboutSection = () => (
//   <section className="relative bg-black overflow-hidden">
//     <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
//       <div className="relative">
//         <img 
//           src="https://api.builder.io/api/v1/image/assets/TEMP/a47976fc9a4308ff0437dc1b586d21fd4030eb56?width=1782" 
//           alt="Spaceman" 
//           className="w-full h-full object-cover"
//         />
//       </div>
      
//       <div className="flex items-center justify-center p-12 lg:p-24">
//         <div className="max-w-2xl">
//           <h2 className="font-reem text-5xl md:text-7xl font-normal text-white leading-[57.6px] tracking-[-2px] mb-8">
//             About Spaceman Craft
//           </h2>
//           <p className="font-inter text-xl font-bold text-white mb-6">
//             "Smarter Thrusters. Longer Missions. Lower Costs"
//           </p>
//           <p className="font-inter text-xl text-white leading-normal mb-12 text-justify">
//             International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically. International-based deep-tech rebel startup, founded in 2022, focused on building high-efficiency electric propulsion systems. Our mission? Help satellites travel farther, operate longer, and reduce space mission costs dramatically.
//           </p>
//           <button className="border border-white px-6 py-3 rounded-[5px] text-white font-inter text-xl hover:bg-white hover:text-black transition-all">
//             Explore Now
//           </button>
//         </div>
//       </div>
//     </div>
    
//     <div className="absolute bottom-24 left-1/2 transform -translate-x-1/2">
//       <ChevronDownIcon />
//     </div>
//   </section>
// );

// const Footer = () => (
//   <footer className="relative">
//     <img 
//       src="https://api.builder.io/api/v1/image/assets/TEMP/1b7bb8f74606e2f7fece88d857dfebe5a9906f99?width=3840" 
//       alt="Footer" 
//       className="w-full h-auto"
//     />
//   </footer>
// );

// export default function Index() {
//   return (
//     <div className="min-h-screen bg-black">
//       <HeroSection />
//       <OurProductSection />
//       <VideoObservationSection />
//       <OurVisionSection />
//       <GoingToMoonSection />
//       <DataCenterSection />
//       <SpaceTourismSection />
//       <BlogsSection />
//       <AboutSection />
//       <Footer />
//     </div>
//   );
// }

import React from 'react';

// Import all the sections of your page
import { HeroSection } from '../components/HeroSection';


// This is the main component for your "/" route
const LandingPage = () => {
  return (
    <div className="min-h-screen bg-black">
      
      <HeroSection />
     
    </div>
  );
};

export default LandingPage;
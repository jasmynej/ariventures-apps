import './App.css'
import Header from "./components/Header.tsx";
import {useNavigate} from "react-router";
import {ArrowDownIcon} from "@heroicons/react/24/outline";
function App() {
    const navigate = useNavigate();
  return (
   <div className="w-screen h-screen">
       <Header/>
       <div className=" relative w-screen h-2/3 bg-[url('./assets/home-bg.jpeg')] bg-cover bg-center">
            <div className="absolute inset-0 bg-desert-sand-600/60 z-0"></div>
           <div className="relative z-10 p-8 flex h-full items-center">
                <div>
                    <h1 className="text-5xl font-semibold text-desert-sand-200">Welcome to Ariventures: Apps</h1>
                    <p className="text-2xl font-light text-desert-sand-200">Travel application suite, from visas to wishlists</p>
                    <div className="flex items-center text-xl text-desert-sand-200"><ArrowDownIcon className="w-12 my-2 text-desert-sand-200"/> See More </div>
                </div>
               <div>

               </div>

           </div>
       </div>
       <div className="w-screen h-2/4 flex">
           <div className="w-1/3 h-full bg-champagne-pink-500 flex flex-col items-center justify-center text-center p-2">
                <h2 className="text-4xl m-5">Visa Checker</h2>
                <p className="text-2xl font-thin">Effortlessly check visa requirements before you travel.</p>
                <button
                    className="text-xl
                    bg-coral-pink-500
                    p-2 m-5 w-2/3
                    hover:bg-coral-pink-600
                    transition ease-in duration-100"
                    onClick={() => navigate("/visa-checker")}>
                    Try It
                </button>
            </div>
           <div className="w-1/3 h-full bg-champagne-pink-300 flex flex-col items-center justify-center text-center p-2">
                <h2 className="text-4xl m-5">Destination Quick Facts</h2>
                <p className="text-2xl font-thin"> Learn about new countries/cities all around the world!</p>
               <button className="text-xl
               bg-coral-pink-500
               p-2 m-5 w-2/3
               hover:bg-coral-pink-600
               transition ease-in duration-100">Try It</button>
           </div>
           <div className="w-1/3 h-full bg-champagne-pink-100 flex flex-col items-center justify-center text-center p-2">
               <h2 className="text-4xl m-5">Travel Inspo Tracker</h2>
               <p className="text-2xl font-thin">Track All the places you want to vist, or already visited!</p>
               <button className="text-xl
               bg-coral-pink-500
               p-2 m-5 w-2/3
               hover:bg-coral-pink-600
               transition ease-in duration-100">Try It</button>
           </div>
       </div>
   </div>
  )
}

export default App

import Image from "next/image"
import { Button } from "@/components/atoms"

export const ContainerHeader = () => {
  return (
    <>
      {/* Top Orange Banner */}
      <div className="bg-yellow-500 text-black text-sm py-2 px-4 text-center">
        <span className="font-medium flex justify-between w-full">
          <div>100 % Pauschalpreise</div>  
          <div>Sicher zahlen mit PayPal & Kreditkarte</div> 
          <div>Was darf rein bei Bauschutt Recyclingfähig</div>
        </span>
      </div>
      
      {/* Main Header */}
      <header className="bg-slate-800 text-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between ">
            {/* Logo */}
            <div className="flex items-center">
              <Image
                src="/logov1.png"
                width={100}
                height={68}
                alt="Lurentus Container Shop"
                className="mr-1 aspect-video"
              />
              <div>
                <h1 className=" font-extrabold text-yellow-500">container</h1>
                <p className="font-extrabold text-yellow-500">entsorgung.<span className="text-white">shop</span></p>
              </div>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                Container
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                Anleitung
              </a>
              <a href="#" className="text-white hover:text-yellow-500 transition-colors">
                FAQ
              </a>
            </nav>

            {/* User Actions */}
            <div className="flex items-center space-x-4">
              <button className="text-white hover:text-yellow-500 transition-colors">
               <Image src="/icons/user.svg" alt="User" width={24} height={24} />
              </button>
              <button className="text-white hover:text-yellow-500 transition-colors">
              <Image src="/icons/cart.svg" alt="Cart" width={24} height={24} />
              </button>
            </div>
          </div>
        </div>
      </header>
    </>
  )
}

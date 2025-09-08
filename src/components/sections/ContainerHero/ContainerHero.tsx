import Image from "next/image"
import { Button } from "@/components/atoms"

export const ContainerHero = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className=" mx-auto px-0">
        {/* Hero Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Left Content */}
          <div className="px-4 lg:pl-8">
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Container online bestellen –
            </h1>
            <h2 className="text-4xl font-bold text-yellow-500 mb-8">
              einfach, schnell & transparent.
            </h2>
            <p className="text-lg text-gray-700 mb-8 max-w-lg">
              Entsorgung Sie Bauschutt, Sperrmüll oder Gartenabfälle mit nur 
              wenigen Klicks. Keine Preise, schnelle Lieferung, deutschlandweit 
              verfügbar.
            </p>
            <Button className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3 rounded-lg">
              Jetzt Container bestellen
            </Button>
          </div>

          {/* Right Image */}
          <div className="relative">
            <Image
              src="/images/7-cbm-special-type-covered-top-waste-skip 1.png"
              width={600}
              height={400}
              alt="Container ordering"
              className="w-full h-auto rounded-lg"
              priority
            />
           
          </div>
        </div>

<div className="container mx-auto pl-4">
        {/* Container Selection Widget */}
        <div className="bg-[#112437] rounded-2xl p-8 pr-0 text-white shadow-2xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
          <div className="space-y-8 ">
            {/* Step 1: Container Size */}
            <div>
              <h3 className="text-white text-base font-medium mb-4">
                Wähle eine Container Größe
              </h3>
              <div className="grid grid-cols-3 gap-3">
                <div className="cursor-pointer group text-left">
                  <div className="bg-[#1a3a52] border-2 border-cyan-400 rounded-lg p-4 mb-2">
                    <div className="w-16 h-12 mx-auto bg-gray-400 rounded flex items-center justify-center">
                      <svg className="w-10 h-8 text-gray-600" viewBox="0 0 40 32" fill="currentColor">
                        <path d="M5 10 L8 6 L32 6 L35 10 L35 26 L5 26 Z" stroke="currentColor" strokeWidth="1" fill="rgba(156, 163, 175, 0.7)"/>
                        <path d="M8 6 L12 2 L28 2 L32 6" stroke="currentColor" strokeWidth="1" fill="rgba(156, 163, 175, 0.5)"/>
                        <path d="M12 2 L28 2 L28 18 L12 18 Z" stroke="currentColor" strokeWidth="1" fill="rgba(156, 163, 175, 0.3)"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-sm font-medium">2 cbm</p>
                </div>
                <div className="cursor-pointer group text-left">
                  <div className="bg-[#2a4a62] border-2 border-transparent rounded-lg p-4 mb-2 hover:border-cyan-300">
                    <div className="w-16 h-12 mx-auto bg-gray-500 rounded flex items-center justify-center">
                      <svg className="w-12 h-8 text-gray-600" viewBox="0 0 48 32" fill="currentColor">
                        <path d="M3 10 L6 6 L42 6 L45 10 L45 26 L3 26 Z" stroke="currentColor" strokeWidth="1" fill="rgba(107, 114, 128, 0.7)"/>
                        <path d="M6 6 L10 2 L38 2 L42 6" stroke="currentColor" strokeWidth="1" fill="rgba(107, 114, 128, 0.5)"/>
                        <path d="M10 2 L38 2 L38 18 L10 18 Z" stroke="currentColor" strokeWidth="1" fill="rgba(107, 114, 128, 0.3)"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-sm font-medium">2,5 cbm</p>
                </div>
                <div className="cursor-pointer group text-left">
                  <div className="bg-[#2a4a62] border-2 border-transparent rounded-lg p-4 mb-2 hover:border-cyan-300">
                    <div className="w-16 h-12 mx-auto bg-gray-500 rounded flex items-center justify-center">
                      <svg className="w-14 h-9 text-gray-600" viewBox="0 0 56 36" fill="currentColor">
                        <path d="M2 12 L5 6 L51 6 L54 12 L54 30 L2 30 Z" stroke="currentColor" strokeWidth="1" fill="rgba(107, 114, 128, 0.7)"/>
                        <path d="M5 6 L9 2 L47 2 L51 6" stroke="currentColor" strokeWidth="1" fill="rgba(107, 114, 128, 0.5)"/>
                        <path d="M9 2 L47 2 L47 20 L9 20 Z" stroke="currentColor" strokeWidth="1" fill="rgba(107, 114, 128, 0.3)"/>
                        <path d="M12 5 L44 5 L44 17 L12 17 Z" stroke="currentColor" strokeWidth="0.5" fill="rgba(107, 114, 128, 0.2)"/>
                      </svg>
                    </div>
                  </div>
                  <p className="text-white text-sm font-medium">6 cbm</p>
                </div>
              </div>
            </div>

            {/* Step 2: Time Period Selection */}
            <div>
              <h3 className="text-white text-base font-medium mb-4">
                Zeitraum wählen
              </h3>
              <div className="flex gap-3">
                <button className="bg-yellow-400 text-black py-2 px-4 rounded-lg font-medium text-sm border-2 border-yellow-400">
                  2-Wochen-Pauschale
                </button>
                <button className="bg-slate-600 text-white py-2 px-4 rounded-lg font-medium text-sm border-2 border-transparent hover:border-slate-400 hover:bg-slate-500">
                  4-Wochen-Pauschale
                </button>
              </div>
            </div>

            {/* Step 3: Location */}
            <div>
              <h3 className="text-white text-base font-medium mb-4">
                Händler finden
              </h3>
              <input
                type="text"
                placeholder="PLZ eingeben"
                className="w-full bg-slate-700 text-white placeholder-slate-400 py-3 px-4 rounded-lg border border-slate-600 focus:border-yellow-400 focus:outline-none font-medium"
              />
            </div>

            {/* Step 4: Price & Order */}
            <div className="flex items-end justify-between">
              <div>
                <h3 className="text-white text-base font-medium mb-2">
                  Preis (inkl. MwSt.)
                </h3>
                <div className="text-3xl font-bold text-white">
                  ~ 150,00 €
                </div>
              </div>
              <Button className="bg-yellow-400 hover:bg-yellow-500 text-black font-semibold py-3 px-8 rounded-lg text-base transition-colors">
                Checkout »
              </Button>
            </div>
          </div>

            {/* Right Image */}
            <div className="relative">
            <Image
              src="/images/rec.png"
              width={600}
              height={400}
              alt="Container ordering"
              className="w-full h-auto rounded-lg"
              priority
            />
           
          </div>
        </div>
        </div>

        {/* Benefits Section */}
        <div className="mt-16 hidden">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Benefits Of
            </h2>
            <h3 className="text-3xl font-bold text-yellow-500">
              Your Purchase
            </h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2L13.09 8.26L22 9L13.09 9.74L12 16L10.91 9.74L2 9L10.91 8.26L12 2Z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Security</h4>
              <p className="text-gray-600">Secure payment and data protection</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-orange-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Customer reviews</h4>
              <p className="text-gray-600">Rated by thousands of customers</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-pink-600" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zM10 6a2 2 0 0 1 4 0v1h-4V6zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2v10z"/>
                </svg>
              </div>
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Payment methods</h4>
              <p className="text-gray-600">Multiple secure payment options</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

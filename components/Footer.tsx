import React from 'react';
import { Instagram, Facebook, Twitter, Linkedin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-charcoal-900 text-white pt-32 pb-10">
      <div className="container mx-auto px-6">
        
        {/* Massive Brand Name */}
        <div className="border-b border-white/10 pb-20 mb-20">
            <h1 className="font-serif text-[13vw] leading-none text-center text-white/10 font-bold tracking-tighter">
                LUMIÈRE
            </h1>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
             <div className="text-xs uppercase tracking-[0.2em] text-champagne-500 mb-8 font-bold">Headquarters</div>
             <p className="text-stone-400 font-medium leading-loose mb-6">
               575 Madison Avenue<br/>
               New York, NY 10022<br/>
               +1 212 555 0199
             </p>
             <p className="text-stone-400 font-medium">brokerage@lumiere.com</p>
          </div>

          <div>
             <div className="text-xs uppercase tracking-[0.2em] text-champagne-500 mb-8 font-bold">Company</div>
             <ul className="space-y-4 text-stone-400 font-medium">
               <li className="hover:text-white cursor-pointer transition-colors">Our Team</li>
               <li className="hover:text-white cursor-pointer transition-colors">Carrers</li>
               <li className="hover:text-white cursor-pointer transition-colors">Press</li>
               <li className="hover:text-white cursor-pointer transition-colors">Market Reports</li>
             </ul>
          </div>

           <div>
             <div className="text-xs uppercase tracking-[0.2em] text-champagne-500 mb-8 font-bold">Legal</div>
             <ul className="space-y-4 text-stone-400 font-medium">
               <li className="hover:text-white cursor-pointer transition-colors">Fair Housing</li>
               <li className="hover:text-white cursor-pointer transition-colors">Terms of Use</li>
               <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
               <li className="hover:text-white cursor-pointer transition-colors">Accessibility</li>
             </ul>
          </div>

          <div>
             <div className="text-xs uppercase tracking-[0.2em] text-champagne-500 mb-8 font-bold">Connect</div>
             <div className="flex gap-6">
               <Instagram className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
               <Linkedin className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
               <Twitter className="w-5 h-5 text-stone-400 hover:text-white cursor-pointer transition-colors" />
             </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-end text-[10px] uppercase tracking-widest text-stone-600 font-bold">
          <p>&copy; {new Date().getFullYear()} Lumière Real Estate.</p>
          <p>Equal Housing Opportunity.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
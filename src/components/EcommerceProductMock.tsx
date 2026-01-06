
import React, { useState, useEffect } from 'react';
import WallOfLovePreview from './WallOfLovePreview';
import { ShoppingCart, Menu, Heart, Search, ArrowRight, Star } from 'lucide-react';


export const EcommerceProductMock: React.FC<{ onExploreWall: () => void }> = ({ onExploreWall }) => {
  return (
    <div className="bg-white">
      {/* Simple Nav */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 px-6 py-4">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-8">
            <span className="text-xl font-black tracking-tighter uppercase italic">ModernStride.</span>
            <div className="hidden md:flex items-center gap-6 text-xs font-bold uppercase tracking-widest text-gray-500">
              <a href="#" className="text-gray-900 border-b-2 border-gray-900">Shop</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Men</a>
              <a href="#" className="hover:text-gray-900 transition-colors">Women</a>
              <a href="#" className="hover:text-gray-900 transition-colors">About</a>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <Search size={20} className="text-gray-400 cursor-pointer" />
            <ShoppingCart size={20} className="text-gray-400 cursor-pointer" />
            <div className="relative cursor-pointer">
              <Heart size={20} className="text-gray-400" />
              <div className="absolute -top-1 -right-1 w-2 h-2 bg-rose-500 rounded-full" />
            </div>
            <Menu size={20} className="md:hidden" />
          </div>
        </div>
      </nav>

      {/* Hero / PDP Simulation */}
      <div className="pt-24 max-w-7xl mx-auto px-6 lg:grid lg:grid-cols-2 lg:gap-16 py-12">
        <div className="space-y-6">
          <div className="aspect-[4/5] bg-gray-100 rounded-3xl overflow-hidden shadow-inner">
            <img 
              src="https://picsum.photos/id/103/800/1000" 
              alt="Linen Trousers" 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="grid grid-cols-4 gap-4">
            {[1,2,3,4].map(i => (
              <div key={i} className="aspect-square bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
                <img src={`https://picsum.photos/id/${100+i}/200/200`} className="w-full h-full object-cover opacity-80" />
              </div>
            ))}
          </div>
        </div>

        <div className="pt-8 lg:pt-0">
          <div className="flex items-center gap-2 mb-4">
             <div className="flex text-amber-400">
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
               <Star size={16} fill="currentColor" />
             </div>
             <span className="text-xs font-bold text-gray-500">4.9 (428 reviews)</span>
          </div>
          <h1 className="text-4xl md:text-5xl serif text-gray-900 mb-2">Relaxed Linen Trousers</h1>
          <p className="text-2xl text-gray-500 mb-6">$128.00</p>
          
          <div className="space-y-6">
            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">Select Color</label>
              <div className="flex gap-3">
                <div className="w-10 h-10 rounded-full bg-[#E5D3B3] ring-2 ring-offset-2 ring-gray-900 cursor-pointer" />
                <div className="w-10 h-10 rounded-full bg-[#5C4033] cursor-pointer" />
                <div className="w-10 h-10 rounded-full bg-[#1A2421] cursor-pointer" />
              </div>
            </div>

            <div>
              <label className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3 block">Size Guide</label>
              <div className="grid grid-cols-5 gap-2">
                {['XS', 'S', 'M', 'L', 'XL'].map(size => (
                  <button key={size} className="py-3 border border-gray-200 rounded-xl text-sm font-bold hover:border-gray-900 transition-all uppercase">{size}</button>
                ))}
              </div>
            </div>

            <button className="w-full py-5 bg-gray-900 text-white font-bold rounded-2xl hover:bg-gray-800 transition-all shadow-xl shadow-gray-200 uppercase tracking-widest">
              Add to bag
            </button>

            <div className="py-6 border-t border-gray-100 space-y-4">
              <p className="text-gray-600 leading-relaxed text-sm">
                Elevate your off-duty aesthetic with our signature Relaxed Linen Trousers. Crafted from premium, sustainably sourced European flax, these pants offer an effortless drape and unparalleled breathability.
              </p>
              <ul className="text-sm space-y-2 text-gray-500">
                <li className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" /> 
                  100% European Flax® Certified Linen
                </li>
                <li className="flex items-center gap-2">
                   <div className="w-1.5 h-1.5 bg-gray-300 rounded-full" /> 
                   Elasticated drawstring waist for custom fit
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Wall of Love Preview Embedded in PDP */}
      <WallOfLovePreview onViewAll={onExploreWall} />

      {/* Footer Mock */}
      <footer className="bg-gray-50 py-16 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12">
          <div>
            <span className="text-lg font-black tracking-tighter uppercase italic block mb-6">ModernStride.</span>
            <p className="text-xs text-gray-400 leading-loose uppercase tracking-widest">Est. 2024. Designed in Copenhagen. Worn worldwide.</p>
          </div>
          {[
            { title: 'Shop', items: ['New Arrivals', 'Best Sellers', 'Sustainable', 'Gift Cards'] },
            { title: 'Help', items: ['Shipping', 'Returns', 'Size Guide', 'Contact'] },
            { title: 'Community', items: ['Wall of Love', 'Refer a Friend', 'Student Discount', 'Ambassadors'] }
          ].map((col) => (
            <div key={col.title}>
              <h5 className="text-[10px] font-bold uppercase tracking-[0.2em] text-gray-900 mb-6">{col.title}</h5>
              <ul className="space-y-4 text-xs font-medium text-gray-500">
                {col.items.map(item => (
                  <li key={item} className="hover:text-gray-900 transition-colors cursor-pointer">{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

"use client";

import MenuList from '@/components/MenuList';
import { UtensilsCrossed } from 'lucide-react';

export default function Home() {
  return (
    <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-orange-100 dark:selection:bg-orange-900/30">

      {/* Hero Section */}
      <div className="relative bg-zinc-900 h-full min-h-[80vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 opacity-20 bg-[url('https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-t from-zinc-900 to-transparent" />

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto space-y-4">
          <span className="text-orange-500 font-medium tracking-wider uppercase text-sm">Welcome to</span>
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
            The Food Garage
          </h1>
          <p className="text-lg md:text-xl text-zinc-300 max-w-2xl mx-auto">
            Experience culinary excellence with our curated menu of delightful dishes.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="space-y-12">
          {/* Menu Section */}
          <section>
            <div className="flex flex-col md:flex-row justify-between items-end mb-8 gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-4">
              <div>
                <h2 className="text-3xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
                  <UtensilsCrossed className="w-8 h-8 text-orange-500" /> Our Menu
                </h2>
                <p className="text-zinc-500 dark:text-zinc-400 mt-2">Explore our culinary delights and add your favorites to the cart.</p>
              </div>
            </div>

            <MenuList />
          </section>
        </div>
      </div>
    </main>
  );
}

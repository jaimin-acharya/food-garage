"use client";

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCart } from '@/context/CartContext';
import { ShoppingCart, Utensils, Menu, X, Home } from 'lucide-react';

export default function Header() {
    const { cartItems } = useCart();
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();

    const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
    const closeMenu = () => setIsMenuOpen(false);

    return (
        <header className="sticky top-0 z-50 backdrop-blur-md bg-background/80 border-b border-border shadow-sm">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">

                {/* Logo */}
                <Link href="/" className="flex items-center gap-2" onClick={closeMenu}>
                    <Utensils className="w-7 h-7 text-primary" />
                    <h1 className="text-xl font-bold text-primary uppercase tracking-tight">
                        The Food Garage
                    </h1>
                </Link>

                {/* Desktop Navigation */}
                <div className="hidden md:flex items-center gap-8">
                    <nav className="flex items-center gap-6">
                        <Link
                            href="/"
                            className={`text-sm font-medium transition-colors hover:text-primary ${pathname === '/' ? 'text-primary' : 'text-muted-foreground'}`}
                        >
                            Home
                        </Link>
                    </nav>

                    <div className="flex items-center gap-4">
                        <Link href="/cart" className="relative group p-2 rounded-full hover:bg-muted/50 transition-colors">
                            <ShoppingCart className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                            {cartItems.length > 0 && (
                                <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow-sm">
                                    {cartItems.length}
                                </span>
                            )}
                            <span className="sr-only">Go to Cart</span>
                        </Link>
                    </div>
                </div>

                {/* Mobile Menu Toggle & Cart */}
                <div className="flex md:hidden items-center gap-4">
                    <Link href="/cart" className="relative group p-2 rounded-full hover:bg-muted/50 transition-colors">
                        <ShoppingCart className="w-6 h-6 text-muted-foreground group-hover:text-primary transition-colors" />
                        {cartItems.length > 0 && (
                            <span className="absolute -top-1 -right-1 bg-primary text-primary-foreground text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center animate-bounce shadow-sm">
                                {cartItems.length}
                            </span>
                        )}
                    </Link>

                    <button
                        onClick={toggleMenu}
                        className="p-2 text-muted-foreground hover:text-primary transition-colors focus:outline-none"
                        aria-label="Toggle menu"
                    >
                        {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            {isMenuOpen && (
                <div className="md:hidden absolute top-16 left-0 w-full bg-background/95 backdrop-blur-md border-b border-border shadow-lg animate-in slide-in-from-top-2 duration-200 z-40">
                    <div className="flex flex-col p-4 space-y-2">
                        <Link
                            href="/"
                            onClick={closeMenu}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${pathname === '/' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'}`}
                        >
                            <Home className="w-5 h-5" />
                            <span className="font-medium">Home</span>
                        </Link>
                        <Link
                            href="/cart"
                            onClick={closeMenu}
                            className={`flex items-center gap-3 p-3 rounded-xl transition-colors ${pathname === '/cart' ? 'bg-primary/10 text-primary' : 'text-foreground hover:bg-muted'}`}
                        >
                            <ShoppingCart className="w-5 h-5" />
                            <span className="font-medium">Cart</span>
                            {cartItems.length > 0 && (
                                <span className="ml-auto bg-primary text-primary-foreground text-xs font-bold px-2 py-0.5 rounded-full">
                                    {cartItems.length}
                                </span>
                            )}
                        </Link>
                    </div>
                </div>
            )}
        </header>
    );
}

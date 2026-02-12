"use client";

import { MenuItem } from '@/data/menu';
import { ShoppingCart, Trash2, Utensils } from 'lucide-react';
import Image from 'next/image';

interface CartProps {
    onRemoveFromCart: (id: number) => void;
    cartItems: MenuItem[];
}

export default function Cart({ onRemoveFromCart, cartItems }: CartProps) {
    if (cartItems.length === 0) {
        return (
            <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 border border-border text-center">
                <div className="flex justify-center mb-3">
                    <ShoppingCart className="w-12 h-12 text-muted-foreground/50" />
                </div>
                <p className="text-muted-foreground font-medium">Your cart is empty.</p>
                <p className="text-sm text-muted-foreground/70 mt-1">Start adding delicious items!</p>
            </div>
        );
    }

    return (
        <div className="bg-card text-card-foreground rounded-lg shadow-md p-6 border border-border h-full flex flex-col">
            <h2 className="text-xl font-bold mb-4 flex items-center justify-between">
                <span className="flex items-center gap-2"><ShoppingCart className="w-5 h-5" /> Your Selection</span>
                <span className="text-sm font-medium bg-primary/10 text-primary px-3 py-1 rounded-full">
                    {cartItems.length} items
                </span>
            </h2>

            <div className="flex-1 overflow-y-auto pr-2 space-y-3 custom-scrollbar">
                {cartItems.map((item) => (
                    <div key={item.id} className="flex justify-between items-center p-3 rounded-lg bg-muted/50 border border-content/5 hover:border-primary/50 transition-colors group">
                        <div className="flex items-center gap-3">
                            <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-lg shadow-sm overflow-hidden relative shrink-0">
                                {item.image ? (
                                    <Image src={item.image} alt={item.name} fill className="object-cover" sizes="40px" />
                                ) : (
                                    <Utensils className="w-5 h-5 text-primary" />
                                )}
                            </div>
                            <div>
                                <h4 className="font-semibold text-sm line-clamp-1">{item.name}</h4>
                                <p className="text-xs text-muted-foreground">₹{item.price.toFixed(2)}</p>
                            </div>
                        </div>

                        <button
                            onClick={() => onRemoveFromCart(item.id)}
                            className="w-8 h-8 flex items-center justify-center rounded-full text-muted-foreground hover:text-destructive hover:bg-destructive/10 transition-all duration-200"
                            aria-label="Remove item"
                        >
                            <Trash2 className="w-4 h-4" />
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

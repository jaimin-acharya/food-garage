"use client";

import { MENU_ITEMS } from '@/data/menu';
import { useCart } from '@/context/CartContext';
import { Utensils, Check, Plus } from 'lucide-react';
import Image from 'next/image';
import { toast } from 'sonner';

export default function MenuList() {
    const { addToCart, cartItems } = useCart();

    const isItemInCart = (id: number) => {
        return cartItems.some(item => item.id === id);
    };

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {MENU_ITEMS.map((item) => (
                <div key={item.id} className="group relative bg-card text-card-foreground rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-border">


                    <div className="h-48 bg-muted flex items-center justify-center relative overflow-hidden group-hover:scale-105 transition-transform duration-500">
                        {item.image ? (
                            <Image
                                src={item.image}
                                alt={item.name}
                                fill
                                className="object-cover transition-transform duration-500 group-hover:scale-110"
                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                            />
                        ) : (
                            <Utensils className="w-20 h-20 text-muted-foreground/30" strokeWidth={1} />
                        )}
                    </div>

                    <div className="p-5">
                        <div className="flex justify-between items-start mb-2">
                            <div>
                                <span className="text-xs font-semibold text-primary uppercase tracking-wider">{item.category}</span>
                                <h3 className="text-xl font-bold mt-1 group-hover:text-primary transition-colors">
                                    {item.name}
                                </h3>
                                <div className="text-lg font-bold text-foreground mt-1">
                                    ₹{item.price.toFixed(2)}
                                </div>
                            </div>
                        </div>

                        <p className="text-muted-foreground text-sm mb-4 line-clamp-2 min-h-[40px]">
                            {item.description}
                        </p>

                        <button
                            onClick={() => {
                                addToCart(item);
                                toast.success(`Added ${item.name} to cart`);
                            }}
                            disabled={isItemInCart(item.id)}
                            className={`w-full py-2.5 px-4 rounded-lg font-bold text-sm uppercase tracking-wide transition-all duration-200 flex items-center justify-center gap-2 shadow-sm
                                ${isItemInCart(item.id)
                                    ? 'bg-secondary text-secondary-foreground cursor-not-allowed border border-border'
                                    : 'bg-white text-primary border border-primary hover:bg-primary hover:text-white shadow-md hover:shadow-lg'
                                }`}
                        >
                            {isItemInCart(item.id) ? (
                                <>
                                    <Check className="w-5 h-5" /> Added
                                </>
                            ) : (
                                <>
                                    <span>
                                        <Plus className="w-5 h-5" />
                                    </span>
                                    ADD
                                </>
                            )}
                        </button>
                    </div>
                </div>
            ))}
        </div>
    );
}

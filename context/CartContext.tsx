"use client";

import React, { createContext, useContext, useState, ReactNode } from 'react';
import { MenuItem } from '@/data/menu';

interface CartContextType {
    cartItems: MenuItem[];
    addToCart: (item: MenuItem) => void;
    removeFromCart: (id: number) => void;
    clearCart: () => void;
    customerName: string;
    setCustomerName: (name: string) => void;
    customerPhone: string;
    setCustomerPhone: (phone: string) => void;
    formError: string;
    setFormError: (error: string) => void;
}

const CartContext = createContext<CartContextType | undefined>(undefined);

export function CartProvider({ children }: { children: ReactNode }) {
    const [cartItems, setCartItems] = useState<MenuItem[]>([]);
    const [customerName, setCustomerName] = useState("");
    const [customerPhone, setCustomerPhone] = useState("");
    const [formError, setFormError] = useState("");

    const addToCart = (item: MenuItem) => {
        if (!cartItems.some((cartItem) => cartItem.id === item.id)) {
            setCartItems([...cartItems, item]);
        }
    };

    const removeFromCart = (id: number) => {
        setCartItems(cartItems.filter((item) => item.id !== id));
    };

    const clearCart = () => {
        setCartItems([]);
        setCustomerName("");
        setCustomerPhone("");
        setFormError("");
    };

    return (
        <CartContext.Provider value={{
            cartItems,
            addToCart,
            removeFromCart,
            clearCart,
            customerName,
            setCustomerName,
            customerPhone,
            setCustomerPhone,
            formError,
            setFormError
        }}>
            {children}
        </CartContext.Provider>
    );
}

export function useCart() {
    const context = useContext(CartContext);
    if (context === undefined) {
        throw new Error('useCart must be used within a CartProvider');
    }
    return context;
}

"use client";

import { useCart } from '@/context/CartContext';
import Cart from '@/components/Cart';
import BillSummary from '@/components/BillSummary';
import CustomerForm from '@/components/CustomerForm';
import Link from 'next/link';
import { ShoppingCart, ArrowLeft } from 'lucide-react';
import { toast } from 'sonner';

export default function CartPage() {
    const { cartItems, removeFromCart, clearCart, customerName, customerPhone, setFormError } = useCart();

    return (
        <main className="min-h-screen bg-zinc-50 dark:bg-zinc-950 text-zinc-900 dark:text-zinc-100 font-sans selection:bg-orange-100 dark:selection:bg-orange-900/30">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
                <div className="flex items-center justify-between mb-8">
                    <div className="flex items-center gap-4">
                        <Link href="/" className="flex items-center gap-2 text-zinc-500 hover:text-zinc-900 dark:text-zinc-400 dark:hover:text-zinc-100 transition-colors">
                            <ArrowLeft className="w-5 h-5" /> Back to Menu
                        </Link>
                        <h1 className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent">
                            Your Cart
                        </h1>
                    </div>

                </div>

                {cartItems.length === 0 ? (
                    <div className="text-center py-16">
                        <div className="flex justify-center mb-4">
                            <ShoppingCart className="w-16 h-16 text-zinc-300 dark:text-zinc-700" />
                        </div>
                        <h2 className="text-2xl font-bold text-zinc-900 dark:text-white mb-2">Your cart is empty</h2>
                        <p className="text-zinc-500 dark:text-zinc-400 mb-8">Looks like you haven't added anything yet.</p>
                        <Link
                            href="/"
                            className="inline-block bg-orange-600 hover:bg-orange-700 text-white font-medium px-8 py-3 rounded-md transition-colors"
                        >
                            Start Ordering
                        </Link>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                        {/* Cart Items List */}
                        <div className="lg:col-span-2 space-y-6">
                            <Cart cartItems={cartItems} onRemoveFromCart={removeFromCart} />
                        </div>

                        {/* Order Summary & Checkout */}
                        <div className="lg:col-span-1 space-y-6">
                            <div className="sticky top-24 space-y-6">
                                <CustomerForm />
                                <BillSummary items={cartItems} />

                                {cartItems.length > 0 && (
                                    <button
                                        onClick={() => {
                                            if (!customerName.trim()) {
                                                const error = "Please enter your name";
                                                setFormError(error);
                                                toast.error(error);
                                                return;
                                            }
                                            if (!customerPhone || customerPhone.length < 10) {
                                                const error = "Please enter a valid phone number";
                                                setFormError(error);
                                                toast.error(error);
                                                return;
                                            }
                                            toast.success(`Order placed for ${customerName}!`, {
                                                description: `We will contact you at +91 ${customerPhone}.`,
                                                duration: 5000,
                                            });
                                            clearCart();
                                        }}
                                        className="w-full bg-gradient-to-r from-orange-600 to-red-600 text-white font-bold py-4 rounded-xl shadow-lg hover:shadow-xl hover:scale-[1.02] active:scale-[0.98] transition-all duration-200"
                                    >
                                        Place Order
                                    </button>
                                )}
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </main>
    );
}

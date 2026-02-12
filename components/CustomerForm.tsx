"use client";

import { useCart } from '@/context/CartContext';
import { User } from 'lucide-react';

export default function CustomerForm() {
    const { customerName, setCustomerName, customerPhone, setCustomerPhone, formError } = useCart();

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 border border-zinc-200 dark:border-zinc-800 transition-all duration-300 hover:shadow-lg">
            <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 flex items-center">
                <span className="mr-2"><User className="w-5 h-5" /></span> Customer Details
            </h2>
            <div className="space-y-4">
                <div>
                    <label htmlFor="customerName" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Name
                    </label>
                    <input
                        type="text"
                        id="customerName"
                        value={customerName}
                        onChange={(e) => setCustomerName(e.target.value)}
                        className={`w-full px-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors 
              ${formError
                                ? 'border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
                                : 'border-zinc-300 dark:border-zinc-700 focus:border-orange-500 focus:ring-orange-200 dark:focus:ring-orange-900 dark:bg-zinc-800 dark:text-white'
                            }`}
                        placeholder="Enter your name"
                    />
                </div>
                <div>
                    <label htmlFor="customerPhone" className="block text-sm font-medium text-zinc-700 dark:text-zinc-300 mb-1">
                        Phone Number
                    </label>
                    <div className="relative">
                        <span className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 dark:text-zinc-400 font-medium">
                            +91
                        </span>
                        <input
                            type="tel"
                            id="customerPhone"
                            value={customerPhone}
                            onChange={(e) => {
                                const value = e.target.value.replace(/\D/g, '').slice(0, 10);
                                setCustomerPhone(value);
                            }}
                            className={`w-full pl-14 pr-4 py-2 rounded-lg border focus:ring-2 focus:outline-none transition-colors 
              ${formError && !customerPhone
                                    ? 'border-red-500 focus:border-red-500 focus:ring-red-200 dark:focus:ring-red-900'
                                    : 'border-zinc-300 dark:border-zinc-700 focus:border-orange-500 focus:ring-orange-200 dark:focus:ring-orange-900 dark:bg-zinc-800 dark:text-white'
                                }`}
                            placeholder="Enter 10-digit number"
                        />
                    </div>
                    {formError && (
                        <p className="mt-1 text-sm text-red-500 animate-pulse">{formError}</p>
                    )}
                </div>
            </div>
        </div>
    );
}

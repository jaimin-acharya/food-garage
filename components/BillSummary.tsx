"use client";

import { MenuItem } from '@/data/menu';
import { Receipt } from 'lucide-react';

interface BillSummaryProps {
    items: MenuItem[];
}

export default function BillSummary({ items }: BillSummaryProps) {
    const calculateTotals = (items: MenuItem[]) => {
        const subtotal = items.reduce((acc, item) => acc + item.price, 0);
        const gstRate = 0.05; // 5%
        const gstAmount = subtotal * gstRate;
        const finalTotal = subtotal + gstAmount;

        return {
            subtotal: subtotal.toFixed(2),
            gstAmount: gstAmount.toFixed(2),
            finalTotal: finalTotal.toFixed(2)
        };
    };

    const { subtotal, gstAmount, finalTotal } = calculateTotals(items);

    return (
        <div className="bg-white dark:bg-zinc-900 rounded-lg shadow-md p-6 border border-zinc-200 dark:border-zinc-800">
            <h2 className="text-xl font-bold mb-4 text-zinc-900 dark:text-zinc-100 flex items-center justify-between">
                <span className="flex items-center gap-2"><Receipt className="w-5 h-5" /> Bill Summary</span>
                <span className="text-sm font-medium bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400 px-3 py-1 rounded-full">{items.length} items</span>
            </h2>

            <div className="space-y-4">
                {/* Subtotal */}
                <div className="flex justify-between items-center py-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-gray-500 dark:text-gray-400">Subtotal</span>
                    <span className="text-lg font-semibold text-zinc-900 dark:text-white">₹{subtotal}</span>
                </div>

                {/* GST (5%) */}
                <div className="flex justify-between items-center py-2 border-b border-zinc-100 dark:border-zinc-800">
                    <span className="text-gray-500 dark:text-gray-400 flex items-center gap-2">
                        GST <span className="text-xs bg-zinc-100 dark:bg-zinc-800 px-1.5 py-0.5 rounded text-zinc-500">5%</span>
                    </span>
                    <span className="text-lg font-semibold text-zinc-900 dark:text-white">₹{gstAmount}</span>
                </div>
            </div>

            {/* Total */}
            <div className="mt-6 pt-4 border-t-2 border-dashed border-zinc-200 dark:border-zinc-700">
                <div className="flex justify-between items-end mb-2">
                    <span className="text-xl font-bold text-zinc-900 dark:text-white">Total</span>
                    <span className="text-3xl font-extrabold text-orange-600 dark:text-orange-500">₹{finalTotal}</span>
                </div>
                <p className="text-xs text-center text-zinc-400 dark:text-zinc-600 mt-4">Thank you for dining with us!</p>
            </div>
        </div>
    );
}

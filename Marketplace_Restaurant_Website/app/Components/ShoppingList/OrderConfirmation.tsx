import React from 'react';
import Image from 'next/image';
import { SanityImageSource } from '@sanity/image-url/lib/types/types';
import { urlFor } from '@/sanity/lib/image';
import Link from 'next/link';

interface OrderConfirmationProps {
    cartItems: {
        quantity: number;
        image: SanityImageSource;
        name: string;
        price: number;
        discount: number;
        slug: string;
        description: string;
        category: string;
        _id: string
    }[];
    onClose: () => void;
}

const OrderConfirmation: React.FC<OrderConfirmationProps> = ({ cartItems, onClose }) => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-[101]">
            <div className="bg-white w-[500px] p-6 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center text-[#FF9F0D]">Order Placed Successfully!</h2>
                <p className="text-center text-gray-600 mt-2">Thank you for your purchase!</p>
                <div className="mt-4 space-y-4">
                    {cartItems.map((item) => (
                        <div key={item._id} className="flex items-center gap-4 p-4 bg-gray-50 rounded-lg shadow-sm">
                            <Image
                                src={item.image ? urlFor(item.image).url() : ""}
                                alt={item.name}
                                width={60}
                                height={60}
                                className="object-cover rounded"
                            />
                            <div>
                                <h4 className="text-lg font-medium text-gray-800">{item.name}</h4>
                                <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                            </div>
                        </div>
                    ))}
                </div>
                <button
                    onClick={onClose}
                    className="mt-6 w-full py-2 bg-[#FF9F0D] text-white text-lg rounded-lg"
                >
                    Close
                </button>
            </div>
        </div>
    );
};

export default OrderConfirmation;

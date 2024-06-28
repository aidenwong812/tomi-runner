import Image from 'next/image';
import React from 'react';
import { FiCpu } from "react-icons/fi";
import github from '~/assets/logos/github.svg';
import slickci from '~/assets/logos/slick.png';

const PricingTable = () => {
    const hardwareOptions = [
        { cpus: 2, ram: "8 GB", priceAMD: "$0.002 / min", priceARM: "$0.008 / min" },
        { cpus: 4, ram: "16 GB", priceAMD: "$0.004 / min", priceARM: "$0.016 / min" },
        { cpus: 8, ram: "32 GB", priceAMD: "$0.008 / min", priceARM: "$0.032 / min" },
        { cpus: 16, ram: "64 GB", priceAMD: "$0.016 / min", priceARM: "$0.064 / min" },
    ];

    return (
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-20">
            <h2 className="text-3xl font-semibold text-text-100">Not only faster</h2>
            <p className="mb-8 text-xl text-text-200">Reduce the cost per workflow run</p>
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                        <tr>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                Hardware
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {/* Price (AMD64) */}
                                <Image src={slickci} alt="slickci" width={170} height={170} className='rounded-lg' />
                            </th>
                            <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {/* Price (ARM) */}
                                <Image src={github as string} alt="github" width={100} height={100} />
                            </th>
                        </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                        {hardwareOptions.map((item, index) => (
                            <tr key={index}>
                                <td className="px-6 py-4 whitespace-nowrap">
                                    <div className="flex items-center">
                                        {Array.from({ length: item.cpus }, (_, idx) => <FiCpu key={idx} className="text-gray-500" />)}
                                        <span className="ml-4">
                                            {item.cpus} vCPU
                                        </span>
                                        <span className="mx-2">|</span>
                                        <span>{item.ram}</span>
                                    </div>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item.priceAMD}
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                    {item.priceARM}
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PricingTable;

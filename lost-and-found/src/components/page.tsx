import React from 'react';

export default function CatalystStackedLayout() {
    return (
        <div className="flex h-screen bg-gray-100">
            {/* Sidebar */}
            <aside className="w-64 bg-gray-800 text-white p-4">
                <h2 className="text-2xl font-bold mb-6">Dashboard</h2>
                <nav className="space-y-2">
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Overview</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Lost Items</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Found Items</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Reports</a>
                    <a href="#" className="block px-4 py-2 rounded hover:bg-gray-700">Settings</a>
                </nav>
            </aside>

            {/* Main Content */}
            <main className="flex-1 p-6">
                <header className="border-b pb-4 mb-6">
                    <h1 className="text-3xl font-semibold">Overview</h1>
                </header>

                {/* Main Dashboard Content */}
                <div className="grid grid-cols-3 gap-6">
                    <div className="bg-white p-4 shadow rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Total Lost Items</h3>
                        <p className="text-2xl">120</p>
                    </div>

                    <div className="bg-white p-4 shadow rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Total Found Items</h3>
                        <p className="text-2xl">95</p>
                    </div>

                    <div className="bg-white p-4 shadow rounded-lg">
                        <h3 className="text-xl font-bold mb-2">Reports Generated</h3>
                        <p className="text-2xl">30</p>
                    </div>
                </div>
            </main>
        </div>
    );
}
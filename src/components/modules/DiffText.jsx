import React from 'react';


function DiffText() {
    return (
        <div className="diff aspect-[16/9] sm:aspect-[20/5] mb-4 sm:mb-6 max-w-5xl mx-auto">
            <div className="diff-item-1">
                <div className="bg-[#ED1D24] text-primary-content grid place-content-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter sm:tracking-normal">
                    <span className="animate-pulse">Marvel</span>
                </div>
            </div>
            <div className="diff-item-2">
                <div className="bg-[#121212] grid place-content-center text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-black tracking-tighter sm:tracking-normal">
                    <span className="animate-pulse">Marvel</span>
                </div>
            </div>
            <div className="diff-resizer"></div>
        </div>
    );
}

export default DiffText;
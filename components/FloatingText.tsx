"use client"

import {useState, useEffect} from "react"

export default function FloatingText(){
    const [hoveredCategory, setHoveredCategory] = useState('');
    
    const keyWords = [
        { text: "Programming", size: 'text-6xl', category: 'main'},
        { text: "React", size: 'text-2xl', category: 'programming'},
        { text: "Next.js", size: 'text-xl', category: 'programming'},
        { text: "Game Dev", size: 'text-6xl', category: 'main'},
        { text: "Unity", size: 'text-2xl', category: 'gamedev'},
        { text: "Digital Art", size: 'text-6xl', category: 'main'},
        { text: "Illustrations", size: 'text-2xl', category: 'art'},
    ];

    const getScaleClass = (item: { text?: string; size?: string; category: any; }) => {
        if (hoveredCategory === item.category) {
            return 'scale-125'; // Related words get bigger
        }
        if (hoveredCategory && hoveredCategory !== item.category) {
            return 'scale-75 opacity-50'; // Others shrink and fade
        }
        return 'scale-100'; // Default size
    };

    return(
        <div className="w-full h-screen bg-sky-200 relative overflow-hidden">
            {keyWords.map((item, index) => (
                <div 
                    key={index}
                    className={`absolute ${item.size} cursor-pointer transition-all duration-300 ${getScaleClass(item)}`}
                    style={{
                        left: `${Math.random() * 70 + 15}%`,
                        top: `${Math.random() * 60 + 20}%`
                    }}
                    onMouseEnter={() => setHoveredCategory(item.category)}
                    onMouseLeave={() => setHoveredCategory('')}
                >
                    {item.text}
                </div>
            ))}
        </div>
    );
}
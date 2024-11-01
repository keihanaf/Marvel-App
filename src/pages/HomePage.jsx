import React from 'react';
import { motion } from 'framer-motion';
import CharactersList from "components/templates/CharactersList.jsx";
import DiffText from "../components/modules/DiffText.jsx";
import AvengersImage from "../components/templates/AvengersImage.jsx";
import ComicsList from "../components/templates/ComicsList.jsx";
import hero from 'assets/hero.png';
import marvel from 'assets/marvel.png';
import comic from 'assets/comic.jpeg';
import multiverse from 'assets/multiverse.jpeg';
import SeriesList from "../components/templates/SeriesList.jsx";
import StoriesList from "../components/templates/StoriesList.jsx";
import { useNavigate } from 'react-router-dom';


function AnimatedSection({ children, delay = 0 }) {
    return (
        <motion.div
            initial={{ 
                opacity: 0, 
                y: 30,
                filter: "blur(10px)"
            }}
            whileInView={{ 
                opacity: 1, 
                y: 0,
                filter: "blur(0px)"
            }}
            viewport={{ 
                margin: "-100px",
                once: false 
            }}
            transition={{
                duration: 1.2,
                delay,
                ease: "easeOut"
            }}
            className="w-full"
        >
            {children}
        </motion.div>
    );
}

function HomePage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-black/95">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
                <div className="space-y-8 md:space-y-12 lg:space-y-16">
                    <AnimatedSection>
                        <DiffText/>
                    </AnimatedSection>

                    <AnimatedSection delay={0.05}>
                        <div className="text-center text-white">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Welcome to the Marvel Universe!</h2>
                            <p className="text-lg sm:text-xl mb-6">
                                Dive into the epic world of Marvel, where heroes rise and legends are born.
                                From the streets of New York to the cosmic realms, join your favorite characters
                                on thrilling adventures that will leave you breathless.
                            </p>
                            <img
                                src={marvel}
                                alt="Marvel Universe"
                                className="mx-auto rounded-lg shadow-[0_10px_30px_rgba(237,29,36,0.7)] w-full sm:w-3/4 md:w-2/3 lg:w-1/2 transition-transform duration-300 transform hover:scale-105"
                            />
                        </div>
                    </AnimatedSection>

                    <AnimatedSection delay={0.1}>
                        <div className="text-center text-white">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Meet Your Heroes</h2>
                            <p className="text-lg sm:text-xl mb-6">
                                Marvel is home to some of the most iconic superheroes.
                                From the genius of Iron Man to the bravery of Captain America,
                                each character has a unique story that captivates audiences.
                            </p>
                            <img src={hero} alt="Marvel Heroes"
                                 className="mx-auto rounded-lg shadow-2xl w-1/2 sm:w-1/3 md:w-1/4"/>
                        </div>
                    </AnimatedSection>

                    <div className="-mt-4 md:-mt-8 lg:-mt-12">
                        <AnimatedSection delay={0.15}>
                            <CharactersList/>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.2}>
                        <AvengersImage/>
                    </AnimatedSection>

                    <AnimatedSection delay={0.25}>
                        <div className="flex flex-col md:flex-row items-center justify-between text-white">
                            <img
                                src={comic}
                                alt="Marvel Comics"
                                className="rounded-lg shadow-[0_10px_30px_rgba(237,29,36,0.7)] w-full sm:w-2/3 md:w-1/3 lg:w-1/4 transition-transform duration-300 transform hover:scale-105 mb-4 md:mb-0"
                            />
                            <div className="flex-1 text-center md:text-left md:ml-6">
                                <h2 className="text-3xl sm:text-4xl md:text-4xl lg:text-5xl font-bold mb-4">Explore Our
                                    Comics</h2>
                                <p className="text-base sm:text-lg md:text-lg lg:text-xl mb-6">
                                    Discover the stories that shaped the Marvel Universe.
                                    Each comic is a gateway to new adventures, filled with action,
                                    drama, and unforgettable characters.
                                    What will you read next?
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="-mt-4 md:-mt-8 lg:-mt-12">
                        <AnimatedSection delay={0.3}>
                            <ComicsList/>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.35}>
                        <div className="text-center text-white">
                            <h2 className="text-4xl sm:text-5xl font-bold mb-4 transition-transform duration-300 transform hover:scale-105">
                                The Marvel Multiverse
                            </h2>
                            <p className="text-lg sm:text-xl mb-4 transition-transform duration-300 transform hover:scale-105">
                                The Marvel Multiverse is a vast and complex tapestry of stories,
                                characters, and worlds. Each universe offers a unique perspective
                                on the heroes and villains we know and love.
                            </p>
                            <img
                                src={multiverse}
                                alt="Marvel Multiverse"
                                className="mx-auto rounded-lg shadow-[0_10px_30px_rgba(237,29,36,0.7)] w-4/5 sm:w-3/4 md:w-2/3 transition-transform duration-300 mb-0 mt-2 hover:scale-105"
                            />
                        </div>
                    </AnimatedSection>

                    <div className="-mt-4 md:-mt-8 lg:-mt-12">
                        <AnimatedSection delay={0.3}>
                            <SeriesList/>
                        </AnimatedSection>
                    </div>

                    <AnimatedSection delay={0.3}>
                        <div className="text-center my-8">
                            <div 
                                className="bg-gray-800 rounded-lg shadow-lg p-6 transition-transform duration-300 hover:scale-105 cursor-pointer" 
                                onClick={() => navigate('/explore')}
                            >
                                <h2 className="text-4xl font-bold text-white mb-4">Explore the Marvel Universe</h2>
                                <p className="text-lg text-gray-300 mb-6">
                                    Dive deeper into the stories and series that shape the Marvel Universe. 
                                    Discover the adventures, characters, and epic tales that await you!
                                </p>
                            </div>
                        </div>
                    </AnimatedSection>

                    <div className="-mt-4 md:-mt-8 lg:-mt-12">
                        <AnimatedSection delay={0.3}>
                            <StoriesList/>
                        </AnimatedSection>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default HomePage;

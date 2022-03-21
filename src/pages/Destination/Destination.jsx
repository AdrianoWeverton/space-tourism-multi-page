import { useState } from 'react';
import { Header } from "../../components/Header/Header";
import './destination_style.css';
import data from '../../data.json';

export const Destination = ({currentRoute}) => {
    const [planets] = useState(data.destinations);
    const [value, setValue] = useState(0);

    const {name, images, description, distance, travel} = planets[value];
    

    return(
        <div className='bg-destination-desktop min-h-screen bg-cover'>
            <Header  currentRoute={currentRoute} />
            <section className='flex flex-col'>
                <article className='font-Condensed text-[28px] text-white uppercase leading-8 tracking-widest ml-40 mt-7'>
                    <span className='opacity-25 mr-7 text-[28px]'>01</span> Pick your destination
                </article>
                <article className='grid grid-cols-2 font-Condensed items-center'>
                    <div className='w-[365px] h-[365px] ml-44 mt-7'><img src={images.png} /></div>
                    <div className='w-[450px]'>
                        <div className='flex items-center cursor-pointer text-[#D0D6F9] uppercase text-base '>
                            {planets.map((item, index) => (
                                <div key={index} onClick={() => {setValue(index)}} className={`${value === index ? 'active-destine': ''} mr-10 planet`}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                        <h1 className='uppercase font-Bellefair text-[100px] leading-[115px] text-white my-5'>{name}</h1>
                        <p className='text-[#D0D6F9] text-lg leading-8 font-Barlow'>{description}</p>
                        <hr className='opacity-25 my-5' />
                        <div className='flex items-center uppercase font-Condensed text-[#D0D6F9] text-sm'>
                            <div className='flex flex-col'>avg. Distance <span className='text-white font-Bellefair text-3xl'>{distance}</span></div>
                            <div className='flex flex-col ml-20'>Est. Travel Time <span className='text-white font-Bellefair text-3xl'>{travel}</span></div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}
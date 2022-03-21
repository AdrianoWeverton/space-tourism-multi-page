import { Header } from "../../components/Header/Header";
import './style.css';
import data from '../../data.json';
import { useState } from "react";

export const Technology = ({currentRoute}) => {
    const [technology] = useState(data.technology);
    const [value, setValue] = useState(0);

    const {name, images, description} = technology[value];

    return(
        <div className="bg-technology-desktop min-h-screen">
            <Header currentRoute={currentRoute} />
            <section>
                <article className='font-Condensed text-[28px] text-white uppercase leading-8 tracking-widest ml-40 mt-7 mb-20'>
                    <span className='opacity-25 mr-7 text-[28px]'>03</span> Space launch 101
                </article>
                <article className="grid grid-cols-2 ml-40">
                    <div className="flex items-start">
                        <div className="mr-16">
                            {technology.map((item, index) => (
                                <button key={index} onClick={() => setValue(index)} className={`w-20 h-20 text-white ${value === index ? 'tech-active':''} tech font-Bellefair text-3xl`}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <div className="text-[#D0D6F9] ">
                            <span className="text-base  font-Condensed uppercase">The terminology...</span>
                            <div className="text-white text-5xl font-Bellefair uppercase mb-4 mt-2">{name}</div>
                            <div className="text-lg w-[433px]">{description}</div>
                        </div>
                    </div>
                    <div className="w-[440px] h-[442px] ml-40 mt-[-80px]"><img src={images.portrait} /></div>
                </article>
            </section>
        </div>
    );
}
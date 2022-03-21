import { useState } from "react";
import { Header } from "../../components/Header/Header";
import data from '../../data.json'
import './style.css'

export const Crew = ({currentRoute}) => {
    const [members] = useState(data.crew);
    const [value, setValue] = useState(0); 

    const {name, images, role, bio} = members[value];

    return(
        <div className="bg-crew-desktop min-h-screen">
            <Header currentRoute={currentRoute} />
            <section className="flex flex-col">
                <article className='font-Condensed text-[28px] text-white uppercase leading-8 tracking-widest ml-40 mt-7'>
                    <span className='opacity-25 mr-7 text-[28px]'>02</span> Meet your crew
                </article>
                <article className="grid grid-cols-2 mt-6 items-center">
                    <div className="w-[444px] ml-40 mt-7 font-Bellefair">
                        <div className="text-3xl uppercase text-white opacity-50 leading-9">{role}</div>
                        <div className="text-white text-5xl leading-[64px] uppercase mb-8 mt-4 w-[600px]">{name}</div>
                        <div className="font-Barlow text-lg leading-8 text-[#D0D6F9]">{bio}</div>
                        <div className="flex mt-14">
                            {members.map((item, index) => (
                                <div key={index} onClick={() => setValue(index)} className={`bg-white rounded-full w-4 h-4 cursor-pointer mr-6 bg-opacity-20 ${value === index ? 'current-member' : ''} hover:bg-opacity-50`}>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="ml-32 self-end items-end"><img src={images.png} className='w=[275px] h-[478px]'/></div>
                </article>
            </section>
        </div>
    );
}
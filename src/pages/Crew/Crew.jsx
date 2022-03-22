import { useState } from "react";
import { Header } from "../../components/Header/Header";
import data from '../../data.json'
import './style.css'

export const Crew = ({currentRoute}) => {
    const [members] = useState(data.crew);
    const [value, setValue] = useState(0); 

    const {name, images, role, bio} = members[value];

    return(
        <div className="xl:bg-crew-desktop md:bg-crew-tablet sm:bg-crew-mobile min-h-screen bg-no-repeat">
            <Header currentRoute={currentRoute} />
            <section className="flex flex-col">
                <article className='font-Condensed text-[28px] text-white uppercase leading-8 tracking-widest ml-40 mt-7 content-title'>
                    <span className='opacity-25 mr-7 text-[28px]'>02</span> Meet your crew
                </article>
                <article className="grid grid-cols-2 mt-6 items-center main-content">
                    <div className="w-[444px] xl:ml-40 md:ml-10 mt-7 font-Bellefair">
                        <div className="xl:text-3xl md:text-2xl uppercase text-white opacity-50 leading-9 role">{role}</div>
                        <div className="text-white xl:text-5xl md:text-[40px]  xl:leading-[64px] md:leading-[45px] uppercase mb-8 mt-4 w-[600px] name">{name}</div>
                        <div className="font-Barlow xl:text-lg md:text-base leading-8 text-[#D0D6F9] description">{bio}</div>
                        <div className="flex mt-14 members">
                            {members.map((item, index) => (
                                <div key={index} onClick={() => setValue(index)} className={`bg-white rounded-full w-4 h-4 cursor-pointer mr-6 bg-opacity-20 ${value === index ? 'current-member' : ''} hover:bg-opacity-50`}>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="xl:ml-32"><img src={images.png} className=' member-image xl:h-[478px] md:h-[400px]'/></div>
                </article>
            </section>
        </div>
    );
}
import { Header } from "../../components/Header/Header";
import './style.css';
import data from '../../data.json';
import { useState } from "react";

export const Technology = ({currentRoute}) => {
    const [technology] = useState(data.technology);
    const [value, setValue] = useState(0);

    const {name, images, description} = technology[value];

    return(
        <div className="xl:bg-technology-desktop md:bg-technology-tablet sm:bg-technology-mobile min-h-screen bg-no-repeat">
            <Header currentRoute={currentRoute} />
            <section>
                <article className='font-Condensed text-[28px] text-white uppercase leading-8 tracking-widest ml-40 mt-7 mb-20 content-title'>
                    <span className='opacity-25 mr-7 text-[28px]'>03</span> Space launch 101
                </article>
                <article className="grid grid-cols-2 ml-40 tech-content">
                    <div className="flex items-start main-tech-content">
                        <div className="mr-16 tech-items">
                            {technology.map((item, index) => (
                                <button key={index} onClick={() => setValue(index)} className={`xl:w-20 md:w-16 xl:h-20 md:h-16 md:mr-4 text-white ${value === index ? 'tech-active':''} tech font-Bellefair xl:text-3xl md:text-2xl`}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <div className="text-[#D0D6F9] ">
                            <span className="text-base  font-Condensed uppercase">The terminology...</span>
                            <div className="text-white xl:text-5xl md:text-[40px] font-Bellefair uppercase mb-4 mt-2">{name}</div>
                            <div className="xl:text-lg md:text-base xl:w-[433px] md:w-[450px] md:mb-24">{description}</div>
                        </div>
                    </div>
                    <div className='xl:ml-40 xl:mt-[-80px] md:mt-[-50px] md:ml-[-160px]'><img src={window.innerWidth > 768 ? images.portrait : images.landscape} className='xl:w-[440px] xl:h-[442px] md:w-screen md:h-[310px]' /></div>
                </article>
            </section>
        </div>
    );
}
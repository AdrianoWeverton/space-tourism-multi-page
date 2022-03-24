import { Header } from "../../components/Header/Header";
import './style.css';
import data from '../../data.json';
import { useState } from "react";

export const Technology = ({currentRoute}) => {
    const [technology] = useState(data.technology);
    const [value, setValue] = useState(0);

    const {name, images, description} = technology[value];

    return(
        <div className="desktop:bg-technology-desktop md:bg-technology-tablet sm:bg-technology-mobile min-h-screen bg-no-repeat bg-cover">
            <Header currentRoute={currentRoute} />
            <section className="tech-section">
                <article className='page-title'>
                    <span className='page-title-span'>03</span> Space launch 101
                </article>
                <article className="tech-content">
                    <div className="main-tech-content">
                        <div className="technologies-list">
                            {technology.map((item, index) => (
                                <button key={index} onClick={() => setValue(index)} className={`${value === index ? 'tech-active':''}  technology`}>
                                    {index + 1}
                                </button>
                            ))}
                        </div>
                        <div className="text-content">
                            <span className="tech-title">The terminology...</span>
                            <div className="tech-name">{name}</div>
                            <div className="tech-description">{description}</div>
                        </div>
                    </div>
                        <div className='tech-image'><img src={window.innerWidth > 999 ? images.portrait : images.landscape} alt={name} className='xl:w-[440px] xl:h-[442px] md:w-screen md:h-[310px]' /></div>
                </article>
            </section>
        </div>
    );
}
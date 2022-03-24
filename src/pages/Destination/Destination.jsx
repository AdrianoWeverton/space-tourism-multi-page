import { useState } from 'react';
import { Header } from "../../components/Header/Header";
import './destination_style.css';
import data from '../../data.json';

export const Destination = ({currentRoute}) => {
    const [planets] = useState(data.destinations);
    const [value, setValue] = useState(0);

    const {name, images, description, distance, travel} = planets[value];
    

    return(
        <div className='xl:bg-destination-desktop md:bg-destination-tablet sm:bg-destination-mobile min-h-screen bg-cover'>
            <Header  currentRoute={currentRoute} />
            <section className='section-destination'>
                <article className='page-title'>
                    <span className='page-title-span'>01</span> Pick your destination
                </article>
                <article className='destination-content'>
                    <div className='destination-image'><img src={images.png} alt={name}/></div>
                    <div className='destination-main-content'>
                        <div className='destine-list'>
                            {planets.map((item, index) => (
                                <div key={index} onClick={() => {setValue(index)}} className={`${value === index ? 'active-destine': ''} destine`}>
                                    {item.name}
                                </div>
                            ))}
                        </div>
                        <h1 className='destine-title'>{name}</h1>
                        <p className='destine-description'>{description}</p>
                        <hr className='divisor' />
                        <div className='extra-info'>
                            <div className='destine-distance'>avg. Distance <span className=''>{distance}</span></div>
                            <div className='travel-time'>Est. Travel Time <span className=''>{travel}</span></div>
                        </div>
                    </div>
                </article>
            </section>
        </div>
    );
}
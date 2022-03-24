import { useState } from "react";
import { Header } from "../../components/Header/Header";
import data from '../../data.json'
import './style.css'

export const Crew = ({currentRoute}) => {
    const [members] = useState(data.crew);
    const [value, setValue] = useState(0); 

    const {name, images, role, bio} = members[value];

    return(
        <div className="desktop:bg-crew-desktop md:bg-crew-tablet sm:bg-crew-mobile min-h-screen bg-no-repeat bg-cover">
            <Header currentRoute={currentRoute} />
            <section className="section-crew">
                <article className='page-title'>
                    <span className='page-title-span'>02</span> Meet your crew
                </article>
                <article className="crew-content">
                    <div className="crew-information">
                        <div className="role">{role}</div>
                        <div className="member-name">{name}</div>
                        <div className="member-bio">{bio}</div>
                        <div className="members-list">
                            {members.map((item, index) => (
                                <div key={index} onClick={() => setValue(index)} className={`${value === index ? 'current-member' : ''} member`}>
                                    
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="member-photo">
                        <img src={images.png} alt={name}/>
                    </div>
                </article>
            </section>
        </div>
    );
}
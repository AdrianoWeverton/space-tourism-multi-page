import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import './style.css';

export const Home = ({currentRoute}) => {
    return(
        <div className="xl:bg-home-desktop md:bg-home-tablet sm:bg-home-mobile min-h-screen bg-no-repeat">
            <Header currentRoute={currentRoute}/>
            <section className=" grid grid-cols-2 content">
                <article className="w-[450px] text-white ml-40 mt-32">
                    <div>
                        <div className="uppercase font-Condensed leading-8 tracking-widest text-2xl text-[#D0D6F9] mb-3">So you want to Travel to</div> 
                        <span className="uppercase font-Bellefair leading-[171px] text-[150px]">SPACE</span>
                        <p className="text-[#D0D6F9] leading-8 xl:text-lg md:text-base">Let's face it; if you want to go to space, oyu might as well
                            genuinely go to outer space and not hover kind of on the
                            edge o fit. Well sit back, ans relax because we'll give you a
                            truly out of this world experience!
                        </p>
                    </div>
                </article>
                <article>
                    <Link to='/destination'><button className="btn"><div>Explore</div></button></Link>
                </article>
            </section>
        </div>
    );
}
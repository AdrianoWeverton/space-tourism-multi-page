import { Header } from "../../components/Header/Header";
import { Link } from "react-router-dom";
import './style.css';

export const Home = ({currentRoute}) => {
    return(
        <div className="xl:bg-home-desktop md:bg-home-tablet sm:bg-home-mobile sm:bg-cover min-h-screen bg-no-repeat">
            <Header currentRoute={currentRoute}/>
            <section className="section">
                <article className="article">
                    <div>
                        <div className="title">So, you want to Travel to</div> 
                        <span className="title-span">SPACE</span>
                        <p className="text">Let's face it; if you want to go to space, you might as well
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
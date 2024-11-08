import backgroundImage from '../assets/images/ssomar-tools-website_background-image.png';
import headerImage from '../assets/images/ssomar-tools-website_header-image.png'
import { Link } from 'react-router-dom';

export const Home = () => {
    return (
    <div>
        <div className="w-full h-screen fixed bg-gray-300 -z-10" /> {/*This just fills in untouched/blank areas of the viewport*/}
        <div className="bg-slate-500 p-6 text-center text-7xl font-minecraft sticky top-0 border-b-4 border-black z-50">
            <span className="text-white pl-3 pr-3 ">Special70's Website</span>
        </div>
        <hr className="bg-black h-1 mt-10"/>
            <div className="bg-white p-5">
                <span className="text-center text-5xl block">Hello to my website</span><br></br>
                <p className="text-center block text-3xl">This website mainly showcases my capability as a website developer and sometimes for personal use. <br />Expect regular updates in this website</p>
            </div>
        <hr className="bg-black h-1"/>
        <hr className="bg-black h-1 mt-10"/>
        <div className="w-auto flex flex-col pb-4 relative" id="ssomar-plugins-tools-website">
            <img src={backgroundImage} className="-z-10 h-auto opacity-20 min-h-full absolute" />
            <div className="text-center font-minecraft text-7xl">
                Ssomar Plugins Tools
            </div>
            <div className="flex flex-row viewport<=910px:flex-col">
                <div className="w-2/5 viewport<=910px:w-4/5 p-5 ml-5 ssomar-tools-section-screen-settings-loadout">
                    <img src={headerImage} alt="Image showcasing the ingame editor of executable items" 
                        className="shadow-black shadow-2xl"/>
                </div>
                <div className="w-3/5 flex flex-col ssomar-tools-section-screen-settings-loadout">
                    <div className="font-minecraft text-center text-5xl mt-5 leading-8 w-2/3 pt-3 ml-auto mr-auto">
                        You want to easily do things related to Ssomar's plugins such as writing FOR LOOPs, writing coordinates, and more?<br />
                    </div>
                    <div id="ssomar-tools-website-redirection-button">
                        <Link to="/ssomar-tools"
                        className="
                        ssomar-tools-button-notActive hover:cursor-pointer
                        hover:bg-gray-400 
                        active:bg-gray-600
                        ">Click Here!</Link>
                    </div>
                </div>
            </div>
        </div>
        <hr className="bg-black h-1"/>
        <div className="w-full h-screen bg-gray-300 -z-10" /> {/*This just fills in untouched/blank areas of the viewport*/}

    </div>

    )
}
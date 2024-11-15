import ssomarPluginsToolsBgImg from '../assets/images/ssomar-tools-website_background-image.png';
import ssomarPluginsToolsImg from '../assets/images/ssomar-tools-website_header-image.png'
import profilePicture from '../assets/images/home-page/profile.jpg';
import { Link } from 'react-router-dom';

export const TestHome = () => {
    return (
    <div>
        <div className="w-full h-screen fixed bg-gray-700 -z-10" /> {/*This just fills in untouched/blank areas of the viewport*/}
        {/*Header Bar*/}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 pb-2 pt-1 text-center font-minecraft sticky top-0 z-50 h-20 flex justify-between w-full shadow-lg shadow-black">
            &nbsp;
            <div className="mr-10">
                <span className="bg-slate-300 text-responsive-regular p-2">Tools</span>
            </div>
        </div>


        <hr className="bg-black h-1 mt-10"/>
        <header className="bg-slate-900">
            <div className="w-4/5 p-5 responsive-flex-direction viewport<=910px:m-auto">
                <div className="mt-10 mb-10">
                    <img src={profilePicture} className="w-1/2 self-center m-auto rounded-3xl shadow-lg shadow-black" />
                </div>
                <div className="w-full text-center pl-2 pr-2 self-center mb-10">
                    <span className="text-white font-host-grotesk text-responsive-regular">Special70</span>
                    <hr className="bg-black h-1"/>
                    <span className="text-white font-host-grotesk text-responsive-small">
                        Hello! I'm mainly a programmer who can work with multiple programming languages. I'm also into drawing and gaming

                    </span>
                </div>
            </div>
        </header>
        <hr className="bg-black h-1"/>

        <div className="w-4/5 bg-slate-900 m-auto block mt-20 mb-20 border-2 border-white">
            {/*Github Repos*/}
            <div>
                <div className="text-center text-responsive-regular text-white font-host-grotesk">Github Repositories</div>
            </div>
        </div>

        <hr className="bg-black h-1 mt-10"/>
        <div className="w-auto flex flex-col pb-4 relative" id="ssomar-plugins-tools-website">
            <img src={ssomarPluginsToolsBgImg} className="-z-10 h-auto opacity-50 min-h-full absolute" />
            <div className="text-center font-minecraft text-responsive-large text-white">
                Ssomar Plugins Tools
            </div>
            <div className="responsive-flex-direction">
                <div className="w-2/5 viewport<=910px:w-4/5 p-5 ml-5 ssomar-tools-section-screen-settings-loadout">
                    <img src={ssomarPluginsToolsImg} alt="Image showcasing the ingame editor of executable items" 
                        className="shadow-black shadow-2xl"/>
                </div>
                <div className="w-3/5 flex flex-col ssomar-tools-section-screen-settings-loadout">
                    <div className="font-minecraft text-center text-5xl mt-5 leading-8 w-2/3 pt-3 ml-auto mr-auto text-white">
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
        <div className="w-full h-screen bg-gray-700 -z-10" /> {/*This just fills in untouched/blank areas of the viewport*/}

    </div>

    )
}
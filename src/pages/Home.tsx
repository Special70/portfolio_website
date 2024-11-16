import ssomarPluginsToolsBgImg from '../assets/images/ssomar-tools-website_background-image.png';
import ssomarPluginsToolsImg from '../assets/images/ssomar-tools-website_header-image.png'
import profilePicture from '../assets/images/home-page/profile.jpg';
import ghub_repo_1 from '../assets/images/home-page/ghub-repo-1.png'
import ghub_repo_2 from '../assets/images/home-page/ghub-repo-2.png'
import ghub_repo_3 from '../assets/images/home-page/ghub-repo-3.png'
import { Link } from 'react-router-dom';

export const Home = () => {

    return (
    <div>
        <div className="w-full h-screen fixed bg-gray-700 -z-10" /> {/*This just fills in untouched/blank areas of the viewport*/}
        {/*Header Bar*/}
        <div className="bg-gradient-to-r from-slate-700 to-slate-900 pb-2 pt-1 text-center font-minecraft sticky top-0 z-50 h-20 flex justify-between w-full shadow-lg shadow-black">
            &nbsp;
            <div>
                <div className="relative group">
                <div className="text-responsive-regular pr-10 pl-10 text-white">
                    Tools
                </div>

                <div className="absolute transition-opacity duration-500 opacity-0 right-0 mt-1 top-full mb-2 group-hover:opacity-100 bg-gray-800 text-responsive-regular rounded-lg px-3 py-2 whitespace-nowrap p-3">
                    <span className="cursor-pointer duration-200 hover:text-blue-300 transition-colors text-white" onClick={()=>{
                        document.getElementById("anchor_ssomar-plugins-tools-website")?.scrollIntoView({ behavior: 'smooth' });
                    }}>Ssomar Plugins Tools</span>
                </div>
                </div>
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
                <div className="w-auto ml-10 mr-10 mb-5 mt-5 grid-cols-1 grid-rows-2 grid viewport<=910px:grid-cols-1 border-2 border-slate-500">

                    <div className="grid grid-cols-2 viewport<=910px:grid-cols-1 viewport<=910px:grid-rows-2">
                    <div className="text-center pl-2 pr-2">
                        <span className="text-responsive-regular font-host-grotesk text-white">Ssomar Plugins Tools</span>
                        <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0 mb-3" />
                        <img src={ghub_repo_1} className="w-2/3 m-auto shadow-lg shadow-black mb-4 transition ease-in-out hover:scale-105 cursor-pointer" onClick={()=>{
                            const url = "https://github.com/Special70/java___Ssomar_Plugins_Tools"; // Replace with your desired URL
                            window.open(url, "_blank", "noopener,noreferrer");
                        }}/>
                        <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0" />
                        <span className="text-responsive-small font-host-grotesk text-white">A Javax Swing based project that mainly features options that deals with modifying item config. This project showcases my capability in writing GUI-based programs and writing sizeable projects</span>
                    </div>
                    <div className="text-center pl-2 pr-2">
                        <span className="text-responsive-regular font-host-grotesk text-white">Food App Simulator</span>
                        <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0 mb-3" />
                        <img src={ghub_repo_2} className="w-2/3 m-auto shadow-lg shadow-black mb-4 transition ease-in-out hover:scale-105 cursor-pointer" onClick={()=>{
                            const url = "https://github.com/Special70/python___Sample-Food-Ordering-Program"; // Replace with your desired URL
                            window.open(url, "_blank", "noopener,noreferrer");
                        }}/>
                        <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0" />
                        <span className="text-responsive-small font-host-grotesk text-white">A Python console-based project that relies on keyboard inputs to perform actions. This project showcases my capability in writing very complex code and being able to work around with visual limitations in a console-based program</span>
                    </div>
                    </div>

                    <div className="text-center pl-2 pr-2">
                        <span className="text-responsive-regular font-host-grotesk text-white">Console Turn-Based Game</span>
                        <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0 mb-3" />
                        <img src={ghub_repo_3} className="w-2/3 m-auto shadow-lg shadow-black mb-4 transition ease-in-out hover:scale-105 cursor-pointer" onClick={()=>{
                            const url = "https://github.com/Special70/python___Turn-Based-Game"; // Replace with your desired URL
                            window.open(url, "_blank", "noopener,noreferrer");
                        }}/>
                        <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0" />
                        <span className="text-responsive-small font-host-grotesk text-white">A Python console-based project that accepts keyboard hits for inputs while having its keybinds configurable. This project showcases my capability in writing systems such as simple opponent AI by randomizing potential enemy choice while considering conditions and supports 2-player gaming. This program is also written in a way where it's easy to create new skills and effects and give them cooldowns too.</span>
                    </div>

                </div>
            </div>
        </div>

        <hr className="bg-black h-1 mt-10"/>
        <div className="w-auto flex flex-col pb-4 relative">
            <img src={ssomarPluginsToolsBgImg} className="-z-10 h-auto opacity-50 min-h-full absolute" />
            <div className="text-center font-minecraft text-responsive-large text-white" id="ssomar-plugins-tools">
                <div className="absolute -top-20" id="anchor_ssomar-plugins-tools-website">&nbsp;</div> {/*For proper view when scrolling down*/}
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
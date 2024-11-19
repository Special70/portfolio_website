
import profilePicture from '../assets/images/home-page/profile.png';
import stockimg000 from '../assets/images/home-page/stockimg000.png'
import { Home_SsomarPluginsTools } from './homepage-components/Home_SsomarPluginsTools';
import { Home_GithubRepos } from './homepage-components/Home_GithubRepos';
import { Home_SocialLinks } from './homepage-components/Home_SocialLinks';
//import { Home_UnseriousRolldown } from './homepage-components/Home_UnseriousRolldown';

export const Home = () => {


    return (
    <div className="relative" id="top">
        <div className="w-full h-screen fixed bg-gray-700 -z-10" /> {/*This just fills in untouched/blank areas of the viewport*/}
        {/*Header Bar*/}
        <div className="bg-gradient-to-r from-slate-800 to-slate-900 pb-2 pt-1 text-center font-minecraft sticky top-0 z-50 h-20 flex justify-between w-full shadow-lg shadow-black">
            &nbsp;
            {/*<div className="text-responsive-regular pr-10 pl-10 text-white hover:scale-110 transition hover:cursor-pointer active:scale-100"
            onClick={()=>{
                document.getElementById("unserious")?.classList.toggle('-translate-y-[200%]')    
            }}
            >
                Tired of formal portfolios? Click Here!
                
            </div>*/}
            <div>
                <div className="flex flex-row">
                    <div className="relative group">
                        <div className="text-responsive-regular pr-10 pl-10 text-white"
                        onMouseMove={()=>{
                            const targetElement = document.getElementById("hover1");
                            if (targetElement) {
                                targetElement.style.display = "block";
                            }
                        }}
                        onMouseLeave={()=>{
                            const targetElement = document.getElementById("hover1");
                            if (targetElement) {
                                targetElement.style.display = "none";
                            }
                        }}>
                            About
                        </div>

                        <div className="absolute right-0 top-full mb-2 bg-gray-800 text-responsive-regular rounded-lg px-3 py-2 whitespace-nowrap p-3 z-10 hidden shadow-lg shadow-black" id="hover1" 
                        
                        onMouseMove={()=>{
                            const targetElement = document.getElementById("hover1");
                            if (targetElement) {
                                targetElement.style.display = "block";
                            }
                        }}
                        onMouseLeave={()=>{
                            const targetElement = document.getElementById("hover1");
                            if (targetElement) {
                                targetElement.style.display = "none";
                            }
                        }}>
                            <div className="flex flex-col">
                            <span className="cursor-pointer duration-200 hover:text-blue-300 transition-colors text-white" onClick={()=>{
                                document.getElementById("anchor_social-links")?.scrollIntoView({ behavior: 'smooth' });
                            }}>Social Links</span>
                            <span className="cursor-pointer duration-200 hover:text-blue-300 transition-colors text-white" onClick={()=>{
                                document.getElementById("anchor_github-repositories")?.scrollIntoView({ behavior: 'smooth' });
                            }}>Github Repositories</span>
                            </div>
                        </div>
                    </div>
                    <div className="relative group">
                        <div className="text-responsive-regular pr-10 pl-10 text-white"
                        onMouseMove={()=>{
                            const targetElement = document.getElementById("hover2");
                            if (targetElement) {
                                targetElement.style.display = "block";
                            }
                        }}
                        onMouseLeave={()=>{
                            const targetElement = document.getElementById("hover2");
                            if (targetElement) {
                                targetElement.style.display = "none";
                            }
                        }}>
                            Tools
                        </div>

                        <div className="absolute right-0 top-full mb-2 bg-gray-800 text-responsive-regular rounded-lg px-3 py-2 whitespace-nowrap p-3 z-0 hidden shadow-lg shadow-black" id="hover2"
                        onMouseMove={()=>{
                            const targetElement = document.getElementById("hover2");
                            if (targetElement) {
                                targetElement.style.display = "block";
                            }
                        }}
                        onMouseLeave={()=>{
                            const targetElement = document.getElementById("hover2");
                            if (targetElement) {
                                targetElement.style.display = "none";
                            }
                        }}>
                            <span className="cursor-pointer duration-200 hover:text-blue-300 transition-colors text-white" onClick={()=>{
                                document.getElementById("anchor_ssomar-plugins-tools-website")?.scrollIntoView({ behavior: 'smooth' });
                            }}>Ssomar Plugins Tools</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {/*<div className="inset-0 items-center justify-center z-50 absolute -top-40 w-full"> 
            <Home_UnseriousRolldown />
        </div>*/}

        <hr className="bg-black h-1 mt-10"/>
        <header className="relative z-20">
            <div className="w-4/5 p-5 responsive-flex-direction viewport<=910px:m-auto z-10">
                <div className="mt-10 mb-10">
                    <img src={profilePicture} className="w-1/2 self-center m-auto rounded-3xl shadow-lg shadow-black" />
                </div>
                <div className="w-full text-center pl-2 pr-2 self-center mb-10 ">
                    <span className="text-white font-host-grotesk text-responsive-regular">Josef Miko Urquico</span>
                    <hr className="bg-black h-1"/>
                    <span className="text-white font-host-grotesk text-responsive-small">
                        Hello! I'm mainly a programmer who can work with multiple programming languages. I'm also into drawing and gaming

                    </span>
                </div>
            </div>
            <img src={stockimg000} className="absolute -z-10 h-full w-full top-0" />
            <div className="absolute -z-10 h-full w-full opacity-90 top-0 bg-slate-900" />
        </header>

        <hr className="bg-black h-1"/>
        <Home_SocialLinks />
            
        <Home_GithubRepos />

        <hr className="bg-black h-1 mt-10"/>
        <Home_SsomarPluginsTools />
        <hr className="bg-black h-1"/>
        <div className="h-20"></div>

        <img className="absolute -z-10 h-full w-full top-0 bg-programmer opacity-10" /> {/*Applies the programmer pattern in the entire bg*/}
    </div>

    )
}
import ghub_repo_1 from '../../assets/images/home-page/ghub-repo-1.png'
import ghub_repo_2 from '../../assets/images/home-page/ghub-repo-2.png'
import ghub_repo_3 from '../../assets/images/home-page/ghub-repo-3.png'
import stockimg002 from '../../assets/images/home-page/stockimg002.png'
import stockimg003 from '../../assets/images/home-page/stockimg003.png'
import stockimg004 from '../../assets/images/home-page/stockimg004.png'

export const Home_GithubRepos = () => {
    return (
    <>
    <div id="anchor_github-repositories" className="bg-slate-100 opacity-0">a</div>
    <div className="w-4/5 m-auto block mt-20 mb-20 border-2 border-white relative z-20" id="github-repositories">
        
    {/*Github Repos*/}
    <div>
        <div className="text-center text-responsive-regular text-white font-host-grotesk">Github Repositories</div>
        <div className="w-auto ml-10 mr-10 mb-5 mt-5 border-2 border-slate-500">

            <div className="flex flex-wrap justify-center">
                <div className="text-center pl-2 pr-2" style={{maxWidth: 500}}>
                    <span className="text-responsive-regular font-host-grotesk text-white whitespace-nowrap">Ssomar Plugins Tools</span>
                    <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0 mb-3" />
                    <img src={ghub_repo_1} className="w-2/3 m-auto shadow-lg shadow-black mb-4 hover-button-increase active:opacity-50" onClick={()=>{
                        const url = "https://github.com/Special70/java___Ssomar_Plugins_Tools"; // Replace with your desired URL
                        window.open(url, "_blank", "noopener,noreferrer");
                    }}/>
                    <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0" />
                    <span className="text-responsive-small font-host-grotesk text-white">A Javax Swing based project that mainly features options that deals with modifying item config. This project showcases my capability in writing GUI-based programs and writing sizeable projects</span>
                </div>
                <div className="text-center pl-2 pr-2"  style={{maxWidth: 500}}>
                    <span className="text-responsive-regular font-host-grotesk text-white whitespace-nowrap">Food App Simulator</span>
                    <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0 mb-3" />
                    <img src={ghub_repo_2} className="w-2/3 m-auto shadow-lg shadow-black mb-4 hover-button-increase active:opacity-50" onClick={()=>{
                        const url = "https://github.com/Special70/python___Sample-Food-Ordering-Program"; // Replace with your desired URL
                        window.open(url, "_blank", "noopener,noreferrer");
                    }}/>
                    <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0" />
                    <span className="text-responsive-small font-host-grotesk text-white">A Python console-based project that relies on keyboard inputs to perform actions. This project showcases my capability in writing very complex code and being able to work around with visual limitations in a console-based program</span>
                </div>
                
                <div className="text-center pl-2 pr-2" style={{maxWidth: 500}}>
                    <span className="text-responsive-regular  font-host-grotesk text-white whitespace-nowrap">Console Turn-Based Game</span>
                    <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0 mb-3" />
                    <img src={ghub_repo_3} className="w-2/3 m-auto shadow-lg shadow-black mb-4 hover-button-increase active:opacity-50" onClick={()=>{
                        const url = "https://github.com/Special70/python___Turn-Based-Game"; // Replace with your desired URL
                        window.open(url, "_blank", "noopener,noreferrer");
                    }}/>
                    <hr className="bg-slate-100 h-1 w-3/4 m-auto border-0" />
                    <span className="text-responsive-small font-host-grotesk text-white">A Python console-based project that accepts keyboard hits for inputs while having its keybinds configurable. This project showcases my capability in writing systems such as simple opponent AI by randomizing potential enemy choice while considering conditions and supports 2-player gaming. This program is also written in a way where it's easy to create new skills and effects and give them cooldowns too.</span>
                </div>
            </div>


        </div>
    </div>
    
    <div className="absolute -z-10 w-full top-0 h-full opacity-40">
        <img src={stockimg002} className="h-1/3 w-full" />
        <img src={stockimg003} className="h-1/3 w-full" />
        <img src={stockimg004} className="h-1/3 w-full" />
    </div>
    <div className="absolute -z-10 h-full w-full opacity-90 top-0 bg-slate-900" />
</div></>
)
}
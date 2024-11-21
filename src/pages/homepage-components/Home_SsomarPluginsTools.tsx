
import { Link } from 'react-router-dom';
import ssomarPluginsToolsBgImg from '../../assets/images/ssomar-tools-website_background-image.png';
import ssomarPluginsToolsImg from '../../assets/images/ssomar-tools-website_header-image.png'
export const Home_SsomarPluginsTools = () => {
    return (
        <div className="w-auto flex flex-col pb-4 relative z-20">
            <img src={ssomarPluginsToolsBgImg} className="-z-10 h-full opacity-20 absolute w-full" />
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
            <div className="absolute bg-slate-900 opacity-100 -z-30 w-full h-full" />
        </div>)
}
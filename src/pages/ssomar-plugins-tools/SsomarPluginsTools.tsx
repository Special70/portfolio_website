import backgroundImage from '../../assets/images/ssomar-tools-website_main_background-image.png'
import SCoreLogo from '../../assets/images/ssomar-tools-website/SCore.png'
import EILogo from '../../assets/images/ssomar-tools-website/ExecutableItems.jpg'
import EBLogo from '../../assets/images/ssomar-tools-website/ExecutableBlocks.jpg'
import EELogo from '../../assets/images/ssomar-tools-website/ExecutableEvents.jpg'

import { Link } from 'react-router-dom'

export const SsomarPluginsTools = () => {

    return (
        <>
        <div className="w-screen h-screen bg-black fixed -z-50">
            <img src={backgroundImage} className="w-screen h-screen bg-black fixed -z-50 opacity-30 min-w-910px" />
        </div>
        <div className="mt-20">&nbsp;</div>
        <div className="font-minecraft text-5xl text-white bg-gradient-to-r from-sky-800 to-indigo-500 text-center p-5 border-b-8 border-blue-500 fixed w-screen z-50 top-0">Ssomar Plugins Tools</div>
        <div className="w-1/4 block m-auto">
            <Link className="" to="/">
            <div className="backbutton-notActive items-center relative">
                <div className="button-color-change-interaction">&nbsp;</div>
                <div className="w-3/4 font-minecraft text-6xl  viewport<=910px:text-5xl">Back</div>
            </div>
            </Link>
        </div>
        <div id="buttonList" className="w-1/2 block m-auto h-screen">
            <Link className="" to="/ssomar-tools/score">
            <div className="score-button-notActive items-center relative">
                <div className="button-color-change-interaction">&nbsp;</div>
                <img src={SCoreLogo} className="w-24 h-24 viewport<=1000px:hidden"/><div className="w-3/4 font-minecraft text-6xl viewport<=910px:text-5xl">SCore Commands Editor<p className="text-3xl leading-7">For assisting users in using SCore commands such as RANDOM RUN and command generators for specific purposes</p></div>
            </div>
            </Link>
            <Link className="" to="">
            <div className="executableitems-button-notActive items-center relative">
                <div className="button-color-change-interaction">&nbsp;</div>
                <img src={EILogo} className="w-24 h-24 viewport<=1000px:hidden"/><div className="w-3/4 font-minecraft text-6xl  viewport<=910px:text-5xl">ExecutableItems Editor<p className="text-3xl">For easily creating specific custom items (WIP)</p></div>
            </div>
            </Link>
            <Link className="" to="">
            <div className="executableblocks-button-notActive items-center relative">
                <div className="button-color-change-interaction">&nbsp;</div>
                <img src={EBLogo} className="w-24 h-24 viewport<=1000px:hidden"/><div className="w-3/4 font-minecraft text-6xl  viewport<=910px:text-5xl">ExecutableBlocks Editor<p className="text-3xl">For ExecutableBlock-related features such as Around Block Conditions and more (WIP)</p></div>
            </div>
            </Link>
            <Link className="" to="">
            <div className="executableevents-button-notActive items-center relative">
                <div className="button-color-change-interaction">&nbsp;</div>
                <img src={EELogo} className="w-24 h-24 viewport<=1000px:hidden"/><div className="w-3/4 font-minecraft text-6xl  viewport<=910px:text-5xl">ExecutableEvents Editor<p className="text-3xl">For assisting users on creating complex event files with a website editor for less effort (WIP)</p></div>
            </div>
            </Link>
        </div>
        </>
    )
}



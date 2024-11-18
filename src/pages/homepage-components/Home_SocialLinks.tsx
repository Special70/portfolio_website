
import { useState } from 'react';
import linkedin_icon from '../../assets/images/home-page/linkedin.png'
import github_icon from '../../assets/images/home-page/github.png'
import gmail_icon from '../../assets/images/home-page/gmail.png'
import stockimg001 from '../../assets/images/home-page/stockimg001.png'

export const Home_SocialLinks = () => {
    
    // For smooth ease-out for the div
    const [bottomDivVisibility, setBottomDivVisibility] = useState(0)
    const [bottomDivText, setBottomDivText] = useState<string>("")

    let fadeTimeout: number;
    
    async function displayBottomDivTemporarily() {
        setBottomDivVisibility(100);
        if (fadeTimeout) {
          clearTimeout(fadeTimeout);
        }
    
        // Set a new timeout to fade out after 3 seconds
        fadeTimeout = setTimeout(() => {
            setBottomDivVisibility(0)
        }, 5000); // Fade out after 5 seconds (adjust as needed)
    }

    return (
        <>
        
        <div className={`fixed bottom-10 right-1/4 w-1/2 bg-green-300 text-black font-host-grotesk text-center py-4 shadow-lg shadow-black z-30 transition-opacity duration-1000 opacity-${bottomDivVisibility}`} id="bottomDiv">
            {bottomDivText}
        </div>
        <div id="anchor_social-links" className="bg-slate-100 opacity-0">a</div>
        <div className="w-4/5 h-auto m-auto mt-20 mb-20 border-2 border-white viewport<=910px:w-3/4 relative z-20" id="social-links">
            <div className="text-white text-center font-host-grotesk text-responsive-regular">Social Links</div>
            <div className="text-white text-center font-host-grotesk text-responsive-small underline">Click one of the icons to copy the link</div>
            <div className="m-auto w-full grid grid-cols-3 grid-rows-1 viewport<=910px:grid-rows-3 viewport<=910px:grid-cols-1 p-10 gap-10">
                <figure className="hover-button-increase active:opacity-50"
                onClick={()=>{
                    setBottomDivText("Linkedin Profile Link Copied!")
                    displayBottomDivTemporarily()
                    navigator.clipboard.writeText("https://www.linkedin.com/in/josef-miko-urquico-326954174/");
                }}
                ><img src={linkedin_icon} className="w-1/4 h-auto block m-auto"/><figcaption className="text-white text-center font-host-grotesk text-responsive-small">Linkedin</figcaption></figure>
                <figure className="hover-button-increase active:opacity-50"
                onClick={()=>{
                    setBottomDivText("Github Profile Link Copied!")
                    displayBottomDivTemporarily()
                    navigator.clipboard.writeText("https://github.com/Special70");
                }}
                ><img src={github_icon} className="w-1/4 h-auto block m-auto"/><figcaption className="text-white text-center font-host-grotesk text-responsive-small">Github</figcaption></figure>
                <figure className="hover-button-increase active:opacity-50"
                onClick={()=>{
                    setBottomDivText("Gmail Address Copied!")
                    displayBottomDivTemporarily()
                    navigator.clipboard.writeText("josefmikourquico.business@gmail.com");
                }}><img src={gmail_icon} className="w-1/4 h-auto block m-auto"/><figcaption className="text-white text-center font-host-grotesk text-responsive-small">Gmail</figcaption></figure>
            </div>
        
            <img src={stockimg001} className="absolute -z-10 h-full w-full top-0" />
            <div className="absolute -z-10 h-full w-full opacity-90 top-0 bg-slate-900" />
        </div>
        
        </>)
}
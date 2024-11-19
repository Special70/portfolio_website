import pic_ricardo_milos from '../../assets/images/home-page/unserious_assets/ricardo-milos.jfif'
import profilepic from '../../assets/images/home-page/unserious_assets/profile.png'
import woman_squarehole from '../../assets/images/home-page/unserious_assets/squarehole.png'
import feixiao from '../../assets/images/home-page/unserious_assets/would.webp'
import technoblade from '../../assets/images/home-page/unserious_assets/technoblade.jpg'
import terraria from '../../assets/images/home-page/unserious_assets/terraria.jpg'
import myDrawing from '../../assets/images/home-page/unserious_assets/mydrawing.png'
import passenger from '../../assets/images/home-page/unserious_assets/passenger.jfif'
import gabriel from '../../assets/images/home-page/unserious_assets/gabriel.webp'
import chainedSoldier from '../../assets/images/home-page/unserious_assets/chained_soldier.webp'


export const Home_UnseriousRolldown = () => {
    return (
        <>
        
    <div className="w-4/5 m-auto block z-50 self-center top-0 transition-transform duration-700 ease-in-out" id="unserious">
        <div className="bg-yellow-300 w-auto h-100 relative flex flex-row border-l-8 border-r-8 border-slate-500">
            <img src={pic_ricardo_milos} className="h-auto w-auto" />
            <span className="font-comic-sans text-responsive-small">Tired of boring portfolio pages? have this instead</span>
            <img src={feixiao} />
        </div>
        <hr className="bg-black h-5  border-l-8 border-r-8 border-slate-500 border-t-0 border-b-0" />
        <div className="h-auto relative border-l-8 border-r-8 border-slate-500">
            <img src={profilepic} className="block m-auto w-1/4 shadow-lg shadow-black p-10 z-20"/>
            <div className="font-comic-sans text-responsive-regular text-center z-20">Josef Miko Urquico</div>
            <div className="font-comic-sans text-responsive-small text-center z-20">A regular programmer who only took programming because he wanted to become an
                 artist but the world said "you kinda have skill issue in art so have above-average programming talent." "Also you somehow can code 5x longer than you draw"</div>
            <div className="font-comic-sans text-responsive-small text-center z-20">Also sometimes I think I have actual talent in programming but I sometimes forget I actually played minecraft for 
                lots of time especially in redstoning and did some mc server dev work in the past which challenged my fucking brain
            </div>
            <img src={woman_squarehole} className="absolute w-full h-full top-0 -z-9 opacity-20" />
            <div className="bg-yellow-100 h-1/2 absolute w-full top-0 -z-10" />
            <div className="bg-white h-1/2 absolute w-full bottom-0 -z-10" />
        </div>
        
        <hr className="bg-black h-5 w-4/5 m-auto border-l-8 border-r-8 border-slate-500 border-t-0 border-b-0" />
        <div className="bg-slate-300 h-auto border-l-8 border-r-8 border-slate-500">
            <div className="text-responsive-large text-center font-comic-sans">Interests</div>
            <div className="grid grid-rows-2 grid-cols-3 gap-10">
                <div className="text-responsive-regular text-center font-comic-sans m-10">
                    Minecraft
                    <figcaption><img src={technoblade}/>
                    <caption className="text-responsive-small leading-tight w-full block">I like minecraft because it's a sandbox game and redstoning helped build my foundation for my programming skills ig</caption></figcaption>
                </div>
                <div className="text-responsive-regular text-center font-comic-sans m-10">
                    Gaming in general
                    <figcaption><img src={terraria} className="m-auto"/>
                    <caption className="text-responsive-small leading-tight w-full block">I play Terraria and Genshin Impact too</caption></figcaption>
                </div>
                <div className="text-responsive-regular text-center font-comic-sans m-10">
                    Drawing
                    <figcaption><img src={myDrawing} className="m-auto"/>
                    <caption className="text-responsive-small leading-tight w-full block">I like to draw because it helps me solidify my imagination. I dont take commissions and mostly draw 18+ stuff</caption></figcaption>
                </div>
                <div className="text-responsive-regular text-center font-comic-sans m-10">
                    Music
                    <figcaption><img src={passenger} className="m-auto"/>
                    <caption className="text-responsive-small leading-tight w-full block">My main source for ideas for my drawings. I mostly like music that makes my imagination go round</caption></figcaption>
                </div>
                <div className="text-responsive-regular text-center font-comic-sans m-10">
                    Reaction Images
                    <figcaption><img src={gabriel} className="m-auto"/>
                    <caption className="text-responsive-small leading-tight w-full block">Words sometimes cannot describe complex feelings but images can</caption></figcaption>
                </div>
                <div className="text-responsive-regular text-center font-comic-sans m-10">
                    Anime
                    <figcaption><img src={chainedSoldier} className="m-auto"/>
                    <caption className="text-responsive-small leading-tight w-full block">I watch a variety of anime. Nisekoi (season 3 i think) so far made me cry. Also i know what a "cultured anime fan" knows. Lmk if you want to discuss about tags</caption></figcaption>
                </div>
            </div>
        </div>
        <hr className="bg-black h-5 w-4/5 m-auto border-l-8 border-r-8 border-slate-500 border-t-0 border-b-0" />
        <div className="bg-green-200 h-auto border-l-8 border-r-8 border-slate-500 pb-10">
            <div className="text-responsive-large text-center">QA Section</div>
            <div className="bg-green-400 border-2 border-green-900 shadow-lg shadow-black w-4/5 block m-auto font-minecraft text-responsive-regular">
            <ul className="ml-5 mr-5">
                <li> Q : How do you actually behave?</li>
                <li> A : Neatly professional because it's work unless you're open to offwork discussions like hololive :D</li>
                <hr className="bg-black border-black" />
                <li> Q : Do you talk like, a fuck ton?</li>
                <li> A : No. My throat will dry fast</li>
                <hr className="bg-black border-black" />
                <li> Q : How frequently do you get pissed?</li>
                <li> A : Barely. Like, alot of things don't bother me but please do not test. Thank you</li>
                <hr className="bg-black border-black" />
                <li> Q : How fast can you learn something?</li>
                <li> A : If it's something simple, within the day. Framework? At best within a day or two hopefully. Programming Language? I need a week I suppose to be able to play around with it gracefully.</li>
                <hr className="bg-black border-black" />
                <li> Q : Are you open to drinking?</li>
                <li> A : No. Those things taste like shit for me</li>
                <hr className="bg-black border-black" />
                <li> Q : Are you normally this unhinged?</li>
                <li> A : No. Being an adult made me check for so much shit</li>
                <hr className="bg-black border-black" />
                <li> Q : Are you open for friendships?</li>
                <li> A : Yes as long as we have the same interests or hobbies. Expect me to ask for your name multiple times because at some point in my life, it suddenly got hard remembering people</li>
            </ul>
            </div>
        </div>
        <hr className="bg-black h-5 w-4/5 m-auto border-l-8 border-r-8 border-slate-500 border-t-0 border-b-0" />
        <div className="bg-red-200 h-auto p-10">
            <button className="w-3/5 bg-white border-4 border-red-800 text-responsive-regular block m-auto transition opacity-100 hover:scale-110 active:scale-2000 duration-300 "
            onClick={()=>{
                document.getElementById("top")?.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => {
                    document.getElementById("unserious")?.classList.toggle('-translate-y-[200%]')                    
                }, 1000);

            }}>
                I've seen enough. Close this rolldown
            </button>
        </div>
    </div>
        </>
    )
}
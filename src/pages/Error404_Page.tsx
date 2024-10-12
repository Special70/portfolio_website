import {Link} from 'react-router-dom'

export const Error404_Page = () => {
    return (
        <>
        <div className="w-screen h-screen bg-gray-800">
            <div className="block m-auto w-1/2 h-1/2 ">
                <h1 className="text-9xl text-white p-10">404 Not Found</h1>
                <p className="text-5xl text-white text-center p-10">The page you are trying to visit does not exist.</p>
                <Link to="/" className="border-4 text-5xl text-white border-white p-5 block m-auto hover:bg-slate-600 active:bg-slate-900 text-center w-5/6">Click here to go back</Link>
            </div>
        </div>
        </>
    )
}
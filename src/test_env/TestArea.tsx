
const MyComponent = () => {

  return (
    <>
    <div className="border-4 border-black w-1/4 block m-auto text-center mt-5 relative">
      <div className="bg-slate-500 w-full h-full absolute opacity-0 hover:opacity-100 hover:ml-50">Ha</div>
      test
    </div>


    
    <div className="relative flex flex-row group">
      <div className="p-4 bg-blue-500 text-white rounded-lg">
        Hover over me
      </div>

      <div className="mb-2 ml-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap place-self-center">
        This is the tooltip text
      </div>
    </div>
    </>
  );
};

export default MyComponent;
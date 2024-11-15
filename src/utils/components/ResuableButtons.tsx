//type ButtonWithTooltipType = {

//}

export const ButtonWithTooltip = () => {
    // Still up to debate
    return (
    <div className="relative flex flex-row group">
      <div className="p-4 bg-blue-500 text-white rounded-lg">
        Hover over me
      </div>

      <div className="mb-2 ml-2 hidden group-hover:block bg-gray-800 text-white text-sm rounded-lg px-3 py-2 whitespace-nowrap place-self-center">
        This is the tooltip text
      </div>
    </div>
    )
}
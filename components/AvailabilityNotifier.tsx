import { ScriptProps } from "next/script"

interface AvailabilityData {
    availability: boolean
}

export default function AvailabilityNotifier({availability}: AvailabilityData){
    return(
        <div className="flex flex-row w-max px-4 py-[2px] border-2 rounded-full border-violet-600">
            <span className="w-3 h-3 rounded-full bg-lime-400 mt-[6px]"></span>
            <h1 className="pl-2">Available Now!</h1>
        </div>
    )
}
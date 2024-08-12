export default function Navbar() {
    return(
        <div className="flex flex-row text-white text-opacity-75">
            <h1 className="px-2">Game Servers</h1>
            <span className="w-2 h-2 rounded-full bg-white mt-2 opacity-50"></span>
            <h1 className="px-2">Virtual Servers</h1>
            <span className="w-2 h-2 rounded-full bg-white mt-2 opacity-50"></span>
            <h1 className="px-2">Dedicated Servers</h1>
        </div>
    );
}
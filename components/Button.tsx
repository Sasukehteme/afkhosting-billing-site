import Link from "next/link";

interface ButtonProps {
    text: string;
    disabled: boolean;
    border: boolean;
    link: string;
}

export default function Button({text, disabled, border, link}: ButtonProps){
    if (border)
    {
        return(
            <Link href={link} className="w-max">
                <button disabled={disabled} className="px-4 bg-opacity-0 bg-violet-600 border-4 border-violet-600 rounded-md text-white text-opacity-75 h-full transition-all ease-in-out hover:bg-opacity-100 drop-shadow-lg">{text}</button>
            </Link>
        );
    }

    return(
        <Link href={link} className="w-max">
            <button disabled={disabled} className="bg-violet-600 text-white text-opacity-100 rounded-md px-6 border-4 border-violet-600 transition-all ease-in-out hover:bg-opacity-0">{text}</button>
        </Link>
    );
}
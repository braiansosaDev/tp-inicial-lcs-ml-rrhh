import Image from "next/image";

export default function NavBar() {
    return (
        <div className="h-20 px-4 flex justify-between items-center bg-cyan-700">
            <Image 
                src="/logo-ungs.svg"
                alt="Logo"
                width={200}
                height={200}
                className="h-auto"
            />

            <p className="font-bold text-xl">Inicio</p>
        </div>
    )
}
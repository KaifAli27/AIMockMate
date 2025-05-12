import React, {ReactNode} from 'react'
import Link from 'next/link'
import Image from "next/image";

const RootLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="root-layout">
            <nav>
                <Link href="/" className="flex items-center gap-2" >
                    <Image src="/logov2.png" alt="logo" width={82} height={68} />
                    <h2 className="text-primary-100">MockMate</h2>
                </Link>
            </nav>

            {children}


        </div>
    )
}
export default RootLayout

import { ReactNode } from "react";

export default async function AppLayout({children}:{children: ReactNode}) {
    
    return (
        <body>
            <main>
                {children}
            </main>
        </body>
    )
}

import { getServerSession } from "next-auth/next"
import { options } from "../lib/options"
import Provider from "../contexts/clientProvider"

export default async function MintLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode
}) {
    const session = await getServerSession(options)
    return (
        <Provider session={session}>

            <section>
                {/* Include shared UI here e.g. a header or sidebar */}
                {children}
            </section>
        </Provider>
    )
}
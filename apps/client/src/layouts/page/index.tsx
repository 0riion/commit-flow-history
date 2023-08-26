import Header from "../../components/common/header"

interface PageLayoutProps {
    children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <main>
            <Header />
            {children}
            <footer
                // tailwind style for footer
                className="flex items-center justify-center w-full h-48 border-gray-100 dark:border-jacarta-600"
            >
                <a
                    // tailwind style for link
                    className="flex items-center justify-center"
                    href="
                    https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <span className="mr-1">Powered by</span>
                    <h2
                        className="text-md font-bold text-gray-900 dark:text-white"
                    >
                        Julio Flores
                    </h2>
                </a>
            </footer>
        </main>
    )
}

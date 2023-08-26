import Header from "../../components/common/header"

interface PageLayoutProps {
    children: React.ReactNode
}

export default function PageLayout({ children }: PageLayoutProps) {
    return (
        <main>
            <Header />
            {children}
        </main>
    )
}

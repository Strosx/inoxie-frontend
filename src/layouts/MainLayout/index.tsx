import { ReactNode } from "react";
import { Content } from "src/layouts/MainLayout/Content";
import { Footer } from "src/layouts/MainLayout/Footer";
import { Header } from "src/layouts/MainLayout/Header";

type Props = {
    children: ReactNode;
}

const MainLayout = ({ children }: Props): JSX.Element => {
    return (
        <>
            <Header />

            <Content>{children}</Content>

            <Footer />
        </>

    )
}

export default MainLayout;
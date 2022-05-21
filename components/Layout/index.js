import Head from "next/head";
import {Header} from "../Header";
import {Footer} from "../Footer";

export const Layout = (props) => {
    const {children} = props;
    return (
        <>
            <Head>
                <title>Бхакти навигатор</title>
            </Head>

            <Header/>

            <main>
                {children}
            </main>

            <Footer/>
        </>
    )
}

import Header from "./Header";
import Footer from "./Footer";

const index = ({children}) => {
    return (
        <>
            <Header />
            <main className="container-fluid">
                {children}
            </main>
            <Footer/>
        </>
    );
};

export default index;
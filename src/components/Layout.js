import Footer from "./Footer";
import Header from "./Header";

export default function Layout({ children }) {
    const arrowup = {
        position: 'fixed',
        bottom: '12px',
        right: '20px',
        color: '#000',
        cursor: 'pointer',

    }
    const icon = {
        fontSize: '2rem',
    }
 
    const main = {
        flex: '4',
        paddingTop: '10px',
        paddingBottom: '10px',
        backgroundColor: '#fff',
        borderRadius: '5px',
    }
    return (
        <>
            <Header />
            <main style={main}>
                {children}
                <div style={arrowup} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
                    <i style={icon} className="bi bi-arrow-up-circle"></i>
                </div>
            </main>
            <Footer />
        </>
    )

}
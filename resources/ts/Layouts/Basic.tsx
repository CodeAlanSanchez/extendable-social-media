import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

interface Props {
    children?: React.ReactNode;
}

const Basic: React.FC<Props> = ({ children }: Props) => {
    return (
        <>
            <Header />
            {children}
            <Footer />
        </>
    );
};

export default Basic;

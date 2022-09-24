import Footer from "@/Components/Footer";
import Header from "@/Components/Header";

interface Props {
    children: React.ReactNode;
}

const Basic: React.FC<Props> = ({ children }: Props) => {
    return (
        <div>
            <Header />
            {children}
            <Footer />
        </div>
    );
};

export default Basic;

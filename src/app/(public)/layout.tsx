import Footer from "@/components/layout/footer";
import Navbar from "@/components/layout/nav/navbar";

const PublicLayout = ({ children }: LayoutProps<"/">) => {
  return (
    <>
      <Navbar />

      <main className="flex-1">{children}</main>

      <Footer />
    </>
  );
};

export default PublicLayout;

import ButtonToTop from "@/components/ButtonToTop";
import Footer from "@/components/Footer";
import Header from "@/components/Header";
import FloatingContactButtons from "@/components/FloatingContactButtons";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Header />
      {children}
      <FloatingContactButtons />
      <ButtonToTop />
      <Footer />
    </>
  );
}

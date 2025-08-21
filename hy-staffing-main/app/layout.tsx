
import NavBar from "./components/commonLayout/home/NavBar";
import Footer from "./components/commonLayout/home/Footer";
import CommonUserRep from "@/src/components/shears/logInProvider/CommonUserRep";
import ProviderWrapper from "./ProviderWrapper";

const CommonLayout = ({ children }: { children: React.ReactNode }) => {
    return (
 <html lang="en" data-theme="light">
      <body>
      <ProviderWrapper>
         <CommonUserRep>
         <NavBar />
        <main className="h-full ">{children}</main>
        <Footer />
       </CommonUserRep>

      </ProviderWrapper>
        </body>
    </html>
    );
  };
  
  export default CommonLayout;
  
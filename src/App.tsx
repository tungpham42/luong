import MainBrandLogo from "./components/MainBrandLogo";
import SalaryCalculator from "./components/SalaryCalculator";

function App() {
  return (
    <>
      <MainBrandLogo
        logoSrc="/soft-logo.webp"
        mainDomain="soft.io.vn"
        dismissible={false}
        altText="Logo Soft"
      />
      <SalaryCalculator />
    </>
  );
}

export default App;

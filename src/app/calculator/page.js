import Calculator from "@/components/calculator/Calculator";
import CenteredComponent from "@/components/CenteredComponent";
import ResponsiveAppBar from "@/components/ResponsiveAppBar";

export default function CalculatorPage() {
  return (
    <>
      <ResponsiveAppBar></ResponsiveAppBar>
      <CenteredComponent>
        <Calculator></Calculator>
      </CenteredComponent>
      <p>This is the calculator page.</p>
    </>
  );
}
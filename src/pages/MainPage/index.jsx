import MainLayout from "../../components/layout/MainLayout";
import BusinessLocationMap from "./features/BusinessLocationMap";
import BusinessLocationForm from "./features/BusinessLocationForm";

const MainPage = () => {
  return (
    <MainLayout className="lg:gap-20 justify-between">
      <BusinessLocationForm />
      <BusinessLocationMap />
    </MainLayout>
  );
};

export default MainPage;

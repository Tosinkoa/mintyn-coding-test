import DashboardLayout from "@/components/Layouts/DashboardLayout";
import PaymentComponent from "@/components/PagesComponent/Home/Payment/PaymentComponent";
import SalesDetails from "@/components/PagesComponent/Home/SalesDetails/SalesDetails";
import Widget from "@/components/PagesComponent/Home/Widget/Widget";

const Home: React.FC = () => {
  return (
    <DashboardLayout>
      <Widget />
      <SalesDetails />
      <PaymentComponent />
    </DashboardLayout>
  );
};

export default Home;

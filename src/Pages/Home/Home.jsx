import Services from "../../Components/Services/Services";
import MainSlider from "../../Components/Slider/MainSlider";
import Testimonial from "../../Components/Testimonial/Testimonial";
import WhyChooseUs from "../../Components/WhyChooseUs/WhyChooseUs";

const Home = () => {
  return (
    <div>
      <MainSlider />
      <Services />
      <Testimonial />
      <WhyChooseUs />
    </div>
  );
};

export default Home;

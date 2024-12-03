import Image from "next/image";
import ContactUs from "@/app/components/contactUs/ContactUs"
import NewsletterSignup from "@/app/components/NewsletterSignUp/NewsletterSignup"
import Footer from "@/app/components/Footer/Footer"
import TopEventSlider from "@/app/components/TopEventSlider/TopEventSlider"
import UpcomingEventsSlider from "@/app/components/UpcomingEventsSlider/UpcomingEventsSlider"

export default function Home() {
  return (
    <>
    <TopEventSlider />
    <UpcomingEventsSlider />
    <ContactUs />
    <NewsletterSignup />
    <Footer />
    </>
  );
}

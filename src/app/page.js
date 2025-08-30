import AiAssistant from "./components/home/AiAssistant";
import Banner from "./components/home/Banner";
import ClientReviews from "./components/home/ClientReviews";
import FindBy from "./components/home/FindBy";
import HowItWorks from "./components/home/HowItWorks";
import NextStep from "./components/home/NextStep";
import Support from "./components/home/Support";
export default function Home() {
  return (
    <div className="font-sans  min-h-screen ">
      <main>
        <Banner></Banner>
        <FindBy></FindBy>

        <Support></Support>
        <HowItWorks></HowItWorks>
        <AiAssistant></AiAssistant>
        <ClientReviews></ClientReviews>
        <NextStep></NextStep>
      </main>
    </div>
  );
}

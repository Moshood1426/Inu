import LandingContent from "@/components/landing/content/LandingContent";
import LandingIntro from "@/components/landing/intro/LandingIntro";

export default function Home() {
  return (
    <div>
      <div className="small-landing">
        <LandingIntro />
      </div>
      <div className="big-landing">
        <LandingContent />
      </div>
    </div>
  );
}

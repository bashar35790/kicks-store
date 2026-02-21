import HeroSection from "@/components/home/HeroSection";
import { NewDrops } from "@/components/home/NewDrops";
import { CategoriesSection } from "@/components/home/CategoriesSection";
import { ReviewsSection } from "@/components/home/ReviewsSection";
import { NewsletterSection } from "@/components/home/NewsletterSection";

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <NewDrops />
      <CategoriesSection />
      <ReviewsSection />
      <NewsletterSection />
    </>
  );
}

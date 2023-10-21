import HomePageProductCategories from "./HomePageProductCategories";
import HomePageHero from "./HomePageHero";
import HomePageContent from "./HomePageContent";

export default function Homepage() {
    return (
        <div>
            <HomePageHero />
            <HomePageProductCategories />
            <HomePageContent />
        </div>
    )
}
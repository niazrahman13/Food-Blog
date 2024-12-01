import Deliciousness from "./Deliciousness/page";
import HandPick from "./HandPick/page";
import LastRecipes from "./LastRecipes/page";
import PopularCategorues from "./PopularCategories/page";
import SuperDelicious from "./SuperDelicious/page";
import TiramisuDelight from "./TiramisuDelight/page";

export default function Home() {
  return (
    <main class="container mx-auto px-4 mt-[100px]">
      <TiramisuDelight />
      <SuperDelicious />
      <PopularCategorues />
      <Deliciousness />
      <HandPick />
      <LastRecipes />
    </main>
  );
}

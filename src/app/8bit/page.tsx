import Providers from "../providers";
import ArcadePortfolio from "../../components/ArcadePortfolio/ArcadePortfolio";

export const metadata = {
  title: "Андрей Лебедев | 8-BIT RETRO ARCADE PORTFOLIO",
};

export default function EightBitPage() {
  return (
    <Providers>
      <ArcadePortfolio />
    </Providers>
  );
}

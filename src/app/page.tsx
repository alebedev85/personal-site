import ArcadePortfolio from "../features/ArcadePortfolio/ArcadePortfolio";
import Providers from "./providers";

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

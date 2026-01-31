import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { InProgressProject } from "../components/InProgressProject";

export const Project1 = () => {
  return (
    <>
      {/* Pokud nemáš SEO klíč pro tento projekt, můžeš to zatím vynechat nebo dát generic */}
      <SEO routeKey="project1" />

      <InProgressProject></InProgressProject>

      <Footer />
    </>
  );
};

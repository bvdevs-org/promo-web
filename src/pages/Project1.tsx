import { Footer } from "../components/Footer";
import { SEO } from "../components/SEO";
import { InProgressProject } from "../components/InProgressProject";

export const Project1 = () => {
  return (
    <>
      <SEO routeKey="project1" noIndex={true} />

      <InProgressProject></InProgressProject>

      <Footer />
    </>
  );
};

import { Helmet } from "react-helmet-async";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import About from "@/components/About";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { personalInfo } from "@/data/portfolioData";

const Index = () => {
  return (
    <>
      <Helmet>
        <title>{personalInfo.name} | Full Stack Developer Portfolio</title>
        <meta
          name="description"
          content={`${personalInfo.name} - ${personalInfo.title}. ${personalInfo.tagline}. View my projects, skills, and get in touch.`}
        />
        <meta
          name="keywords"
          content="Full Stack Developer, React Developer, Node.js, Web Development, Frontend Developer, Backend Developer, Portfolio"
        />
        <meta name="author" content={personalInfo.name} />
        <meta property="og:title" content={`${personalInfo.name} | Full Stack Developer`} />
        <meta
          property="og:description"
          content={personalInfo.tagline}
        />
        <meta property="og:type" content="website" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${personalInfo.name} | Full Stack Developer`} />
        <meta name="twitter:description" content={personalInfo.tagline} />
        <link rel="canonical" href="https://furkanjemil.dev" />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header />
        <main>
          <Hero />
          <Projects />
          <Skills />
          <About />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
};

export default Index;

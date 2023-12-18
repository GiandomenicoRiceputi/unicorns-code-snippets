import NavbarPage from "@/components/navbar/page";

export default function Home() {
  return (
    <div className="font-sans min-h-screen antialiased bg-primary-50-lightest text-primary-700 leading-normal flex flex-col">
      <NavbarPage />
      {/* Hero Section */}
      <div className="flex items-center justify-center h-screen text-center">
        <div>
          <h1 className="text-5xl font-bold">Hello, I'm Your Name</h1>
          <p className="text-2xl">I'm a full-stack developer</p>
        </div>
      </div>

      {/* About Section */}
      <div
        id="about"
        className="flex items-center justify-center h-screen text-center"
      >
        <div>
          <h2 className="text-4xl font-bold">About Me</h2>
          <p className="text-xl">
            I'm a developer with a passion for building beautiful and functional
            websites and applications.
          </p>
        </div>
      </div>

      {/* Portfolio Section */}
      <div
        id="portfolio"
        className="flex items-center justify-center h-screen text-center"
      >
        <div>
          <h2 className="text-4xl font-bold">My Portfolio</h2>
          <p className="text-xl">Here are some of my recent projects.</p>
        </div>
      </div>

      {/* Contact Section */}
      <div
        id="contact"
        className="flex items-center justify-center h-screen text-center"
      >
        <div>
          <h2 className="text-4xl font-bold">Contact Me</h2>
          <p className="text-xl">I'd love to hear from you!</p>
        </div>
      </div>
    </div>
  );
}

import React from "react";

const About = () => {
  return (
    <div className="w-full min-h-screen bg-gradient-to-br from-[#0f172a] to-[#1e293b] py-16 px-4 flex items-center justify-center my-20 font-[Poppins]">
      <div className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl shadow-2xl max-w-4xl w-full p-8 sm:p-12 text-white">
        <h1 className="text-4xl sm:text-5xl font-bold text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          About Razzly
        </h1>

        <p className="text-lg sm:text-xl leading-relaxed mb-10 text-gray-300">
          <strong className="text-white">Razzly</strong> is a smart and simple
          URL shortener built to help you manage, share, and analyze your links
          effectively. Whether you're sharing content on social media, tracking
          marketing campaigns, or simplifying long URLs, Razzly makes the
          process effortless and reliable.
        </p>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            🔗 What Razzly Offers
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Short & Clean URLs for easy sharing.</li>
            <li>Real-time click tracking & analytics.</li>

            <li>Secure & protected redirection.</li>
            <li>Personal dashboard for managing links.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            🚀 Why Use Razzly?
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>Clean, professional short links.</li>
            <li>Analytics to optimize performance.</li>
            <li>Memorable URLs for branding.</li>
            <li>Privacy-first and ad-free platform.</li>
          </ul>
        </section>

        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            🛠️ Tech Stack
          </h2>
          <ul className="list-disc list-inside space-y-2 text-gray-200">
            <li>
              <strong>Frontend:</strong> React.js + Tailwind CSS
            </li>
            <li>
              <strong>Backend:</strong> Express.js + MongoDB
            </li>
            <li>
              <strong>Authentication:</strong> Firebase Auth
            </li>
            <li>
              <strong>Hosting:</strong> Firebase Hosting
            </li>
          </ul>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-4 text-cyan-400">
            👤 Built by
          </h2>
          <p className="text-lg mb-4 text-gray-300">
            <strong className="text-white">Uthami Rasu</strong>, a passionate
            Full Stack Developer dedicated to crafting clean, scalable web
            experiences.
          </p>
          <ul className="space-y-2">
            <li>
              📧{" "}
              <a
                href="mailto:uthamirasuv@gmail.com"
                className="text-blue-400 hover:underline"
              >
                uthamirasuv@gmail.com
              </a>
            </li>
            <li>
              🔗{" "}
              <a
                href="https://linkedin.com/in/uthami-rasu"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                linkedin.com/in/uthami-rasu
              </a>
            </li>
            <li>
              💻{" "}
              <a
                href="https://github.com/uthami-rasu"
                target="_blank"
                rel="noreferrer"
                className="text-blue-400 hover:underline"
              >
                github.com/uthami-rasu
              </a>
            </li>
          </ul>
        </section>
      </div>
    </div>
  );
};

export default About;

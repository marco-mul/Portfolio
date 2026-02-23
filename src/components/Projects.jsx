import { motion } from "framer-motion";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6 },
};

const staggerContainer = {
  animate: {
    transition: { staggerChildren: 0.1 },
  },
};

export const Projects = () => {
  return (
    // here we wait for the section to be visible before starting the animation,
    // and we only play it once, so it doesn't repeat when we scroll back up
    <motion.section
      id="projects"
      className="projects"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        variants={fadeInUp}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        My Projects
      </motion.h2>
      <motion.div
        className="project-grid"
        variants={staggerContainer}
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
      >
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/noteorious.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <a
            href="https://not-e-orious.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Not(e)orious</h3>
          </a>
          <p>
            An easy-to-use full-stack note-taking app built with Next.js and
            OpenAI integration.
          </p>
          <div className="project-stack">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Supabase</span>
            <span>Prisma</span>
            <span>TailwindCSS</span>
            <span>OpenAI</span>
          </div>
        </motion.div>

        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/job-tracker.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <a
            href="https://job-tracker-beta-two.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Job Tracker</h3>
          </a>
          <p>
            A full-stack job-tracking app that helps you organize your job
            research. Built with Next.js, MongoDB and betterAuth.
          </p>
          <div className="project-stack">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>MongoDB</span>
            <span>Mongoose</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/travel-plan.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <a
            href="https://travel-plan-marco.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <h3>Travel Plan</h3>
          </a>
          <p>
            A full-stack app to organize your travels and plan stop by stop
            itineraries with drag-and-drop feature. Built with Next.js, Neon,
            OAuth and Google Maps API integration.
          </p>
          <div className="project-stack">
            <span>Next.js</span>
            <span>TypeScript</span>
            <span>Neon</span>
            <span>Prisma</span>
            <span>OAuth</span>
            <span>Maps API</span>
            <span>TailwindCSS</span>
          </div>
        </motion.div>
        {/* PORTFOLIO TO BE ADDED IF NEEDED TO BALANCE OUT THE GRID
        <motion.div
          className="project-card"
          variants={fadeInUp}
          whileHover={{ y: -10, transition: { duration: 0.2 } }}
        >
          <motion.div
            className="project-image"
            style={{ backgroundImage: "url('/projects/portfolio.png')" }}
            whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
          />
          <a href="#" target="_blank" rel="noopener noreferrer">
            <h3>Portfolio</h3>
          </a>
          <p>
            A front-end app to share information about me and showcase my most
            recent projects.
          </p>
          <div className="project-stack">
            <span>Vite</span>
            <span>JavaScript</span>
            <span>CSS</span>
            <span>EmailJS</span>
          </div>
        </motion.div> */}
      </motion.div>
    </motion.section>
  );
};

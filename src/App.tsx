import React from 'react';
import { Code2, Gamepad2, Award, Github, Linkedin, Mail, ExternalLink, Brain, Binary, Cpu, Code } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  link?: string;
}

interface Certification {
  name: string;
  issuer: string;
  date: string;
  link?: string;
}

function App() {
  const projects: Project[] = [
    {
      title: "Tedo Bank – Multi-Currency ATM App",
      description: "A conceptual ATM application allowing users to deposit their native currency and receive the equivalent in Indian Rupees—or the other way around. This project simulates the process with currency conversion logic, aiming to simplify and secure(with TFA) transactions for international travelers without needing to visit a bank physically.",
      tech: ["Java", "Tomcat", "JFrame", "OOPS"],
      link: "https://github.com/PandiRaja18/Tedo-bank"
    },
    {
      title: "Nivarsha - Ayurvedic Diet Tracker & Planner",
      description: "Nivarsha is a personalized diet planning application based on Ayurvedic principles. The app includes tracking features for daily intake, meal reminders, and seasonal food insights to promote a balanced lifestyle",
      tech: ["Java", "Flutter", "CNN", "Deep learning", "Firebase","Tensorflow"],
      link: "https://github.com/PandiRaja18/Nivarsha"
    },
    {
      title: "Face Mask Detection System",
      description: "A proof-of-concept project built in a Jupyter Notebook using deep learning and OpenCV. It detects whether individuals are wearing face masks in real-time, ideal for demonstration and research purposes in public health monitoring.",
      tech: ["Python", "TensorFlow", "Image recognition", "CNN"],
      link: "https://github.com/PandiRaja18/ML-Projects/"
    },
    {
      title: "Facial Recognition & Detection with Haar Cascades",
      description: "Implemented face detection and recognition using Haar Cascade Classifiers in a notebook environment. The project explores facial feature extraction and matching through traditional computer vision techniques for basic identity verification.",
      tech: ["Python", "TensorFlow", "Image recognition", "CNN"],
      link: "https://github.com/PandiRaja18/ML-Projects/"
    }
  ];

  const certifications: Certification[] = [
    {
      name: "TensorFlow Developer Professional certificate",
      issuer: "Coursera",
      date: "2021",
      link: "https://coursera.org/share/e29bb9c2f8af240560262823f964bb87?trk=public_profile_see-credential"
    },
    {
      name: "Problem solving and Data Structure using python",
      issuer: "E-Box",
      date: "2021",
      link: "https://app.e-box.co.in/course/previewCourseCompletionCertificate?code=84caf526-6635-4e01-a2d1-3c08cb48e5bb&trk=public_profile_see-credential"
    },
    {
      name: "Problem solving",
      issuer: "HackerRank",
      date: "2021",
      link: "https://www.hackerrank.com/certificates/a71ce43d71dd?trk=public_profile_see-credential"
    },
    {
      name: "Security and Privacy for Big Data",
      issuer: "EIT Digital",
      date: "2021",
      link: "https://www.coursera.org/account/accomplishments/records/VZ34BQ52N874?trk=public_profile_see-credential"
    },
    {
      name: "Algorithm specialization",
      issuer: "Coursera",
      date: "2022 - 2023",
      link: "https://www.coursera.org/account/accomplishments/verify/24PM2XU4K3T6?trk=public_profile_see-credential"
    }
  ];

  const expertise = [
    "Mathematical Optimization",
    "Deep Learning Architecture",
    "AI Ethics & Governance",
    "OOPS",
    "Java",
    "Tensorflow",
    "Pytorch",
    "CPP"
  ];

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0">
          {/* Enhanced gradient background with more vibrant colors */}
          <div className="absolute inset-0 bg-gradient-to-br from-fuchsia-600/40 via-purple-900/30 to-transparent animate-gradient" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-from)_0%,_transparent_60%)] from-violet-500/30" />
          <div className="absolute inset-0 bg-gradient-to-r from-fuchsia-500/10 to-purple-500/10 animate-pulse" />
          
          {/* Cyberpunk-style grid overlay */}
          <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(130,_71,_229,_0.1)_1px,transparent_1px),linear-gradient(to_bottom,rgba(130,_71,_229,_0.1)_1px,transparent_1px)] bg-[size:4rem_4rem]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
          <div className="relative z-10">
            <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-fuchsia-300 via-purple-400 to-violet-500 animate-text-shimmer">
              Pandi Raja P
            </h1>
            <div className="mt-4 space-y-2">
              <p className="text-2xl font-semibold text-purple-200 drop-shadow-lg">
                ML Engineer & Mathematical Virtuoso
              </p>
              <p className="text-lg text-purple-300/90">
                AI Ethicist | Backend Sorcerer (Java Edition) | Deep Learning Architect | Tech Decoder
              </p>
            </div>
            <div className="flex gap-4 mt-8">
              <a href="https://github.com/PandiRaja18" className="text-fuchsia-400 hover:text-purple-400 transition-colors">
                <Github size={24} />
              </a>
              <a href="https://in.linkedin.com/in/pandi-raja-p-043b641a3" className="text-fuchsia-400 hover:text-purple-400 transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="mailto:nwraja01@gmail.com" className="text-fuchsia-400 hover:text-purple-400 transition-colors">
                <Mail size={24} />
              </a>
              <a href="https://www.hackerrank.com/profile/nwraja01" className="text-fuchsia-400 hover:text-purple-400 transition-colors">
                <Code size={24} />
              </a>
              <a href="https://leetcode.com/u/nwraja01/" className="text-fuchsia-400 hover:text-purple-400 transition-colors">
                <Code size={24} />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <section className="py-16 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-fuchsia-900/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-8">
            <Brain className="text-fuchsia-400" size={28} />
            <h2 className="text-3xl font-bold text-fuchsia-400">Projects</h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <a
                key={index}
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-800/50 p-6 rounded-lg border border-fuchsia-900/30 hover:border-fuchsia-500/50 transition-all duration-300 hover:bg-gray-800/70 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.fuchsia.500/40)]"
              >
                <div className="flex justify-between items-start">
                  <h3 className="text-xl font-semibold text-fuchsia-300 group-hover:text-fuchsia-400 transition-colors">
                    {project.title}
                  </h3>
                  <ExternalLink className="text-fuchsia-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
                <p className="mt-2 text-gray-400">{project.description}</p>
                <div className="mt-4 flex flex-wrap gap-2">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="px-2 py-1 text-sm bg-fuchsia-900/30 text-fuchsia-300 rounded">
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Certifications Section */}
      <section className="py-16 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-8">
            <Award className="text-blue-400 animate-pulse" size={28} />
            <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 animate-text-shimmer">
              Certifications
            </h2>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {certifications.map((cert, index) => (
              <a
                key={index}
                href={cert.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group block bg-gray-800/50 p-6 rounded-lg border border-blue-900/30 hover:border-blue-500/50 transition-all duration-300 hover:bg-gray-800/70 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.blue.500/40)]"
              >
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="text-xl font-semibold text-blue-300 group-hover:text-blue-400 transition-colors">
                      {cert.name}
                    </h3>
                    <p className="text-blue-200/80">{cert.issuer}</p>
                    <p className="text-blue-300/60">{cert.date}</p>
                  </div>
                  <ExternalLink className="text-blue-400 opacity-0 group-hover:opacity-100 transition-opacity" size={20} />
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section className="py-16 bg-gray-900/50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/5 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="flex items-center gap-3 mb-8">
            <Cpu className="text-purple-400" size={28} />
            <h2 className="text-3xl font-bold text-purple-400">Core Expertise</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {expertise.map((item, index) => (
              <div key={index} className="bg-gray-800/50 p-6 rounded-lg border border-purple-900/30 hover:border-purple-500/50 transition-all duration-300 hover:shadow-[0_0_2rem_-0.5rem_theme(colors.purple.500/40)]">
                <h3 className="text-xl font-semibold text-purple-300">{item}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
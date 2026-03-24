import React, { useState, useEffect } from 'react';
import { 
  Terminal, Shield, Cloud, Server, Code, MapPin, 
  Mail, Globe, Moon, Sun, Briefcase, Award, ChevronRight, User,
  Mountain, Music, Heart, Train, Car
} from 'lucide-react';

// Custom LinkedIn SVG matching Lucide's style since brand icons were removed in v1.0
const LinkedinIcon = ({ className }) => (
  <svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round" 
    className={className}
  >
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
    <rect width="4" height="12" x="2" y="9" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const App = () => {
  const [darkMode, setDarkMode] = useState(false);

  // Toggle dark mode
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => setDarkMode(!darkMode);

  return (
    <div className={`min-h-screen font-sans selection:bg-stone-300 dark:selection:bg-stone-700 transition-colors duration-300 ${darkMode ? 'dark bg-stone-900 text-stone-300' : 'bg-[#F7F7F6] text-stone-800'}`}>
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#F7F7F6] dark:bg-stone-900 border-b border-stone-200 dark:border-stone-800">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-medium text-lg tracking-tight flex items-center gap-2 text-stone-800 dark:text-stone-200">
            <Terminal className="w-5 h-5" />
            <span>Michael Bailey</span>
          </div>
          <div className="flex items-center gap-6">
            <button 
              onClick={toggleDarkMode} 
              className="p-2 rounded-md bg-stone-200/50 dark:bg-stone-800/50 text-stone-600 dark:text-stone-400 hover:bg-stone-200 dark:hover:bg-stone-800 transition-colors"
              aria-label="Toggle Dark Mode"
            >
              {darkMode ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row gap-12 items-center md:items-start">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-stone-200/70 dark:bg-stone-800 text-stone-700 dark:text-stone-300 text-xs font-medium tracking-wide">
              <Shield className="w-3 h-3" /> Software Engineering & Security Automation
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-stone-900 dark:text-stone-100">
              Making breaches hurt less.
            </h1>
            <p className="text-lg md:text-xl text-stone-600 dark:text-stone-400 leading-relaxed max-w-xl">
              Senior Security Automation Engineer specializing in cloud-native infrastructure, high-availability threat intelligence platforms, and accelerating incident response through code.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="mailto:mbaile18@gmu.edu" className="flex items-center gap-2 px-4 py-2.5 bg-stone-800 dark:bg-stone-200 text-stone-50 dark:text-stone-900 rounded-md font-medium hover:bg-stone-700 dark:hover:bg-stone-300 transition-colors text-sm">
                <Mail className="w-4 h-4" /> Contact Me
              </a>
              <a href="https://www.linkedin.com/in/cybermichael" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-md font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors text-sm">
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://michaelbailey.co" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-stone-200/70 dark:bg-stone-800 text-stone-800 dark:text-stone-200 rounded-md font-medium hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors text-sm">
                <Globe className="w-4 h-4" /> Website
              </a>
            </div>
          </div>
          
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-xl overflow-hidden bg-stone-200 dark:bg-stone-800">
             {/* Replace this URL with your actual headshot */}
             <img src="https://www.linkedin.com/in/cybermichael/?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BI4W8ODguRv%2BW8LUGFz8hVQ%3D%3D" alt="Michael Bailey" className="w-full h-full object-cover filter grayscale contrast-75 brightness-90 hover:contrast-100 hover:brightness-100 transition-all duration-500" />
          </div>
        </section>

        {/* Life & Personal Details Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
            <h2 className="text-xl font-medium tracking-tight text-stone-900 dark:text-stone-100">Life in North Boulder</h2>
            <MapPin className="w-4 h-4 text-stone-400" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Image 1: Nature */}
            <div className="md:col-span-2 relative h-64 md:h-72 rounded-xl overflow-hidden group bg-stone-200 dark:bg-stone-800">
              {/* Replace URL with a photo of you, your wife, or Boulder */}
              <img src="img/us_mtn.jpg" alt="CO Hike" className="w-full h-full object-cover filter contrast-75 brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:contrast-100" />
              <div className="absolute bottom-4 left-4 bg-stone-100 dark:bg-stone-900 px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 text-stone-800 dark:text-stone-200">
                <Mountain className="w-3 h-3" /> Nature & Wellness
              </div>
            </div>
            
            <div className="space-y-4 flex flex-col">
               {/* Image 2: Milo */}
               <div className="relative flex-1 rounded-xl overflow-hidden group bg-stone-200 dark:bg-stone-800 min-h-[130px]">
                 {/* Replace URL with a photo of Milo */}
                 <img src="img/milo.jpg" alt="Milo the dog" className="w-full h-full object-cover filter contrast-75 brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:contrast-100" />
                 <div className="absolute bottom-3 left-3 bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded-md text-xs font-medium text-stone-800 dark:text-stone-200">Milo 🐕</div>
               </div>
               {/* Image 3: Music / Vibe */}
               <div className="relative flex-1 rounded-xl overflow-hidden group bg-stone-200 dark:bg-stone-800 min-h-[130px]">
                 {/* Replace URL with a photo of a bar/music venue you like */}
                 <img src="img/nashville.jpg" alt="Live Music" className="w-full h-full object-cover filter contrast-75 brightness-90 transition-all duration-700 group-hover:scale-105 group-hover:contrast-100" />
                 <div className="absolute bottom-3 left-3 bg-stone-100 dark:bg-stone-900 px-2 py-1 rounded-md text-xs font-medium flex items-center gap-2 text-stone-800 dark:text-stone-200">
                   <Music className="w-3 h-3" /> Local Venues
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-stone-200/50 dark:bg-stone-800/40 rounded-xl p-6 md:p-8">
            <p className="text-stone-700 dark:text-stone-300 leading-relaxed">
              Beyond the code, I live in North Boulder, Colorado with my wife and our dog, Milo. 
              We're in our late 20s and try to strike a balance between prioritizing wellness and nature, 
              and enjoying the local scene with bars and live music. I'm a strong advocate for taking <Train className="w-4 h-4 inline-block mx-1 -mt-1 text-stone-500"/> public transit around town, 
              though our 2024 Hyundai Tucson <Car className="w-4 h-4 inline-block mx-1 -mt-1 text-stone-500"/> is always ready when the mountains call.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
            <h2 className="text-xl font-medium tracking-tight text-stone-900 dark:text-stone-100">Core Capabilities</h2>
            <Code className="w-4 h-4 text-stone-400" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-800 dark:text-stone-200 mb-2">Infrastructure & Cloud</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                Expertise in designing and maintaining infrastructure as code (AWS, GCP). Capable of executing rapid network rebuilds to unblock modern serverless architectures while enforcing consistency and preventing configuration drift.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-800 dark:text-stone-200 mb-2">Automating Code & CI/CD</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                Mastery in developing resilient integrations (Python, Go) employing robust error handling and retries. Proven track record of optimizing CI/CD workflows to minimize deployment failures and accelerate delivery.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-800 dark:text-stone-200 mb-2">Monitoring & Observability</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                Applying proactive monitoring (Datadog) across complex systems to identify process limits and system degradation before they impact operations. Reduced critical service resolution times significantly.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-stone-800 dark:text-stone-200 mb-2">Operational Democratization</h3>
              <p className="text-sm text-stone-600 dark:text-stone-400 leading-relaxed">
                A strong focus on "managing up" and democratizing systems operations so cross-functional staff can confidently support key infrastructure. Known for bridging gaps between intelligence, sales, and engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-stone-200 dark:border-stone-800 pb-2">
            <h2 className="text-xl font-medium tracking-tight text-stone-900 dark:text-stone-100">Experience</h2>
            <Briefcase className="w-4 h-4 text-stone-400" />
          </div>

          <div className="space-y-12 pt-4">
            {/* Role 1 */}
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
              <div className="mb-2 md:mb-0 md:col-span-1 text-sm text-stone-500 font-medium">
                Dec 2021 — Present
              </div>
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">Senior Security Automation Engineer</h3>
                  <p className="text-stone-500 text-sm">Unit 42 by Palo Alto Networks</p>
                </div>
                <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                  <li className="flex gap-2"><span className="text-stone-400 dark:text-stone-600">—</span> <span>Lead engineering for a public-facing threat intelligence API with over 2,000 active consumers, implementing strict automated validation to maintain SLAs.</span></li>
                  <li className="flex gap-2"><span className="text-stone-400 dark:text-stone-600">—</span> <span>Architected and deployed Google Cloud infrastructure rebuilds to unblock modern serverless dataflow pipelines for internal engineering teams.</span></li>
                  <li className="flex gap-2"><span className="text-stone-400 dark:text-stone-600">—</span> <span>Optimized core internal authentication services, drastically reducing latency by 90%+ and increasing resilience against directory outages.</span></li>
                </ul>
              </div>
            </div>
            
            {/* Role 2 */}
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
              <div className="mb-2 md:mb-0 md:col-span-1 text-sm text-stone-500 font-medium">
                Sep 2020 — Dec 2021
              </div>
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">Software Engineer & Consultant</h3>
                  <p className="text-stone-500 text-sm">Unit 42 by Palo Alto Networks</p>
                </div>
                <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                  <li className="flex gap-2"><span className="text-stone-400 dark:text-stone-600">—</span> <span>Contributed to scalable post-merger architectures for Unit 42 Consulting, leveraging GCP and enterprise infrastructure.</span></li>
                  <li className="flex gap-2"><span className="text-stone-400 dark:text-stone-600">—</span> <span>Executed specialized client-facing DFIR investigations focusing on web, AWS, and Linux environments.</span></li>
                </ul>
              </div>
            </div>

            {/* Role 3 */}
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
              <div className="mb-2 md:mb-0 md:col-span-1 text-sm text-stone-500 font-medium">
                May 2016 — Sep 2020
              </div>
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-stone-900 dark:text-stone-100">Security Engineer & Intern</h3>
                  <p className="text-stone-500 text-sm">The Crypsis Group</p>
                </div>
                <ul className="space-y-2 text-sm text-stone-600 dark:text-stone-400">
                  <li className="flex gap-2"><span className="text-stone-400 dark:text-stone-600">—</span> <span>Served as the sole full-time internal security role; built and maintained QA automation, preparing the firm for SOC 2 Type 1 and acquisition audits.</span></li>
                  <li className="flex gap-2"><span className="text-stone-400 dark:text-stone-600">—</span> <span>Led R&D into complex Office 365 BEC forensics, yielding novel access methods for bulk processing activities.</span></li>
                  <li className="flex gap-2"><span className="text-stone-400 dark:text-stone-600">—</span> <span>Developed core evidence processing platforms utilizing Ruby, Docker, AWS (SQS, SNS, S3), and HAProxy, scaling backend forensic collection.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-stone-200 dark:border-stone-800 mt-16 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-stone-500">
          <p>&copy; {new Date().getFullYear()} Michael Bailey. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="https://michaelbailey.co" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">Personal Site</a>
             <a href="https://www.linkedin.com/in/cybermichael" className="hover:text-stone-800 dark:hover:text-stone-200 transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
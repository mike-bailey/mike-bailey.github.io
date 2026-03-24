import React, { useEffect } from 'react';
import { 
  Terminal, Shield, Cloud, Server, Code, MapPin, 
  Mail, Globe, Briefcase, Award, ChevronRight, User,
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
  // Set the document title
  useEffect(() => {
    document.title = "Michael Bailey";
  }, []);

  return (
    // Hardcoded to dark mode classes with a sepia-toned dark palette
    <div className="dark min-h-screen font-sans selection:bg-[#5c4d3c] bg-[#2a241f] text-[#e8dbce]">
      
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-[#2a241f]/95 backdrop-blur-sm border-b border-[#3d342b]">
        <div className="max-w-4xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="font-medium text-lg tracking-tight flex items-center gap-2 text-[#f4efe8]">
            <Terminal className="w-5 h-5 text-[#c2a381]" />
            <span>Michael Bailey</span>
          </div>
          {/* Theme toggle removed */}
        </div>
      </nav>

      <main className="max-w-4xl mx-auto px-6 py-16 space-y-24">
        
        {/* Hero Section */}
        <section className="flex flex-col-reverse md:flex-row gap-12 items-center md:items-start">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-[#3d342b] text-[#d6bfa3] border border-[#4a4035] text-xs font-medium tracking-wide">
              <Shield className="w-3 h-3" /> Software Engineering & Security Automation
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#f4efe8]">
              Making breaches hurt less.
            </h1>
            <p className="text-lg md:text-xl text-[#b8a694] leading-relaxed max-w-xl">
              Senior Security Automation Engineer specializing in cloud-native infrastructure, high-availability threat intelligence platforms, and accelerating incident response through code.
            </p>
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <a href="mailto:me@michaelbailey.co" className="flex items-center gap-2 px-4 py-2.5 bg-[#e8dbce] text-[#2a241f] rounded-md font-medium hover:bg-[#f4efe8] transition-colors text-sm">
                <Mail className="w-4 h-4" /> Contact Me
              </a>
              <a href="https://www.linkedin.com/in/cybermichael" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#3d342b] text-[#e8dbce] border border-[#4a4035] rounded-md font-medium hover:bg-[#4a4035] transition-colors text-sm">
                <LinkedinIcon className="w-4 h-4" /> LinkedIn
              </a>
              <a href="https://michaelbailey.co" target="_blank" rel="noreferrer" className="flex items-center gap-2 px-4 py-2.5 bg-[#3d342b] text-[#e8dbce] border border-[#4a4035] rounded-md font-medium hover:bg-[#4a4035] transition-colors text-sm">
                <Globe className="w-4 h-4" /> Website
              </a>
            </div>
          </div>
          
          <div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-xl overflow-hidden bg-[#3d342b] border border-[#4a4035]">
             {/* Replace this URL with your actual headshot */}
             <img src="img/mike.jpg" alt="Michael Bailey" className="w-full h-full object-cover filter sepia-[.3] contrast-125 brightness-90 hover:sepia-0 hover:contrast-100 transition-all duration-500" />
          </div>
        </section>

        {/* Life & Personal Details Grid */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#3d342b] pb-2">
            <h2 className="text-xl font-medium tracking-tight text-[#f4efe8]">Life in North Boulder</h2>
            <MapPin className="w-4 h-4 text-[#8a7968]" />
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {/* Image 1: Nature */}
            <div className="md:col-span-2 relative h-64 md:h-72 rounded-xl overflow-hidden group border border-[#4a4035] bg-[#3d342b]">
              <img src="img/us_mtn.jpg" alt="CO Hike" className="w-full h-full object-cover filter sepia-[.4] contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-90" />
              <div className="absolute bottom-4 left-4 bg-[#2a241f]/90 backdrop-blur-sm border border-[#4a4035] px-3 py-1.5 rounded-md text-xs font-medium flex items-center gap-2 text-[#e8dbce]">
                <Mountain className="w-3 h-3 text-[#c2a381]" /> Nature & Wellness
              </div>
            </div>
            
            <div className="space-y-4 flex flex-col">
               {/* Image 2: Milo */}
               <div className="relative flex-1 rounded-xl overflow-hidden group border border-[#4a4035] bg-[#3d342b] min-h-[130px]">
                 <img src="img/milo.jpg" alt="Milo the dog" className="w-full h-full object-cover filter sepia-[.4] contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-90" />
                 <div className="absolute bottom-3 left-3 bg-[#2a241f]/90 backdrop-blur-sm border border-[#4a4035] px-2 py-1 rounded-md text-xs font-medium text-[#e8dbce]">Milo 🐕</div>
               </div>
               {/* Image 3: Music / Vibe */}
               <div className="relative flex-1 rounded-xl overflow-hidden group border border-[#4a4035] bg-[#3d342b] min-h-[130px]">
                 <img src="img/nashville.jpg" alt="Live Music" className="w-full h-full object-cover filter sepia-[.4] contrast-125 brightness-75 transition-all duration-700 group-hover:scale-105 group-hover:sepia-0 group-hover:contrast-100 group-hover:brightness-90" />
                 <div className="absolute bottom-3 left-3 bg-[#2a241f]/90 backdrop-blur-sm border border-[#4a4035] px-2 py-1 rounded-md text-xs font-medium flex items-center gap-2 text-[#e8dbce]">
                   <Music className="w-3 h-3 text-[#c2a381]" /> Local Venues
                 </div>
               </div>
            </div>
          </div>

          <div className="bg-[#302a24] border border-[#3d342b] rounded-xl p-6 md:p-8">
            <p className="text-[#b8a694] leading-relaxed">
              Beyond the code, I live in North Boulder, Colorado with my wife and our dog, Milo. 
              We're in our late 20s and try to strike a balance between prioritizing wellness and nature, 
              and enjoying the local scene with bars and live music. I'm a strong advocate for taking <Train className="w-4 h-4 inline-block mx-1 -mt-1 text-[#8a7968]"/> public transit around town, 
              though our 2024 Hyundai Tucson <Car className="w-4 h-4 inline-block mx-1 -mt-1 text-[#8a7968]"/> is always ready when the mountains call.
            </p>
          </div>
        </section>

        {/* Core Capabilities */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#3d342b] pb-2">
            <h2 className="text-xl font-medium tracking-tight text-[#f4efe8]">Core Capabilities</h2>
            <Code className="w-4 h-4 text-[#8a7968]" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-10">
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[#d6bfa3] mb-2">Infrastructure & Cloud</h3>
              <p className="text-sm text-[#b8a694] leading-relaxed">
                Expertise in designing and maintaining infrastructure as code (AWS, GCP). Capable of executing rapid network rebuilds to unblock modern serverless architectures while enforcing consistency and preventing configuration drift.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[#d6bfa3] mb-2">Automating Code & CI/CD</h3>
              <p className="text-sm text-[#b8a694] leading-relaxed">
                Mastery in developing resilient integrations (Python, Go) employing robust error handling and retries. Proven track record of optimizing CI/CD workflows to minimize deployment failures and accelerate delivery.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[#d6bfa3] mb-2">Monitoring & Observability</h3>
              <p className="text-sm text-[#b8a694] leading-relaxed">
                Applying proactive monitoring (Datadog) across complex systems to identify process limits and system degradation before they impact operations. Reduced critical service resolution times significantly.
              </p>
            </div>
            <div>
              <h3 className="text-sm uppercase tracking-wider font-semibold text-[#d6bfa3] mb-2">Operational Democratization</h3>
              <p className="text-sm text-[#b8a694] leading-relaxed">
                A strong focus on "managing up" and democratizing systems operations so cross-functional staff can confidently support key infrastructure. Known for bridging gaps between intelligence, sales, and engineering.
              </p>
            </div>
          </div>
        </section>

        {/* Experience */}
        <section className="space-y-8">
          <div className="flex items-center justify-between border-b border-[#3d342b] pb-2">
            <h2 className="text-xl font-medium tracking-tight text-[#f4efe8]">Experience</h2>
            <Briefcase className="w-4 h-4 text-[#8a7968]" />
          </div>

          <div className="space-y-12 pt-4">
            {/* Role 1 */}
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
              <div className="mb-2 md:mb-0 md:col-span-1 text-sm text-[#8a7968] font-medium">
                Dec 2021 — Present
              </div>
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#f4efe8]">Senior Security Automation Engineer</h3>
                  <p className="text-[#a3907c] text-sm">Unit 42 by Palo Alto Networks</p>
                </div>
                <ul className="space-y-2 text-sm text-[#b8a694]">
                  <li className="flex gap-2"><span className="text-[#635547]">—</span> <span>Lead engineering for a public-facing threat intelligence API with over 2,000 active consumers, implementing strict automated validation to maintain SLAs.</span></li>
                  <li className="flex gap-2"><span className="text-[#635547]">—</span> <span>Architected and deployed Google Cloud infrastructure rebuilds to unblock modern serverless dataflow pipelines for internal engineering teams.</span></li>
                  <li className="flex gap-2"><span className="text-[#635547]">—</span> <span>Optimized core internal authentication services, drastically reducing latency by 90%+ and increasing resilience against directory outages.</span></li>
                </ul>
              </div>
            </div>
            
            {/* Role 2 */}
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
              <div className="mb-2 md:mb-0 md:col-span-1 text-sm text-[#8a7968] font-medium">
                Sep 2020 — Dec 2021
              </div>
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#f4efe8]">Software Engineer & Consultant</h3>
                  <p className="text-[#a3907c] text-sm">Unit 42 by Palo Alto Networks</p>
                </div>
                <ul className="space-y-2 text-sm text-[#b8a694]">
                  <li className="flex gap-2"><span className="text-[#635547]">—</span> <span>Contributed to scalable post-merger architectures for Unit 42 Consulting, leveraging GCP and enterprise infrastructure.</span></li>
                  <li className="flex gap-2"><span className="text-[#635547]">—</span> <span>Executed specialized client-facing DFIR investigations focusing on web, AWS, and Linux environments.</span></li>
                </ul>
              </div>
            </div>

            {/* Role 3 */}
            <div className="md:grid md:grid-cols-4 md:gap-8 items-baseline">
              <div className="mb-2 md:mb-0 md:col-span-1 text-sm text-[#8a7968] font-medium">
                May 2016 — Sep 2020
              </div>
              <div className="md:col-span-3 space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-[#f4efe8]">Security Engineer & Intern</h3>
                  <p className="text-[#a3907c] text-sm">The Crypsis Group</p>
                </div>
                <ul className="space-y-2 text-sm text-[#b8a694]">
                  <li className="flex gap-2"><span className="text-[#635547]">—</span> <span>Served as the sole full-time internal security role; built and maintained QA automation, preparing the firm for SOC 2 Type 1 and acquisition audits.</span></li>
                  <li className="flex gap-2"><span className="text-[#635547]">—</span> <span>Led R&D into complex Office 365 BEC forensics, yielding novel access methods for bulk processing activities.</span></li>
                  <li className="flex gap-2"><span className="text-[#635547]">—</span> <span>Developed core evidence processing platforms utilizing Ruby, Docker, AWS (SQS, SNS, S3), and HAProxy, scaling backend forensic collection.</span></li>
                </ul>
              </div>
            </div>
          </div>
        </section>

      </main>

      {/* Footer */}
      <footer className="border-t border-[#3d342b] mt-16 py-8">
        <div className="max-w-4xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-[#8a7968]">
          <p>&copy; {new Date().getFullYear()} Michael Bailey. All rights reserved.</p>
          <div className="flex gap-6">
             <a href="https://michaelbailey.co" className="hover:text-[#d6bfa3] transition-colors">Personal Site</a>
             <a href="https://www.linkedin.com/in/cybermichael" className="hover:text-[#d6bfa3] transition-colors">LinkedIn</a>
          </div>
        </div>
      </footer>

    </div>
  );
};

export default App;
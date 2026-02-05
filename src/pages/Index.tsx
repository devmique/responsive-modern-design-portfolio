import profileImg from "@/assets/profile.jpg";
import s1 from "@/assets/html.jpg"
import s2 from "@/assets/css.jpg";
import s3 from "@/assets/javascript.png";
import s4 from "@/assets/tailwind.jpg";
import s5 from "@/assets/react.jpg";
import s6 from "@/assets/typescript.png";
import s7 from "@/assets/next.png";
import s8 from "@/assets/nodejs.jpg";
import s9 from "@/assets/express.jpg";
import s10 from "@/assets/mysql.jpg";
import s11 from "@/assets/mongo.png";
import s12 from "@/assets/git.png";
import s13 from "@/assets/supabase.jpg";
import s14 from "@/assets/docker.png";
import p1 from "@/assets/project-1.jpg";
import p3 from "@/assets/project-2.jpg";
import p2 from "@/assets/project-4.jpg";
import p4 from "@/assets/project-5.jpg";
import c1 from "@/assets/cert1.jpg";
import c2 from "@/assets/cert2.jpg";
import c3 from "@/assets/cert3.jpg";
import c4 from "@/assets/cert4.jpg";
import c5 from "@/assets/cert5.jpg";
import c6 from "@/assets/cert6.jpg";
import c7 from "@/assets/cert7.jpg";
import c8 from "@/assets/cert8.jpg";
import c9 from "@/assets/cert9.jpg";
import c10 from "@/assets/cert10.jpg";
import c11 from "@/assets/cert11.jpg";
import c12 from "@/assets/cert12.png";
import c13 from "@/assets/cert13.png";
import c14 from "@/assets/cert14.png";
import resume from "@/assets/Johnlord_Mique_resume(2).pdf";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useInView } from "@/hooks/use-in-view";
import { Typewriter } from "@/components/Typewriter";
import { Mail, Linkedin, Github, SquareArrowOutUpRightIcon, Download } from "lucide-react";
import { FormEvent, useState } from "react";
import { toast } from "@/hooks/use-toast";
import "@/App.css";
import { LoadingScreen } from "@/components/LoadingScreen";
const Section = ({ id, children, className = "" }: { id: string; children: React.ReactNode; className?: string }) => {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <section id={id} ref={ref} className={`container px-4 py-20 scroll-mt-24 ${className} ${inView ? "animate-fade-in" : "opacity-0"}`}>
      {children}
    </section>
  );
};

export default function Index() {
  const [sending, setSending] = useState(false);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const email = (form.elements.namedItem("email") as HTMLInputElement).value;
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement).value;

    if (!email || !message) return;
    setSending(true);
    toast({ title: "Opening your email app..." });
    const subject = encodeURIComponent("Portfolio Contact");
    const body = encodeURIComponent(`From: ${email}\n\n${message}`);
    window.location.href = `mailto:miquejt13@gmail.com?subject=${subject}&body=${body}`;
    setTimeout(() => setSending(false), 800);
  };
  const skills = [
  { src: s1, alt: "html", name: "HTML" },
  { src: s2, alt: "css", name: "CSS" },
  { src: s3, alt: "js", name: "JavaScript" },
  { src: s4, alt: "tailwind", name: "Tailwind CSS" },
  { src: s5, alt: "react", name: "React" },
  { src: s6, alt: "ts", name: "TypeScript" },
  { src: s7, alt: "next", name: "Next.js" },
  { src: s8, alt: "node", name: "Node.js" },
  { src: s9, alt: "express", name: "Express" },
  { src: s10, alt: "mysql", name: "MySQL" },
  { src: s11, alt: "mongodb", name: "MongoDB" },
  { src: s12, alt: "git", name: "Git" },
  { src: s13, alt: "supabase", name: "Supabase" },
  { src: s14, alt: "docker", name: "Docker" }
];
const duplicatedSkills = [...skills, ...skills];
  return (
    <>
    <LoadingScreen/>
    <main>
      {/* Hero / About */}
      <Section id="about" className="pt-24">
        <div className="grid lg:grid-cols-2 gap-10 items-center">

           <div 
            className="relative mx-auto w-56 h-56 md:w-72 md:h-72"
            style={{ perspective: "1000px" }}
            onMouseMove={(e) => {
              const rect = e.currentTarget.getBoundingClientRect();
              const x = e.clientX - rect.left;
              const y = e.clientY - rect.top;
              
              const centerX = rect.width / 2;
              const centerY = rect.height / 2;
              
              const rotateX = ((y - centerY) / centerY) * -10;
              const rotateY = ((x - centerX) / centerX) * 10;
              
              const inner = e.currentTarget.querySelector('.tilt-inner') as HTMLElement;
              if (inner) {
                inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
              }
            }}
            onMouseLeave={(e) => {
              const inner = e.currentTarget.querySelector('.tilt-inner') as HTMLElement;
              if (inner) {
                inner.style.transform = 'rotateX(0deg) rotateY(0deg)';
              }
            }}
          >
            <div 
              className="tilt-inner relative w-full h-full transition-transform duration-200 ease-out"
              style={{ transformStyle: "preserve-3d" }}
            >
              <div className="absolute -inset-6 rounded-full bg-primary/10 blur-2xl" aria-hidden></div>
              <img
                src={profileImg}
                alt="Portrait of the UI/UX designer"
                loading="lazy"
                className="relative rounded-full object-cover w-full h-full shadow-xl animate-float"
              />
              <span className="absolute right-4 bottom-5 h-5 w-5 rounded-full bg-green-500 ring-4 ring-background" aria-label="Active"></span>
            </div>
          </div>
          <div className="text-left">
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
             Hi, I'm Johnlord Mique
            </h1>
            <p className="mt-4 text-lg text-muted-foreground">
            Information Technology Undergraduate and I build efficient software solutions. I specialize in problem-solving, designing,
             and crafting applications that blend performance with great user experience.</p>
            <br></br>
            <div className="skills-wrapper">
      <div className="skills">
         {duplicatedSkills.map((skill, index) => (
                <div key={index} className="relative group inline-block">
                  <img 
                    src={skill.src} 
                    alt={skill.alt}
                    className="transition-transform"
                  />
                  <span className="absolute left-1/2 -translate-x-1/2 mb-2 px-2 py-1 text-xs font-medium text-white bg-gray-900 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
                    {skill.name}
                  </span>
                </div>
              ))}
      </div>
    </div>
            <p className="mt-8 text-xl">
              <span className="text-muted-foreground">I'm a </span>
              <span className="font-medium text-primary">
                <Typewriter words={["MERN Stack Developer","Full-Stack Developer","React Developer"]} />
              </span>
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <a href="#projects"><Button>View Projects</Button></a>
              <a href={resume} download="johnlord_mique_resume.pdf"><Button variant="outline"><Download className="h-4 w-4 mr-2"/>Download CV</Button></a>
               <a href="https://github.com/devmique"><Button><Github/>Github</Button></a>
              <a href="https://www.linkedin.com/in/johnlord-mique-40b5a1342/"><Button variant="outline"><Linkedin />LinkedIn</Button></a>
            </div>
          </div>

       
        </div>
      </Section>

      {/* Projects */}
      <Section id="projects">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Projects</h2>
          <p className="text-muted-foreground mt-2">Selected case studies and experiments.</p>
        </header>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {[{img:p1,title:"Parents Portal Management System", desc: "A full-stack school management platform designed to connect schools and parents. It provides an easy way for parents to stay updated with their child’s academic life while giving administrators powerful tools to manage attendance, grades, events, and communication.", glink:"https://github.com/devmique/full-stack-parents-portal", llink:"", tech:["React.js", "Node.js", "Express.js", "MySQL"]},
          {img:p2,title:" Student Violation Tracking System", desc: "A full-stack web application for managing and monitoring student violations. The system allows administrators to record and view student violations while providing a detailed profile for each student.", glink:"https://github.com/devmique/student_violation_tracking_system", llink:"", tech: ["React.js", "TypeScript", "TailwindCSS", "Shadcn-UI", "Node.js", "Express.js", "MongoDB"]},
          {img:p3,title:"AInterview: A Job Interview Preparation Platform ", desc: "A job interview preparation platform powered by Vapi AI Voice Agents and Google Gemini. It is designed to help job seekers practice real-time AI-driven interviews and get instant feedback.", glink:"https://github.com/devmique/ai-mock-interview", llink:"https://ai-mock-interview-chi-nine.vercel.app", tech:["Next.js", "Firebase", "Tailwind CSS", "Vapi AI", "Shadcn-UI", "Google Gemini", "Zod"]},
          {img:p4,title:"SaaS Workspace Dashboard", desc: "A complete SaaS application that showcases production-ready patterns including Row Level Security, Server Actions, optimistic UI updates, real-time activity tracking, and multi-tenancy.", glink:"https://github.com/devmique/saas-workspace-dashboard/", llink:"https://saas-workspace-dashboard.vercel.app/", tech: ["Next.js", "TailwindCSS", "Supabase", "Shadcn-UI", "Recharts"]}].map((p, i) => (

            <Card key={i} className="overflow-hidden transition-transform hover:scale-[1.02]">
              <CardContent className="p-0">
                <img src={p.img} alt={`${p.title} preview`} loading="lazy" className="w-full h-48 object-cover" />
                <div className="p-4">
                  <h3 className="font-medium">{p.title}</h3>
                  <p className="text-sm text-muted-foreground mt-1">{p.desc}</p>
                  <div className="mt-1 flex flex-wrap justify-center items-center gap-2">
                  {p.tech?.map((value, i)=>(
                  <span key={i} className="text-muted-foreground px-2 py-1 text-xs bg-secondary rounded-lg">{value}</span>
                  ))}
                  </div>
                  <br></br>
                  <div className="flex justify-center items-center gap-2">
                  <a href={p.glink}><Button variant="outline" className="text-muted-foreground"><Github/>Github Repo</Button></a>
                  {p.llink && <a href={p.llink}><Button variant="outline" className="text-muted-foreground"><SquareArrowOutUpRightIcon/>Live Demo</Button></a> }
                </div>                
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Certifications */}
      <Section id="certifications">
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Certifications</h2>
          <p className="text-muted-foreground mt-2">Highlights from ongoing learning.</p>
        </header>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center cursor-pointer">
          {[c2,c3,c4, c5, c6, c7, c8, c9, c10, c12,c13, c14, c11, c1].map((src, i) => (
            <div key={i} className="flex items-center justify-center rounded-xl border-2 border-gray-100 hover:border-gray-800 bg-card p-1 animate-fade-in dark:border-gray-800 dark:hover:border-gray-100">
              <img src={src} alt={`Certification badge ${i+1}`} className="h-21 w-21 " loading="lazy" />
            </div>
          ))}
        </div>
      </Section>

      {/* Contact */}
      <Section id="contact" >
        <header className="mb-8">
          <h2 className="text-3xl font-semibold tracking-tight">Contact</h2>
          <p className="text-muted-foreground mt-2">Have a project in mind? Let’s chat.</p>
        </header>
        <form onSubmit={onSubmit} className="max-w-xl space-y-4 mx-auto">
          <div className="items-center">
            <label htmlFor="email" className="mb-2 block text-sm font-medium">Email</label>
            <Input id="email" name="email" type="email" placeholder="you@domain.com" required />
          </div>
          <div>
            <label htmlFor="message" className="mb-2 block text-sm font-medium">Message</label>
            <Textarea id="message" name="message" placeholder="Tell me about your project..." rows={5} required />
          </div>
          <Button type="submit" disabled={sending}>Send</Button>
       <p className="text-xs text-muted-foreground">serverless mail.</p>     </form>
      </Section>

      <footer className="border-t">
        <div className="container px-4 py-10 text-sm text-muted-foreground">
          © {new Date().getFullYear()} Johnlord T. Mique. All rights reserved.
        </div>
      </footer>
    </main>
    </>
  );
}

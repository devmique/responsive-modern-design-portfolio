import c1 from "@/assets/certificates/cert1.jpg";
import c2 from "@/assets/certificates/cert2.jpg";
import c3 from "@/assets/certificates/cert3.jpg";
import c4 from "@/assets/certificates/cert4.jpg";
import c5 from "@/assets/certificates/cert5.jpg";
import c6 from "@/assets/certificates/cert6.jpg";
import c7 from "@/assets/certificates/cert7.jpg";
import c8 from "@/assets/certificates/cert8.jpg";
import c9 from "@/assets/certificates/cert9.jpg";
import c10 from "@/assets/certificates/cert10.jpg";
import c11 from "@/assets/certificates/cert11.jpg";
import c12 from "@/assets/certificates/cert12.png";
import c13 from "@/assets/certificates/cert13.png";
import c14 from "@/assets/certificates/cert14.png";
import c15 from "@/assets/certificates/cert15.jpg";
import c16 from "@/assets/certificates/cert16.jpg";

export interface Certificate {
  id: string;
  title: string;
  issueDate: string;
  image: string;
}

export interface CertificateAlbum {
  id: string;
  issuer: string;
  color: string;
  certificates: Certificate[];
}

export const certificateAlbums: CertificateAlbum[] = [
  {
    id: "coursera",
    issuer: "Coursera",
    color: "217 91% 60%",
    certificates: [
      { id: "c1", title: "Introduction to Next.js", issueDate: "Aug 2025", image: c12 },
      { id: "c2", title: "TypeScript in React", issueDate: "Aug 2025", image: c14 },
      { id: "c3", title: "Introduction to Software Engineering", issueDate: "Aug 2025", image: c13 },
    ],
  },
  {
    id: "sololearn",
    issuer: "Sololearn",
    color: "152 69% 45%",
    certificates: [
      { id: "s1", title: "Introduction to C++", issueDate: "Feb 2024", image: c6 },
      { id: "s2", title: "Introduction to Java", issueDate: "Apr 2024", image: c7 },
      { id: "s3", title: "Java Intermediate", issueDate: "Sept 2024", image: c8 },
      { id: "s4", title: "Introduction to Python", issueDate: "Aug 2024", image: c9 },
      { id: "s5", title: "Python Intermediate", issueDate: "Aug 2024", image: c10 },
      { id: "s6", title: "Introduction to JavaScript", issueDate: "June 2024", image: c2 },
      { id: "s7", title: "JavaScript Intermediate", issueDate: "Jul 2024", image: c3 },
      { id: "s8", title: "Introduction to SQL", issueDate: "Oct 2024", image: c4 },
      { id: "s9", title: "SQL Intermediate", issueDate: "Nov 2024", image: c5 },
      { id: "s10", title: "Generative AI", issueDate: "Mar 2026", image: c16 },
      { id: "s11", title: "Vibe Coding", issueDate: "Mar 2026", image: c15 },
    ],
  },
  {
    id: "mimo",
    issuer: "Mimo",
    color:  "271 91% 65%",
    certificates: [
      { id: "m1", title: "Full-Stack Development", issueDate: "Apr 2025", image: c1 },
      { id: "m2", title: "Back-End Development", issueDate: "Apr 2025", image: c11 },
    ],
  },
];

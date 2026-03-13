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
      { id: "c1", title: "Web Development", issueDate: "Jan 2024", image: certCoursera1 },
      { id: "c2", title: "Data Science", issueDate: "Mar 2024", image: certCoursera2 },
      { id: "c3", title: "Machine Learning", issueDate: "Jun 2024", image: certCoursera3 },
    ],
  },
  {
    id: "sololearn",
    issuer: "Sololearn",
    color: "152 69% 45%",
    certificates: [
      { id: "s1", title: "HTML & CSS", issueDate: "Feb 2024", image: certSololearn1 },
      { id: "s2", title: "JavaScript", issueDate: "Apr 2024", image: certSololearn2 },
    ],
  },
  {
    id: "mimo",
    issuer: "Mimo",
    color: "30 90% 55%",
    certificates: [
      { id: "m1", title: "Full-Stack Development", issueDate: "May 2024", image: c1 },
      { id: "m2", title: "Back-End Development", issueDate: "Jul 2024", image: c11 },
    ],
  },
];

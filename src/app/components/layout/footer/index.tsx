import Link from "next/link";
import { portfolioLinks, profile } from "@/lib/portfolio-data";

const Footer = () => {
  return (
    <footer className="border-t border-zinc-950/10 bg-zinc-950 text-white">
      <div className="site-container flex flex-col gap-4 py-8 text-sm text-zinc-300 md:flex-row md:items-center md:justify-between">
        <p>
          © {new Date().getFullYear()} {profile.name}.
        </p>
        <div className="flex flex-wrap items-center gap-3">
          <Link href={portfolioLinks.email} className="hover:text-white">
            {profile.email}
          </Link>
          <span className="text-zinc-600">/</span>
          <Link
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            GitHub
          </Link>
          <span className="text-zinc-600">/</span>
          <Link
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            LinkedIn
          </Link>
          <span className="text-zinc-600">/</span>
          <Link
            href={profile.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-white"
          >
            Facebook
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

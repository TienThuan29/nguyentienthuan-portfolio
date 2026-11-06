import { profile } from "@/lib/portfolio-data";

const Footer = () => (
  <footer className="border-t border-border">
    <div className="site-container flex flex-col gap-3 py-8 sm:flex-row sm:items-center sm:justify-between">
      <p className="label">
        © {new Date().getFullYear()} {profile.name}
      </p>
      <p className="label">
        Set in Newsreader &amp; Be Vietnam Pro | {" "}
        <a
          href={profile.facebook}
          target="_blank"
          rel="noopener noreferrer"
          className="ink-link hover:text-foreground"
        >
          Facebook
        </a>
      </p>
    </div>
  </footer>
);

export default Footer;

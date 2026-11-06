import { GitHubBrandIcon, LinkedInBrandIcon } from "@/app/components/svg-icons";
import { navItems, pageAnchors, portfolioLinks, profile } from "@/lib/portfolio-data";

const socialLinks = [
  { label: "GitHub", href: profile.github, Icon: GitHubBrandIcon },
  { label: "LinkedIn", href: profile.linkedin, Icon: LinkedInBrandIcon },
];

const Header = () => (
  <header className="sticky top-0 z-50 border-b border-border bg-background/85 backdrop-blur-md">
    <div className="site-container flex h-14 items-center justify-between gap-6">
      <a href={pageAnchors.top} className="flex shrink-0 items-baseline gap-3 whitespace-nowrap" aria-label="Back to top">
        <span className="font-serif text-lg font-medium tracking-tight">{profile.name}</span>
        <span className="label hidden sm:inline">{profile.role}</span>
      </a>

      {/* 6 links + name + actions need ~1030px of content width, so the nav only appears at xl; from 1440px the margin OutlineNav takes over. */}
      <nav className="hidden items-center gap-6 xl:flex min-[90rem]:hidden" aria-label="Primary navigation">
        {navItems.map((item) => (
          <a key={item.href} href={item.href} className="label ink-link pb-0.5 hover:text-foreground">
            {item.label}
          </a>
        ))}
      </nav>

      <div className="flex shrink-0 items-center gap-1 whitespace-nowrap">
        {socialLinks.map(({ label, href, Icon }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={`${label} profile`}
            className="hidden size-9 items-center justify-center transition-opacity hover:opacity-70 sm:inline-flex"
          >
            <Icon className="size-5" />
          </a>
        ))}
        <a
          href={portfolioLinks.cv}
          target="_blank"
          rel="noopener noreferrer"
          className="label ml-2 border border-foreground px-3 py-1.5 text-foreground transition-colors hover:bg-foreground hover:text-background"
        >
          My CV
        </a>
      </div>
    </div>
  </header>
);

export default Header;

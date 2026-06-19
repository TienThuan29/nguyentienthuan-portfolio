"use client";

import { Button, Tooltip } from "@heroui/react";
import { Facebook, Github, Linkedin, Mail } from "@/app/components/svg-icons";
import { navItems, pageAnchors, portfolioLinks, profile } from "@/lib/portfolio-data";

const openExternal = (href: string) => {
  const nextWindow = window.open(href, "_blank", "noopener,noreferrer");
  if (nextWindow) nextWindow.opener = null;
};

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-zinc-950/10 bg-[#f7f9f4]/88 backdrop-blur-xl">
      <div className="site-container flex h-16 items-center justify-between gap-4 py-0">
        <a href={pageAnchors.top} className="group flex min-w-0 items-center gap-3" aria-label="Back to top">
          <span className="flex size-9 items-center justify-center rounded-md bg-zinc-950 font-mono text-sm font-semibold text-white">
            {profile.initials}
          </span>
          <span className="hidden leading-tight sm:block">
            <span className="block text-sm font-semibold text-zinc-950">{profile.name}</span>
            <span className="block font-mono text-[11px] uppercase tracking-[0.16em] text-zinc-500">
              AI Engineer
            </span>
          </span>
        </a>

        <nav className="hidden items-center gap-1 md:flex" aria-label="Primary navigation">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="rounded-md px-3 py-2 text-sm font-medium text-zinc-600 transition hover:bg-white hover:text-zinc-950"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="flex shrink-0 items-center gap-2">
          <Tooltip delay={0}>
            <Button
              isIconOnly
              aria-label="Open GitHub profile"
              className="size-9 rounded-md"
              variant="tertiary"
              onPress={() => openExternal(profile.github)}
            >
              <Github className="size-4" />
            </Button>
            <Tooltip.Content>
              <p>GitHub</p>
            </Tooltip.Content>
          </Tooltip>
          <Tooltip delay={0}>
            <Button
              isIconOnly
              aria-label="Open LinkedIn profile"
              className="hidden size-9 rounded-md sm:inline-flex"
              variant="tertiary"
              onPress={() => openExternal(profile.linkedin)}
            >
              <Linkedin className="size-4" />
            </Button>
            <Tooltip.Content>
              <p>LinkedIn</p>
            </Tooltip.Content>
          </Tooltip>
          <Tooltip delay={0}>
            <Button
              isIconOnly
              aria-label="Open Facebook profile"
              className="hidden size-9 rounded-md sm:inline-flex"
              variant="tertiary"
              onPress={() => openExternal(profile.facebook)}
            >
              <Facebook className="size-4" />
            </Button>
            <Tooltip.Content>
              <p>Facebook</p>
            </Tooltip.Content>
          </Tooltip>
          <Button
            className="rounded-md bg-zinc-950 px-4 text-white hover:bg-zinc-800"
            onPress={() => {
              window.location.href = portfolioLinks.email;
            }}
          >
            <Mail className="size-4" />
            <span className="hidden sm:inline">Email</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;

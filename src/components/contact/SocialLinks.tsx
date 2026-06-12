import { ArrowRight as ArrowRightIcon, ArrowUpRight as ArrowUpRightIcon } from "lucide-react";
import { profile } from "@/src/data/profile";
import { socialIcons } from "@/src/lib/social-icons";

export function SocialLinks() {
  return (
    <div className="contact-side">
      {profile.socials.map((social) => {
        const Icon = socialIcons[social.icon];
        const GoIcon = social.external ? ArrowUpRightIcon : ArrowRightIcon;
        return (
          <a
            key={social.label}
            className="social-link"
            href={social.href}
            {...(social.external
              ? { target: "_blank", rel: "noopener noreferrer" }
              : {})}
          >
            <span className="social-link__icon">
              <Icon size={20} />
            </span>
            <span className="social-link__body">
              <span className="social-link__label">{social.label}</span>
              <span className="social-link__val">{social.value}</span>
            </span>
            <span className="social-link__go">
              <GoIcon size={18} />
            </span>
          </a>
        );
      })}

      <div
        className="card"
        style={{ padding: 18, display: "flex", alignItems: "center", gap: 12 }}
      >
        <span className="pill__dot" style={{ flex: "none" }} />
        <span style={{ fontSize: "13.5px", color: "var(--text-2)" }}>
          Currently <strong style={{ color: "var(--text-1)" }}>available</strong>{" "}
          for freelance &amp; full-time roles · {profile.location} / remote
        </span>
      </div>
    </div>
  );
}

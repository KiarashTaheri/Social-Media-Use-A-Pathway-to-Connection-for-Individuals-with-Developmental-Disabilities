import type { Contact } from "@/data/contacts";
import { EmailIcon } from "@/components/EmailIcon";
import { LinkedInIcon } from "@/components/LinkedInIcon";

/**
 * Renders a single person's name, email link, and optional LinkedIn link.
 *
 * The email opens the visitor's mail client via `mailto:`; the LinkedIn link
 * opens the profile in a new tab. Each link's accessible name includes the
 * recipient so its purpose is clear out of context.
 */
export function ContactCard({ contact }: { contact: Contact }) {
  const fullName = `${contact.firstName} ${contact.lastName}`;

  return (
    <article className="card">
      <h2 className="card__name">{fullName}</h2>
      {contact.title ? <p className="card__title">{contact.title}</p> : null}
      <a
        className="card__link"
        href={`mailto:${contact.email}`}
        aria-label={`Email ${fullName}`}
      >
        <EmailIcon />
        <span>{contact.email}</span>
      </a>
      {contact.linkedinUrl ? (
        <a
          className="card__link"
          href={contact.linkedinUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${fullName} on LinkedIn`}
        >
          <LinkedInIcon />
          <span>LinkedIn</span>
        </a>
      ) : null}
    </article>
  );
}

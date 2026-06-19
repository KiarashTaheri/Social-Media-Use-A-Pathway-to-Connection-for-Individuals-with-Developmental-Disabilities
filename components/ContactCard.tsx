import type { Contact } from "@/data/contacts";
import { EmailIcon } from "@/components/EmailIcon";

/**
 * Renders a single person's name alongside an email link.
 *
 * Clicking the envelope icon (or the address) opens the visitor's mail client
 * via a `mailto:` link. The accessible name names the recipient so the link's
 * purpose is clear out of context.
 */
export function ContactCard({ contact }: { contact: Contact }) {
  const fullName = `${contact.firstName} ${contact.lastName}`;

  return (
    <article className="card">
      <h2 className="card__name">{fullName}</h2>
      {contact.title ? <p className="card__title">{contact.title}</p> : null}
      <a
        className="card__email"
        href={`mailto:${contact.email}`}
        aria-label={`Email ${fullName}`}
      >
        <EmailIcon />
        <span>{contact.email}</span>
      </a>
    </article>
  );
}

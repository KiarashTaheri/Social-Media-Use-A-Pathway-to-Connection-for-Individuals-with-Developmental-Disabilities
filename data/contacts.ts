/**
 * Contact directory data.
 *
 * This is the single source of truth for the people shown on the page.
 * To publish real details, replace the placeholder values below — no other
 * file needs to change.
 */

export interface Contact {
  readonly firstName: string;
  readonly lastName: string;
  /** Role or affiliation shown under the name. Omit to hide the line. */
  readonly title?: string;
  /** A valid email address; rendered as a `mailto:` link. */
  readonly email: string;
  /** Full LinkedIn profile URL (e.g. https://www.linkedin.com/in/handle). Omit to hide the link. */
  readonly linkedinUrl?: string;
}

export const contacts: readonly Contact[] = [
  {
    firstName: "Jade",
    lastName: "Stobbart",
    title: "Project Lead, 1st Author",
    email: "jade.stobbart@mail.mcgill.ca",
    linkedinUrl: "https://www.linkedin.com/in/jade-stobbart-6ba471192/",
  },
  {
    firstName: "Hannah",
    lastName: "Nolan",
    title: "Community Partner Lead, 2nd Author",
    email: "hannah.nolan@posabilities.ca",
    linkedinUrl: "https://linkedin.com/in/hannahnolannn/",
  },
];

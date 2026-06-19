import { contacts } from "@/data/contacts";
import { ContactCard } from "@/components/ContactCard";

export default function HomePage() {
  return (
    <main className="page">
      <h1 className="page__title">Get in touch</h1>
      <section className="page__cards">
        {contacts.map((contact) => (
          <ContactCard key={contact.email} contact={contact} />
        ))}
      </section>
    </main>
  );
}

import ContactForm from "../components/ContactForm";

export default function ContactPage() {
  return (
    <div className="flex items-center justify-center min-h-screen p-8 font-[family-name:var(--font-geist-sans)]">
      <div className="w-full max-w-[470px] rounded-3xl bg-gradient-to-br from-[#f8f6b5] to-[#e4b77b] p-8 relative overflow-hidden">
        <ContactForm />
      </div>
    </div>
  );
}
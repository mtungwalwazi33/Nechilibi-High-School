
import {
  Mail,
  BriefcaseBusiness,
  Camera,
  Globe,
  ArrowUpRight,
  MessageCircle,
} from "lucide-react";

const contactLinks = [
  {
    name: "Email Us",
    description: "Send us your questions and enquiries.",
    detail: "Contact the school by email",
    icon: Mail,
    href: "mailto:info@nechilibi.ac.zw",
    color: "bg-pink-50 text-pink-700",
    hover: "hover:bg-pink-600",
  },
  {
    name: "LinkedIn",
    description: "Connect with our school community professionally.",
    detail: "Visit our LinkedIn profile",
    icon: BriefcaseBusiness,
    href: "https://www.linkedin.com/",
    color: "bg-blue-50 text-blue-700",
    hover: "hover:bg-blue-700",
  },
  {
    name: "Instagram",
    description: "Explore school activities and memorable moments.",
    detail: "Follow us on Instagram",
    icon: Camera,
    href: "https://www.instagram.com/",
    color: "bg-purple-50 text-purple-700",
    hover: "hover:bg-purple-700",
  },
  {
    name: "Facebook",
    description: "Stay updated with school news and announcements.",
    detail: "Visit our Facebook page",
    icon: Globe,
    href: "https://www.facebook.com/",
    color: "bg-blue-50 text-blue-700",
    hover: "hover:bg-blue-800",
  },
];

function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* PAGE HEADER */}
      <section className="bg-[#171717] px-6 py-14 text-white md:px-10">
        <div className="mx-auto max-w-7xl">
          <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-pink-300">
            Nechilibi High School
          </p>

          <h1 className="text-3xl font-bold md:text-4xl">
            Contact Us
          </h1>

          <p className="mt-4 max-w-2xl text-sm leading-7 text-gray-300 md:text-base">
            We value communication with our students, parents,
            guardians and the wider community. Get in touch with us
            through our official communication platforms.
          </p>
        </div>
      </section>

      <main className="mx-auto max-w-7xl px-6 py-12 md:px-10">

        {/* INTRODUCTION */}
        <div className="mb-10 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-pink-100 text-[#C2185B]">
            <MessageCircle size={27} />
          </div>

          <h2 className="mt-5 text-2xl font-bold text-gray-900">
            We'd Love to Hear From You
          </h2>

          <p className="mx-auto mt-3 max-w-xl text-sm leading-7 text-gray-500">
            Whether you have a question, suggestion or would like
            information about our school, our communication channels
            are available to help.
          </p>
        </div>

        {/* CONTACT AND SOCIAL MEDIA CARDS */}
        <section className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {contactLinks.map((contact) => {
            const Icon = contact.icon;

            return (
              <a
                key={contact.name}
                href={contact.href}
                target={contact.name === "Email Us" ? undefined : "_blank"}
                rel={contact.name === "Email Us" ? undefined : "noopener noreferrer"}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-2 hover:border-[#C2185B] hover:shadow-xl"
              >
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-xl transition-all duration-300 ${contact.color} group-hover:scale-110 group-hover:text-white ${contact.hover}`}
                >
                  <Icon size={27} />
                </div>

                <h3 className="mt-6 flex items-center justify-between font-bold text-gray-900">
                  {contact.name}
                  <ArrowUpRight
                    size={19}
                    className="text-gray-400 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#C2185B]"
                  />
                </h3>

                <p className="mt-3 text-sm leading-6 text-gray-500">
                  {contact.description}
                </p>

                <p className="mt-5 text-xs font-semibold text-[#C2185B]">
                  {contact.detail}
                </p>
              </a>
            );
          })}
        </section>

        {/* CONTACT MESSAGE */}
        <section className="mt-12 rounded-2xl border border-pink-100 bg-pink-50 p-8 text-center md:p-12">
          <h2 className="text-xl font-bold text-gray-900">
            Nechilibi High School
          </h2>

          <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-gray-600">
            Education • Excellence • Discipline
            <br />
            Working together to create opportunities and build a
            brighter future for our learners.
          </p>

          <a
            href="mailto:info@nechilibi.ac.zw"
            className="mt-6 inline-flex items-center gap-2 rounded-lg bg-[#C2185B] px-6 py-3 text-sm font-semibold text-white transition hover:bg-[#991548] hover:shadow-lg"
          >
            Send Us an Email
            <ArrowUpRight size={17} />
          </a>
        </section>

      </main>
    </div>
  );
}

export default ContactPage;

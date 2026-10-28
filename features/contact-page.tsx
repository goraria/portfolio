import { ContactForm } from "@/components/element/contact-form.tsx";
import { Heading } from "@/components/element/heading.tsx";
import { Badge } from "@/components/ui/badge.tsx";
import { Phone } from "lucide-react";

const ContactPage = () => {
  return (
    // PROJECT PAGE
    <div className="h-full w-full relative flex flex-col items-start gap-5 overflow-hidden">
      <Badge>
        <Phone className="h-4 w-4" />
        Contact Us
      </Badge>
      <div className="flex flex-col gap-3 w-full">
        <Heading>Contact Me!</Heading>
        <div className="h-auto w-full flex justify-center items-center">
          <ContactForm />
        </div>
        <p className="text-lg w-full text-primary max-sm:text-base"></p>
      </div>
    </div>
  );
};

export default ContactPage;

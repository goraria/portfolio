import { ContactForm } from "@/components/contact-form";
import { FramerWrapper } from "@/components/animation/wrapper";
import { Heading } from "@/components/heading";
import { Badge } from "@gorth/primitive/custom/badge";
import { Phone } from "@gorth/primitive/cores/lucide";

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
          <FramerWrapper y={0} scale={0.8}>
            <ContactForm />
          </FramerWrapper>
        </div>
        <p className="text-lg w-full text-primary max-sm:text-base"></p>
      </div>
    </div>
  );
};

export default ContactPage;

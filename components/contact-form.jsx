import { Input } from "@gorth/primitive/default/input";
import { Label } from "@gorth/primitive/default/label";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@gorth/primitive/default/card";
import { Button } from "@gorth/primitive/custom/button";
import { sendEmail } from "./send-email";

const ContactForm = () => {
  return (
    <Card>
      <form
        action={async (FormData) => {
          "use server";
          await sendEmail(FormData);
        }}
      >
        <CardHeader>
          <CardTitle className="icon_underline">Send me a mail.</CardTitle>
          <CardDescription>
            Once form is submit you will be redirect to home page.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="name">Name</Label>
            <Input
              type="text"
              name="name"
              required
              placeholder="Enter your name"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              name="SenderEmail"
              required
              placeholder="Enter your email"
            />
          </div>
          <div className="grid w-full max-w-sm items-center gap-1.5 mt-2">
            <Label htmlFor="message">Your Message</Label>
            <textarea
              placeholder="Your message here..."
              name="message"
              required
              className=" resize-none flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
            ></textarea>
          </div>
        </CardContent>
        <CardFooter>
          <Button type="submit" className="w-full">
            Submit
          </Button>
        </CardFooter>
      </form>
    </Card>
  );
};

export { ContactForm };

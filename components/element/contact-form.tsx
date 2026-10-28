import { Button } from "@/components/ui/button.tsx"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card.tsx"
import { Input } from "@/components/ui/input.tsx"
import { Label } from "@/components/ui/label.tsx"
import { Textarea } from "@/components/ui/textarea.tsx"
import { actions } from "astro:actions"
import { useState, type SubmitEvent } from "react"
export function ContactForm() {
  const [busy, setBusy] = useState(false)
  const [status, setStatus] = useState("")
  async function submit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault()
    const form = event.currentTarget
    setBusy(true)
    setStatus("")
    try {
      const { error } = await actions.contact(new FormData(form))
      if (error) {
        setStatus(error.message)
        return
      }
      form.reset()
      setStatus("Your message has been sent.")
    } catch {
      setStatus("Unable to send your message. Please try again.")
    } finally {
      setBusy(false)
    }
  }
  return (
    <Card className="w-full max-w-lg">
      <form onSubmit={submit}>
        <CardHeader>
          <CardTitle>Send me a mail.</CardTitle>
          <CardDescription>
            Leave your details and message below.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="contact-name">Name</Label>
            <Input
              id="contact-name"
              name="name"
              required
              maxLength={120}
              autoComplete="name"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-email">Email</Label>
            <Input
              id="contact-email"
              name="email"
              type="email"
              required
              autoComplete="email"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="contact-message">Your message</Label>
            <Textarea
              id="contact-message"
              name="message"
              required
              maxLength={5000}
            />
          </div>
          <p
            role="status"
            className="text-sm"
          >
            {status}
          </p>
        </CardContent>
        <CardFooter>
          <Button
            type="submit"
            disabled={busy}
          >
            {busy ? "Sending…" : "Send message"}
          </Button>
        </CardFooter>
      </form>
    </Card>
  )
}

import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { beforeEach, expect, test, vi } from "vitest";
import { actions } from "astro:actions";
import { ContactForm } from "@/components/element/contact-form";

vi.mock("astro:actions", () => ({ actions: { contact: vi.fn() } }));
const contact = vi.mocked(actions.contact);
beforeEach(() => { contact.mockReset(); });

async function fillForm() {
  const user = userEvent.setup();
  render(<ContactForm />);
  await user.type(screen.getByLabelText("Name"), "Giang");
  await user.type(screen.getByLabelText("Email"), "giang@example.com");
  await user.type(screen.getByLabelText("Your message"), "Hello portfolio");
  return user;
}

test("submits entered details and clears the form after success", async () => {
  contact.mockResolvedValue({ data: { sent: true }, error: undefined });
  const user = await fillForm();
  await user.click(screen.getByRole("button", { name: "Send message" }));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Your message has been sent."));
  const input = contact.mock.calls[0][0];
  expect(input.get("email")).toBe("giang@example.com");
  expect(input.get("name")).toBe("Giang");
  expect(input.get("message")).toBe("Hello portfolio");
  expect(screen.getByLabelText("Your message")).toHaveValue("");
});

test("disables duplicate submissions while waiting for the server", async () => {
  let resolve!: (value: Awaited<ReturnType<typeof actions.contact>>) => void;
  contact.mockImplementation(() => new Promise(done => { resolve = done; }));
  const user = await fillForm();
  await user.click(screen.getByRole("button", { name: "Send message" }));
  expect(screen.getByRole("button", { name: "Sending…" })).toBeDisabled();
  expect(contact).toHaveBeenCalledTimes(1);
  resolve({ data: { sent: true }, error: undefined });
  await waitFor(() => expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled());
});

test("shows a server error without deleting entered content", async () => {
  contact.mockResolvedValue({ data: undefined, error: {
    type: "AstroActionError", name: "ActionError", code: "SERVICE_UNAVAILABLE",
    status: 503, message: "Email is not configured.",
  } });
  const user = await fillForm();
  await user.click(screen.getByRole("button", { name: "Send message" }));
  expect(await screen.findByRole("status")).toHaveTextContent("Email is not configured.");
  expect(screen.getByLabelText("Your message")).toHaveValue("Hello portfolio");
});

test("recovers from a network failure and permits retry", async () => {
  contact.mockRejectedValue(new Error("offline"));
  const user = await fillForm();
  await user.click(screen.getByRole("button", { name: "Send message" }));
  await waitFor(() => expect(screen.getByRole("status")).toHaveTextContent("Unable to send your message."));
  expect(screen.getByRole("button", { name: "Send message" })).toBeEnabled();
  expect(screen.getByLabelText("Email")).toHaveValue("giang@example.com");
});

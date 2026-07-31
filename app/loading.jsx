import { Loader } from "@gorth/primitive/cores/lucide";

export default function Loading() {
  return (
    <Loader className="h-11 w-11 absolute m-auto top-0 bottom-0 right-0 left-0 animate-spin text-[#EC6683] z-50" />
  );
}

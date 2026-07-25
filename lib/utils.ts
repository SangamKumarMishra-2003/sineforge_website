import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";


export function cn(
  ...inputs: ClassValue[]
) {
  return twMerge(clsx(inputs));
}


export function formatDate(
  date: string | Date
) {
  return new Intl.DateTimeFormat(
    "en-GB",
    {
      day: "numeric",
      month: "long",
      year: "numeric",
    }
  ).format(new Date(date));
}


export function truncate(
  text: string,
  length: number
) {
  if (text.length <= length)
    return text;

  return `${text.slice(0, length)}...`;
}


export function slugify(
  text: string
) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
}


export function delay(
  ms: number
) {
  return new Promise(
    (resolve) =>
      setTimeout(resolve, ms)
  );
}
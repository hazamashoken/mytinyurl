"use server";

import { urls } from "@/drizzle/schemas";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

export async function getOrCreateURL(redirectTo: string) {
  const url = await db.query.urls.findFirst({
    where: (urls, { eq }) => eq(urls.redirectTo, redirectTo),
    columns: {
      id: true,
      redirectTo: true,
    },
  });

  if (url) return url;

  const newUrl = await db
    .insert(urls)
    .values({
      redirectTo,
    })
    .returning({
      id: urls.id,
      redirectTo: urls.redirectTo,
    })
    .then((res) => res[0]);

  return newUrl;
}

export async function getEndpoint(id: string) {
  const url = await db.query.urls.findFirst({
    where: (urls, { eq }) => eq(urls.id, id),
    columns: {
      redirectTo: true,
    },
  });

  return url;
}

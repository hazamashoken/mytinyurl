import { getEndpoint } from "@/lib/url";
import { redirect } from "next/navigation";

export default async function Page({ params }: { params: { id: string } }) {
  const res = await getEndpoint(params.id);

  redirect(res ? res.redirectTo : "/");
}

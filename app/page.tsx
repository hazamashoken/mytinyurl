"use client";
import { getOrCreateURL } from "@/lib/url";
import React from "react";

export default function Home() {
  const [url, setUrl] = React.useState("");
  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(e.target.redirectTo.value);
    const res = await getOrCreateURL(e.target.redirectTo.value);
    setUrl(`${window.location.origin}/${res.id}`);
  };
  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input type="url" name="redirectTo" required />
        <button type="submit">Shorten</button>
      </form>
      <a href={url}>{url}</a>
    </main>
  );
}

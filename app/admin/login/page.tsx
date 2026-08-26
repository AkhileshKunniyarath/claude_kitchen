"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { BrandLogo } from "@/components/common/BrandLogo";

export default function AdminLogin() {
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ password }),
      });

      if (res.ok) {
        router.push("/admin");
        router.refresh();
      } else {
        const data = await res.json();
        setError(data.error || "Login failed");
      }
    } catch (err) {
      setError("An error occurred");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex min-h-screen items-center justify-center bg-charcoal p-4">
      <div className="w-full max-w-sm rounded-[32px] border border-ivory/10 bg-charcoal-warm p-8 shadow-2xl">
        <div className="mb-8 flex justify-center">
          <BrandLogo variant="mark" theme="dark" size="md" />
        </div>
        
        <h1 className="mb-6 text-center font-sans text-2xl font-extrabold uppercase tracking-widest text-gold">
          Admin Portal
        </h1>

        <form onSubmit={handleLogin} className="space-y-4">
          <div>
            <input
              type="password"
              placeholder="Enter Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded-xl border border-ivory/20 bg-charcoal px-4 py-3 text-ivory placeholder-ivory/30 focus:border-gold focus:outline-none focus:ring-1 focus:ring-gold"
              required
            />
          </div>

          {error && <p className="text-sm text-red-400">{error}</p>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-xl bg-gold px-4 py-3 font-bold uppercase tracking-wider text-charcoal transition-colors hover:bg-gold-light disabled:opacity-50"
          >
            {loading ? "Authenticating..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}

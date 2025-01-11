"use client";

import posthog from "posthog-js";
import { PostHogProvider as PostHogReactProvider } from "posthog-js/react";

interface PostHogProviderProps {
  children: React.ReactNode;
}

// ✅ Extend the Window interface to include posthog
declare global {
  interface Window {
    posthog: typeof posthog;
  }
}

const PostHogProvider = ({ children }: PostHogProviderProps) => {
  if (typeof window !== "undefined" && process.env.NEXT_PUBLIC_POSTHOG_KEY) {
    if (!window.posthog) {
      posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
        api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
        person_profiles: "identified_only",
      });

      window.posthog = posthog;
    }
  }

  return (
    <PostHogReactProvider client={posthog}>{children}</PostHogReactProvider>
  );
};

export default PostHogProvider;

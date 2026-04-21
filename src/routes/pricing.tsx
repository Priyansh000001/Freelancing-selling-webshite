import { createFileRoute, useNavigate } from "@tanstack/react-router";
import { useEffect } from "react";

export const Route = createFileRoute("/pricing")({
  head: () => ({
    meta: [
      { title: "KRISHNA.WEBDESIGN" },
      {
        name: "description",
        content: "Premium web design agency landing page.",
      },
    ],
  }),
  component: PricingRedirect,
});

function PricingRedirect() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate({ to: "/", replace: true });
  }, [navigate]);

  return null;
}

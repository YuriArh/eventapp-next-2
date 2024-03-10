"use client";
import { Button } from "@nextui-org/react";
import { useMessages, useTranslations } from "next-intl";
import { useRouter } from "next/navigation";
import React from "react";

/**
 *
 * @returns {ReactNode} button to create a new event
 */

export function NewEventButton() {
  const t = useTranslations();
  const router = useRouter();
  return (
    <Button
      color="primary"
      size="sm"
      onClick={() => router.push("?modal=true")}
    >
      {t("LocaleLayout.newEvent")}
    </Button>
  );
}

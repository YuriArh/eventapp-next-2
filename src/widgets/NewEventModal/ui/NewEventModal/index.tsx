"use client";
import { Button } from "@nextui-org/react";
import { AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { RightModalLayout } from "~/shared/ui/RightModalLayout";

export function NewEventModal() {
  const router = useRouter();
  const searchParams = useSearchParams();
  const modal = searchParams?.get("modal");

  return (
    <AnimatePresence>
      {modal && (
        <RightModalLayout>
          <div className="flex justify-center mt-4">
            <Button onClick={router.back} color="primary" size="sm">
              Close
            </Button>
          </div>
        </RightModalLayout>
      )}
    </AnimatePresence>
  );
}

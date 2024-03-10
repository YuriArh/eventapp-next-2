"use client";
import { Button } from "@nextui-org/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { ModalLayout } from "~/shared/ui/ModalLayout";

export function NewEventModal() {
  const router = useRouter();
  return (
    <ModalLayout>
      <div className="flex justify-center mt-4">
        <Button onClick={router.back} color="primary" size="sm">
          Close
        </Button>
      </div>
    </ModalLayout>
  );
}

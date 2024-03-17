"use client";

import { Button } from "@/components/ui/button";
import { Trash } from "lucide-react";
import { useFormStatus } from "react-dom";

export const FormDelete = () => {
  const { pending } = useFormStatus();

  return (
    <Button disabled={pending} type="submit" variant="destructive" size="sm">
      <Trash className="size-4" />
    </Button>
  );
};

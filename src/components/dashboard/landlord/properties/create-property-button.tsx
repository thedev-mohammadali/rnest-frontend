"use client";

import { Button } from "@/components/ui/button";
import { Plus } from "lucide-react";
import { useState } from "react";

import CreatePropertyModal from "./create-property-modal";

const CreatePropertyButton = () => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button onClick={() => setOpen(true)}>
        <Plus />
        Create Property
      </Button>

      <CreatePropertyModal open={open} onOpenChange={setOpen} />
    </>
  );
};

export default CreatePropertyButton;

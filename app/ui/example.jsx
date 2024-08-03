// Based on https://headlessui.com/react/dialog
import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";

export default function Example() {
  let [isOpen, setIsOpen] = useState(true);

  return (
    <div className="mt-4">
      <Button
        onClick={() => setIsOpen(true)}
        className="rounded-md bg-black py-2 px-4 text-white"
      >
        Open dialog
      </Button>

      <Dialog
        open={isOpen}
        onClose={() => setIsOpen(false)}
        className="relative z-50"
      >
        <div className="fixed inset-0 flex w-screen items-center justify-center p-4">
          <DialogPanel className="max-w-lg space-y-4 border border-black bg-white p-12">
            <DialogTitle>Deactivate account order</DialogTitle>

            {/* ... */}
            <div className="mt-4">
              <Button
                className="rounded-md bg-black py-2 px-4 text-white"
                onClick={() => setIsOpen(false)}
              >
                Close
              </Button>
            </div>
          </DialogPanel>
        </div>
      </Dialog>
    </div>
  );
}

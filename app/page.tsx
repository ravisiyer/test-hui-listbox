import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <p>Hi there!</p>
      <Link href="/testclient" className="underline block my-4">
        Test Listbox component of headlessui/react
      </Link>
      <Link href="/testclient2" className="underline block my-4">
        Test2 Listbox component of headlessui/react
      </Link>
      {/* <Link href="/testclient3" className="underline block my-4">
        Test3 of Dialog component of headlessui/react
      </Link> */}
    </main>
  );
}

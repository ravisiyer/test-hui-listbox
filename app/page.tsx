import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6">
      <h2 className="text-2xl">
        Tests of Listbox component of headlessui/react
      </h2>
      <Link href="/testclient" className="underline block my-4">
        Test(1): Based on or similar to Headless UI example code; Dropdown
      </Link>
      <Link href="/testclient2" className="underline block my-4">
        Test2: Simplified example with minimal styling; Multiple selections;
        Dropdown
      </Link>
      <Link href="/testclient3" className="underline block my-4">
        Test3: Simplified example with minimal styling; Multiple selections;
        ListBox always open
      </Link>
      <Link href="/testclient4" className="underline block my-4">
        Test4: Multiple selections; ListBox always open; State variable moved to
        Page and passes as prop to ListBox wrapper component
      </Link>
      <Link href="/testclient5" className="underline block my-4">
        Test5: Adds Select All and Clear All buttons
      </Link>
      <Link href="/testclient6" className="underline block my-4">
        Test6: 3 ListBoxes with associated 3 state variables; Hardcoded number
        of listboxes and state variables
      </Link>
      <Link href="/testclient7" className="underline block my-4">
        Test7: 3 ListBoxes which use same state variable holding 2D array of
        selections; Number of Listboxes hardcoded
      </Link>
      <Link href="/testclient8" className="underline block my-4">
        Test8: Number of Listboxes created is dynamically based on length of
        (1st Dimension of) peopleAllLanguages data constant array (2D)
      </Link>
      <Link href="/testclient9" className="underline block my-4">
        Test9: Adds saving selections to cookie and loading it from cookie;
        Improves UI
      </Link>
      <Link href="/testclient10" className="underline block my-4">
        Test10: Fixed issues in increase or decrease in number of languages in
        peopleAllLanguages data constant
      </Link>
    </main>
  );
}

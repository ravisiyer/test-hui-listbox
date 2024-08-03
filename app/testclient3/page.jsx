"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { useState } from "react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export function Example() {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);

  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      <ListboxButton>Select Translators</ListboxButton>
      <ListboxOptions static>
        {people.map((person) => (
          <ListboxOption
            key={person.id}
            value={person}
            className="data-[selected]:bg-blue-400"
          >
            {person.name}
          </ListboxOption>
        ))}
      </ListboxOptions>
    </Listbox>
  );
}

function Page() {
  return (
    <div className="flex flex-col justify-center items-center">
      {/* <div className="flex flex-col justify-center items-center bg-black"> */}
      <h2 className="">Test3 Listbox component of headlessui/react</h2>
      <Example />
    </div>
  );
}
export default Page;

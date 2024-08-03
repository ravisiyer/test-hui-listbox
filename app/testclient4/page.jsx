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

export function Example({ selectedPeople, setSelectedPeople }) {
  // const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);

  return (
    <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple>
      {({ open }) => (
        <>
          <ListboxButton>Select Translators</ListboxButton>
          {/* {open && ( */}
          {
            <div>
              <ListboxOptions static>
                {/* <ListboxOptions anchor="bottom" static> */}
                {people.map((person) => (
                  <ListboxOption
                    key={person.id}
                    value={person}
                    className="data-[selected]:bg-blue-400"
                    // className="data-[focus]:bg-blue-100"
                  >
                    {person.name}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          }
        </>
      )}
    </Listbox>
  );
}

function Page() {
  const [selectedPeople, setSelectedPeople] = useState([people[0], people[1]]);

  return (
    <>
      <div className="flex flex-col justify-center items-center">
        {/* <div className="flex flex-col justify-center items-center bg-black"> */}
        <h2 className="">Test4 Listbox component of headlessui/react</h2>
        <Example
          selectedPeople={selectedPeople}
          setSelectedPeople={setSelectedPeople}
        />
        <p className="">
          Page component showing selected people from included Example component
          above.
        </p>
        <p className="">
          {selectedPeople.map((person) => person.name).join(", ")}
        </p>
      </div>
    </>
  );
}
export default Page;

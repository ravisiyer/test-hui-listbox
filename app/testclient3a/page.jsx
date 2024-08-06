"use client";
import {
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";

const people = [
  { id: 1, name: "Durward Reynolds" },
  { id: 2, name: "Kenton Towne" },
  { id: 3, name: "Therese Wunsch" },
  { id: 4, name: "Benedict Kessler" },
  { id: 5, name: "Katelyn Rohan" },
];

export function Example() {
  let selectedPeople = [people[0], people[1]];

  return (
    <Listbox defaultValue={selectedPeople} multiple>
      {/* <Listbox value={selectedPeople} onChange={setSelectedPeople} multiple> */}
      {/* {({ value }) => value.map((person) => person.name).join(", ")} */}
      {/* Above statement does not seem to work. Don't know why? */}
      <ListboxButton>
        {({ value }) => value.map((person) => person.name).join(", ")}
        {/* {({ value }) => {
          return <p>"hi"</p>;
        }} */}
      </ListboxButton>
      {/* <ListboxButton>Select Translators</ListboxButton> */}
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
      <h2 className="">Test3a Listbox component of headlessui/react</h2>
      <p>
        Simplified example with minimal styling; Multiple selections; ListBox
        always open; Uncontrolled component (no state variable); render prop
        used
      </p>

      <Example />
    </div>
  );
}
export default Page;

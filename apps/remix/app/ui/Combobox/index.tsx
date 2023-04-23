import * as React from "react";

import { Check, ChevronsUpDown } from "lucide-react";

import { Button } from "@/ui/Button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/ui/Command";
import { Popover, PopoverContent, PopoverTrigger } from "@/ui/Popover";

import { cn } from "@/utils";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

interface ComboboxItem<T> {
  data: T;
  id: string;
  label: string;
}

export function Combobox<T>() {
  const data: ComboboxItem<T>[] = frameworks.map((f) => ({
    data: f,
    id: f.value,
    label: f.label,
  }));
  const [open, setOpen] = React.useState(false);

  const [selectedValues, setSelectedValues] = React.useState<ComboboxItem<T>[]>(
    [],
  );
  const selectedValuesIds = selectedValues.map((sv) => sv.id);

  const onSelect = (currentValue: string) => {
    const sv = data.find((d) => d.id === currentValue);
    if (sv) {
      if (selectedValuesIds.includes(currentValue)) {
        setSelectedValues(
          selectedValues.filter((sv) => sv.id !== currentValue),
        );
      } else {
        setSelectedValues([...selectedValues, sv]);
      }
    }
    //setOpen(false);
  };

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {selectedValues?.length > 0
            ? selectedValues.map((s) => <span key={s.id}>{s.label}, </span>)
            : "Select ..."}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search framework..." />
          <CommandEmpty>No framework found.</CommandEmpty>
          <CommandGroup>
            {data.map((item) => (
              <CommandItem key={item.id} onSelect={onSelect}>
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    selectedValuesIds.includes(item.id)
                      ? "opacity-100"
                      : "opacity-0",
                  )}
                />
                {item.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}

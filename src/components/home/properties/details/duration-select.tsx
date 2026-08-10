"use client";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

type DurationSelectProps = {
  value?: number;
  onChange: (value: number) => void;
};

const durations = [
  {
    label: "1 months",
    value: 1,
  },
  {
    label: "3 months",
    value: 3,
  },
  {
    label: "6 months",
    value: 6,
  },
  {
    label: "12 months",
    value: 12,
  },
  {
    label: "24 months",
    value: 24,
  },
  {
    label: "36 months",
    value: 36,
  },
];

const DurationSelect = ({ value, onChange }: DurationSelectProps) => {
  return (
    <Select
      value={value?.toString()}
      onValueChange={(value) => onChange(Number(value))}
    >
      <SelectTrigger className="w-full">
        <SelectValue placeholder="Select duration" />
      </SelectTrigger>

      <SelectContent>
        {durations.map((duration) => (
          <SelectItem key={duration.value} value={duration.value.toString()}>
            {duration.label}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
};

export default DurationSelect;

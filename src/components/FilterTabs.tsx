
import React from 'react';

interface FilterTabsProps<T> {
  options: { label: string; value: T }[];
  currentValue: T;
  onChange: (value: T) => void;
  title?: string;
}

const FilterTabs = <T extends string,>({ options, currentValue, onChange, title }: FilterTabsProps<T>) => {
  return (
    <div className="mb-6">
      {title && <h5 className="text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-2 px-1">{title}</h5>}
      <div className="flex flex-wrap gap-2">
        {options.map((option) => (
          <button
            key={option.value}
            onClick={() => onChange(option.value)}
            className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
              currentValue === option.value
                ? 'bg-gray-900 text-white shadow-md'
                : 'bg-white text-gray-600 border border-gray-200 hover:border-gray-300'
            }`}
          >
            {option.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default FilterTabs;

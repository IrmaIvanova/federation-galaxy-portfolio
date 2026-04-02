// src/components/common/List/ListHeader.tsx
import React from 'react';
import { Input, Section } from '@packages/shared/src';

interface ListHeaderProps {
  onSearch: (value: string) => void;
  placeholder?: string;
  debounceMs?: number;
}

export const ListHeader: React.FC<ListHeaderProps> = ({
  onSearch,
  placeholder = 'Найти...',
  debounceMs = 500,
}) => {
  return (
    <Section className="mb-6">
      <Input
        type="search"
        onSearch={onSearch}
        placeholder={placeholder}
        leftIcon="/src/assets/svg/Search.svg"
        debounceMs={debounceMs}
      />
    </Section>
  );
};
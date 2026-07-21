'use client';

import React, { forwardRef, useState, useRef, useEffect } from 'react';

export interface SelectOption {
  label: string;
  value: string;
  disabled?: boolean;
}

export interface SelectProps {
  options: SelectOption[];
  value?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  label?: string;
  errorText?: string;
  helperText?: string;
  searchable?: boolean;
  disabled?: boolean;
  className?: string;
}

const Select = forwardRef<HTMLDivElement, SelectProps>(
  ({ options, value, onChange, placeholder = 'Select...', label, errorText, helperText, searchable = false, disabled = false, className = '' }, ref) => {
    const [isOpen, setIsOpen] = useState(false);
    const [search, setSearch] = useState('');
    const containerRef = useRef<HTMLDivElement>(null);
    const isError = !!errorText;

    const selectedOption = options.find((o) => o.value === value);

    const filteredOptions = searchable
      ? options.filter((o) => o.label.toLowerCase().includes(search.toLowerCase()))
      : options;

    useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
          setIsOpen(false);
          setSearch('');
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
      <div ref={ref} className={`flex flex-col gap-1 w-full ${className}`}>
        {label && (
          <label className="font-sans text-[11px] font-semibold text-slate-400 uppercase tracking-wider mb-1">
            {label}
          </label>
        )}

        <div ref={containerRef} className="relative">
          <button
            type="button"
            disabled={disabled}
            onClick={() => !disabled && setIsOpen(!isOpen)}
            className={`w-full px-4 py-3 bg-slate-950/80 border rounded-lg text-left text-sm transition-all focus:outline-none focus:ring-4 flex items-center justify-between ${
              isError
                ? 'border-red-500 focus:border-red-500 focus:ring-red-500/15'
                : 'border-white/10 focus:border-indigo-500 focus:ring-indigo-500/15'
            } ${disabled ? 'opacity-55 cursor-not-allowed' : 'cursor-pointer'}`}
          >
            <span className={selectedOption ? 'text-slate-200' : 'text-slate-600'}>
              {selectedOption?.label || placeholder}
            </span>
            <span className={`transition-transform duration-200 text-slate-500 ${isOpen ? 'rotate-180' : ''}`}>
              ▾
            </span>
          </button>

          {isOpen && (
            <div className="absolute z-50 top-full mt-1 w-full bg-slate-900 border border-white/10 rounded-lg shadow-xl overflow-hidden animate-in fade-in">
              {searchable && (
                <div className="p-2 border-b border-white/5">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search..."
                    className="w-full px-3 py-2 bg-slate-950 border border-white/10 rounded text-sm text-slate-200 placeholder-slate-600 focus:outline-none focus:border-indigo-500"
                    autoFocus
                  />
                </div>
              )}
              <ul className="max-h-56 overflow-y-auto py-1">
                {filteredOptions.length === 0 ? (
                  <li className="px-4 py-3 text-sm text-slate-500 text-center">No results found</li>
                ) : (
                  filteredOptions.map((option) => (
                    <li
                      key={option.value}
                      onClick={() => {
                        if (!option.disabled) {
                          onChange?.(option.value);
                          setIsOpen(false);
                          setSearch('');
                        }
                      }}
                      className={`px-4 py-2.5 text-sm cursor-pointer transition-colors ${
                        option.value === value
                          ? 'bg-indigo-600/20 text-indigo-300'
                          : option.disabled
                          ? 'text-slate-600 cursor-not-allowed'
                          : 'text-slate-300 hover:bg-slate-800 hover:text-slate-100'
                      }`}
                    >
                      {option.label}
                    </li>
                  ))
                )}
              </ul>
            </div>
          )}
        </div>

        {errorText && <span className="text-[11px] text-red-400 font-medium">{errorText}</span>}
        {!errorText && helperText && <span className="text-[11px] text-slate-500">{helperText}</span>}
      </div>
    );
  }
);

Select.displayName = 'Select';

export default Select;

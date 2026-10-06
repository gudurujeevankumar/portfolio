'use client';

import React, { useState } from 'react';

export interface BranchedMenuItemChild {
  value: string;
  label: string;
  badge?: string;
  href?: string;
}

export interface BranchedMenuItemParent {
  label: string;
  children: BranchedMenuItemChild[];
}

interface BranchedMenuProps {
  items: BranchedMenuItemParent[];
  defaultOpen?: number[];
  defaultActive?: string;
  activeValue?: string;
  onSelect?: (value: string, item: BranchedMenuItemChild) => void;
  color?: string;
  accentColor?: string;
  lineColor?: string;
  width?: number | string;
  rowHeight?: number;
  indent?: number;
  trunk?: number;
  radius?: number;
  lineWidth?: number;
  fontSize?: number;
  title?: string;
  subtitle?: string;
  className?: string;
}

export default function BranchedMenu({
  items,
  defaultOpen = [0, 1, 2, 3],
  defaultActive,
  activeValue: controlledActive,
  onSelect,
  lineColor,
  width = '100%',
  rowHeight = 36,
  indent = 28,
  trunk = 12,
  radius = 8,
  lineWidth = 1.5,
  fontSize = 12,
  title = 'PROJECT NAVIGATION',
  subtitle = 'INTERACTIVE TREE',
  className = '',
}: BranchedMenuProps) {
  const [openSections, setOpenSections] = useState<number[]>(defaultOpen);
  const [internalActive, setInternalActive] = useState<string>(defaultActive || '');

  const activeValue = controlledActive !== undefined ? controlledActive : internalActive;

  const toggleSection = (index: number) => {
    setOpenSections((prev) =>
      prev.includes(index) ? prev.filter((i) => i !== index) : [...prev, index]
    );
  };

  const handleSelect = (child: BranchedMenuItemChild) => {
    setInternalActive(child.value);
    if (onSelect) {
      onSelect(child.value, child);
    } else {
      // Default to smooth scrolling to the project element by ID/hash without any page redirection
      const targetId = child.value.startsWith('#')
        ? child.value.slice(1)
        : child.href?.startsWith('#')
        ? child.href.slice(1)
        : child.value;
      const el = document.getElementById(targetId) || document.querySelector(`#${targetId}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
  };

  return (
    <div
      className={`font-mono select-none rounded-xl border border-border-subtle bg-surface/90 p-4 backdrop-blur-md ${className}`}
      style={{
        width: typeof width === 'number' ? `${width}px` : width,
        fontSize: `${fontSize}px`,
      }}
    >
      {/* IDE Header */}
      <div className="flex items-center justify-between pb-3 mb-2 border-b border-border-subtle shrink-0">
        <div className="flex items-center gap-2">
          <svg className="w-3.5 h-3.5 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" />
          </svg>
          <span className="text-[11px] font-semibold text-foreground uppercase tracking-wider font-mono">
            {title}
          </span>
        </div>
        <span className="text-[10px] text-accent font-medium font-mono px-2 py-0.5 rounded-full bg-accent/10 border border-accent/20">
          {subtitle}
        </span>
      </div>

      {/* Internally Scrollable Tree Items Container */}
      <div className="flex-1 overflow-y-auto pr-1 space-y-2.5 scrollbar-thin">
        {items.map((parent, parentIdx) => {
          const isOpen = openSections.includes(parentIdx);

          return (
            <div key={parent.label} className="relative flex flex-col">
              {/* Parent Header */}
              <button
                type="button"
                onClick={() => toggleSection(parentIdx)}
                className="flex items-center gap-2 py-1 px-2 rounded-lg text-left text-foreground hover:bg-surface-hover transition-colors font-medium cursor-pointer group"
                style={{ height: `${rowHeight}px` }}
              >
                <span
                  className={`w-3.5 h-3.5 flex items-center justify-center text-muted-foreground transition-transform duration-200 ${
                    isOpen ? 'rotate-90' : ''
                  }`}
                >
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
                <span className="text-xs uppercase tracking-wider text-muted-foreground group-hover:text-foreground font-semibold">
                  {parent.label}
                </span>
                <span className="text-[10px] text-subtle-foreground ml-auto">
                  ({parent.children.length})
                </span>
              </button>

              {/* Children with SVG connector branches */}
              {isOpen && (
                <div className="relative flex flex-col" style={{ paddingLeft: `${indent}px` }}>
                  {/* SVG Tree Connectors */}
                  <svg
                    className="absolute left-0 top-0 bottom-0 pointer-events-none"
                    style={{ width: `${indent}px`, height: '100%' }}
                  >
                    {parent.children.map((_, childIdx) => {
                      const yPos = childIdx * rowHeight + rowHeight / 2;
                      const pathD = `M ${trunk} 0 V ${yPos - radius} Q ${trunk} ${yPos} ${trunk + radius} ${yPos} H ${indent - 4}`;
                      return (
                        <path
                          key={childIdx}
                          d={pathD}
                          fill="none"
                          stroke={lineColor || 'var(--border-subtle)'}
                          strokeWidth={lineWidth}
                          strokeLinecap="round"
                        />
                      );
                    })}
                  </svg>

                  {/* Child Node Items */}
                  {parent.children.map((child) => {
                    const isActive = activeValue === child.value;

                    return (
                      <button
                        key={child.value}
                        type="button"
                        onClick={() => handleSelect(child)}
                        className={`w-full flex items-center justify-between gap-1.5 px-2.5 rounded-lg text-left transition-all cursor-pointer group ${
                          isActive
                            ? 'bg-accent/15 text-accent font-semibold border border-accent/35 shadow-2xs'
                            : 'text-muted-foreground hover:text-foreground hover:bg-surface-hover border border-transparent'
                        }`}
                        style={{ height: `${rowHeight}px` }}
                      >
                        <span className="text-xs truncate flex items-center gap-1.5 min-w-0">
                          <span
                            className={`w-1.5 h-1.5 rounded-full shrink-0 transition-transform ${
                              isActive ? 'bg-accent scale-125 shadow-xs' : 'bg-muted-foreground/40 group-hover:bg-foreground'
                            }`}
                          />
                          <span className="truncate">{child.label}</span>
                        </span>

                        {child.badge && (
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-surface border border-border-subtle text-subtle-foreground shrink-0 ml-1">
                            {child.badge}
                          </span>
                        )}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* IDE Status Footer */}
      <div className="pt-2.5 mt-2 border-t border-border-subtle flex items-center justify-between text-[10px] font-mono text-muted-foreground shrink-0">
        <span className="flex items-center gap-1.5">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          <span>11 Projects Indexed</span>
        </span>
        <span className="text-accent/80 font-medium">Smooth Jump</span>
      </div>
    </div>
  );
}

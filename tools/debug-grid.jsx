import React from 'react';

export const DebugGrid = () => (
    <div
        style={ {
            pointerEvents: 'none',
            opacity: 0.3,
            zIndex: 999999,
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',

            background: `linear-gradient(-90deg, rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.05) 1px, transparent 1px),
    linear-gradient(-90deg, rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(rgba(0, 0, 0, 0.04) 1px, transparent 1px),
    linear-gradient(
      transparent 3px,
      #f2f2f2 3px,
      #f2f2f2 calc(32px - 2px),
      transparent calc(32px - 2px)
    ),
    linear-gradient(-90deg, #aaaaaa 1px, transparent 1px),
    linear-gradient(
      -90deg,
      transparent 3px,
      #f2f2f2 3px,
      #f2f2f2 calc(32px - 2px),
      transparent calc(32px - 2px)
    ),
    linear-gradient(#aaaaaa 1px, transparent 1px), #f2f2f2;`,
            backgroundSize: `8px 8px, 8px 8px,
    16px 16px, 16px 16px,
    32px 32px, 32px 32px,
    32px 32px, 32px 32px;`
        } }
    />
);

import React from 'react';

interface SwissCrossProps {
  size?: number | string;
  className?: string;
  borderRadius?: 'none' | 'slight' | 'round';
  backgroundColor?: string;
  crossColor?: string;
}

export function SwissCross({
  size = 20,
  className,
  borderRadius = 'none',
  backgroundColor = '#FF0000',
  crossColor = '#FFFFFF',
}: SwissCrossProps) {
  const borderRadiusStyle = {
    none: '0',
    slight: '2px',
    round: '50%',
  }[borderRadius];

  const sizeStyle = typeof size === 'number' ? `${size}px` : size;

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: sizeStyle,
    height: sizeStyle,
    backgroundColor,
    borderRadius: borderRadiusStyle,
  };

  const horizontalBarStyle: React.CSSProperties = {
    position: 'absolute',
    width: '80%',
    height: '20%',
    backgroundColor: crossColor,
  };

  const verticalBarStyle: React.CSSProperties = {
    position: 'absolute',
    width: '20%',
    height: '80%',
    backgroundColor: crossColor,
  };

  return (
    <div
      className={className}
      style={containerStyle}
    >
      {/* Horizontal bar of cross */}
      <div style={horizontalBarStyle} />
      {/* Vertical bar of cross */}
      <div style={verticalBarStyle} />
    </div>
  );
}

export type { SwissCrossProps };
# Swiss Cross

A lightweight React component for rendering the Swiss cross symbol.

## Installation

```bash
npm install swiss-cross
# or
pnpm add swiss-cross
# or
yarn add swiss-cross
```

## Usage

```tsx
import { SwissCross } from 'swiss-cross';

function App() {
  return (
    <div>
      {/* Basic usage */}
      <SwissCross />
      
      {/* Custom size */}
      <SwissCross size={40} />
      
      {/* Custom colors */}
      <SwissCross 
        backgroundColor="#CC0000" 
        crossColor="#FFFFFF" 
      />
      
      {/* With border radius */}
      <SwissCross 
        size={60} 
        borderRadius="round" 
        backgroundColor="#FF0000"
      />
      
      {/* With custom CSS class */}
      <SwissCross 
        className="my-swiss-cross" 
        size="3rem"
      />
    </div>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `size` | `number \| string` | `20` | Size of the cross (in pixels if number, or any valid CSS unit as string) |
| `className` | `string` | `undefined` | Additional CSS class names |
| `borderRadius` | `'none' \| 'slight' \| 'round'` | `'none'` | Border radius style |
| `backgroundColor` | `string` | `'#FF0000'` | Background color (Swiss red by default) |
| `crossColor` | `string` | `'#FFFFFF'` | Cross color (white by default) |

## TypeScript Support

This package includes TypeScript definitions. The `SwissCrossProps` type is also exported for your convenience:

```tsx
import { SwissCross, SwissCrossProps } from 'swiss-cross';

const MyComponent: React.FC<{ crossProps: SwissCrossProps }> = ({ crossProps }) => {
  return <SwissCross {...crossProps} />;
};
```

## License

MIT
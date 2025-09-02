# Swiss Cross

A lightweight React component for rendering the Swiss cross symbol with zero dependencies and full TypeScript support.

[![CI](https://github.com/Fx64b/swiss-cross/workflows/CI/badge.svg)](https://github.com/Fx64b/swiss-cross/actions)

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

## Development

```bash
# Install dependencies
pnpm install

# Run tests
pnpm test

# Run tests in watch mode
pnpm test:watch

# Run tests with coverage
pnpm test:coverage

# Build the package
pnpm build

# Start development mode
pnpm dev
```

## Requirements

- Node.js ≥14.0.0
- React ≥16.8.0

## Contributing

Please read our [Contributing Guidelines](CONTRIBUTING.md) for details on how to submit pull requests.

## Security

For security concerns, please see our [Security Policy](SECURITY.md).

## License

[MIT](LICENSE)
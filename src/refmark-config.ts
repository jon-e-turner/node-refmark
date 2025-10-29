export interface RefmarkConfig {
  options: {
    [key: string]: {
      type: 'string' | 'boolean';
      multiple?: boolean;
      short?: string;
      default?: string | boolean | string[] | boolean[];
    };
  };
  strict?: boolean;
  allowPositionals?: boolean;
  allowNegative?: boolean;
  tokens?: boolean;
}

export default function RefmarkConfig(): RefmarkConfig {
  return {
    options: {
      baseUri: {
        type: 'string',
        multiple: false,
        short: 'b',
        default: undefined,
      },
      ref: {
        type: 'string',
        multiple: false,
        short: 'r',
        default: undefined,
      },
    },
    allowNegative: true,
    tokens: true,
  };
}

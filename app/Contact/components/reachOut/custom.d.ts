// src/custom.d.ts
declare namespace JSX {
  interface IntrinsicElements {
    'lord-icon': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement> & {
      src: string;
      trigger?: string;
      colors?: string;
      stroke?: string;
      style?: React.CSSProperties | string;
    };
  }
}

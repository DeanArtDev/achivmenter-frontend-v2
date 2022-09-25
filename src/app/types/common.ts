declare let TEST_VAR: string;

declare module '*.svg' {
  import React from 'react';

  const SVG: React.FC<React.SVGProps<SVGSVGElement>>;
  export default SVG;
}

declare module '*.png' {
  const value: string;
  export default value;
}
declare module '*.jpg' {
  const value: string;
  export default value;
}
declare module '*.jpeg' {
  const value: string;
  export default value;
}
declare module '*.webp' {
  const value: string;
  export default value;
}
declare module '*.ttf';
declare module '*.eot';
declare module '*.woff';
declare module '*.woff2';

import React, { useEffect, useRef } from 'react';
import Prism from 'prismjs';
import { cn } from '../../../utils/cn';
import { useTheme } from '../../../providers';
// Языки
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-jsx';
import 'prismjs/components/prism-tsx';
import 'prismjs/components/prism-javascript';

export interface CodeBlockProps {
  code: string;
  language?: 'typescript' | 'javascript' | 'jsx' | 'tsx';
  className?: string;
}

export const CodeBlock: React.FC<CodeBlockProps> = ({
  code,
  language = 'typescript',
  className,
}) => {
  const codeRef = useRef<HTMLElement>(null);
  const { isDark } = useTheme();

  useEffect(() => {
    if (codeRef.current) {
      Prism.highlightElement(codeRef.current);
    }
  }, [code, language]);

  return (
    <div className={cn(
      'rounded-lg overflow-hidden',
      isDark ? 'prism-theme-dark' : 'prism-theme-light',
      className
    )}>
      <pre>
        <code 
          ref={codeRef} 
          className={`language-${language}`}
        >
          {code}
        </code>
      </pre>
    </div>
  );
};
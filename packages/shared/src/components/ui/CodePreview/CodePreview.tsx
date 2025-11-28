import React, { useState } from 'react';
import { CodeBlock } from '../CodeBlock';
import { Button } from '../Button';
import { Card } from '../Card';
import { cn } from '../../../utils/cn';

export interface CodePreviewProps {
  code: string;
  preview: React.ReactNode;
  language?: 'typescript' | 'javascript' | 'jsx' | 'tsx';
  className?: string;
}

export const CodePreview: React.FC<CodePreviewProps> = ({
  code,
  preview,
  language = 'tsx',
  className,
}) => {
  const [showCode, setShowCode] = useState(false);

  return (
    <Card className={cn('overflow-hidden', className)}>
      {/* Preview Section */}
      <div className="p-6 border-b border-gray-200 dark:border-gray-700">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-copy">Preview</h3>
          <Button
            variant="outline"
            size="sm"
            onClick={() => setShowCode(!showCode)}
          >
            {showCode ? '👁️ Show Preview' : '📝 Show Code'}
          </Button>
        </div>
        
        {!showCode && (
          <div className="flex justify-left items-center min-h-[100px] p-4 bg-light-background-muted dark:bg-dark-background-muted rounded-lg">
            {preview}
          </div>
        )}
      </div>

      {/* Code Section */}
      {showCode && (
        <div className="p-0">
          <CodeBlock 
            code={code} 
            language={language}
            className="border-0 rounded-none"
          />
        </div>
      )}
    </Card>
  );
};
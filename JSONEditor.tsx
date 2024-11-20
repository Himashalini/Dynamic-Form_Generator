import React, { useRef, useEffect } from 'react';

interface JSONEditorProps {
  value: string;
  onChange: (value: string) => void;
  error: string | null;
}

const JSONEditor: React.FC<JSONEditorProps> = ({ value, onChange, error }) => {
  const textareaRef = useRef<HTMLTextAreaElement | null>(null);

  // Auto-resize the textarea when the content changes (vertical resizing only)
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto'; // Reset the height before recalculating
      textareaRef.current.style.height = `${textareaRef.current.scrollHeight}px`; // Set height based on content
    }
  }, [value]);

  return (
    <div className="w-full lg:w-1/2 p-6">
      <textarea
        ref={textareaRef}
        className="w-full min-h-[150px] border-2 border-gray-300 rounded-lg bg-gradient-to-r from-gray-100 via-white to-gray-200 focus:outline-none focus:ring-4 focus:ring-blue-400 focus:border-blue-500 resize-none overflow-x-auto text-right scrollbar-thin scrollbar-thumb-blue-400 scrollbar-track-gray-100"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Enter JSON Schema here..."
      />
      {error && <p className="text-red-500 mt-2 text-sm">{error}</p>}
    </div>
  );
};

export default JSONEditor;

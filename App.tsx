import React, { useState } from 'react';
import JSONEditor from './components/JSONEditor';
import FormPreview from './components/FormPreview';

const App: React.FC = () => {
  const [jsonSchema, setJsonSchema] = useState<string>('');
  const [parsedSchema, setParsedSchema] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSchemaChange = (newSchema: string) => {
    setJsonSchema(newSchema);
    try {
      const parsed = JSON.parse(newSchema);
      setParsedSchema(parsed);
      setError(null);
    } catch (err: any) {
      setParsedSchema(null);
      setError('Invalid JSON format');
    }
  };

  return (
    <div className="flex flex-col items-center min-h-screen p-6 bg-gradient-to-r from-teal-300 via-blue-300 to-purple-300">
      <h1
        className="text-4xl lg:text-5xl font-bold text-white bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 px-8 py-4 rounded-lg cursor-pointer hover:opacity-90 hover:shadow-2xl transition duration-300 text-center mb-8 mt-12"
        onClick={() => alert('Dynamic Form Generator clicked!')}
      >
        Dynamic Form Generator
      </h1>

      <div className="flex flex-col lg:flex-row w-full lg:w-3/4 gap-8 lg:gap-12 mb-12">
        <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-lg transition-all duration-500 hover:shadow-2xl">
          <JSONEditor
            value={jsonSchema}
            onChange={handleSchemaChange}
            error={error}
          />
        </div>

        <div className="w-full lg:w-1/2 bg-white p-6 rounded-xl shadow-lg">
          <FormPreview schema={parsedSchema} />
        </div>
      </div>
    </div>
  );
};

export default App;

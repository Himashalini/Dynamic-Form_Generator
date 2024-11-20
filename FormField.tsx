import React from 'react';

interface FormFieldProps {
  field: {
    label: string;
    type: string;
    name: string;
    required?: boolean;
  };
}

const FormField: React.FC<FormFieldProps> = ({ field }) => {
  return (
    <div className="space-y-2">
      {/* Label */}
      <label className="block text-lg font-medium text-gray-800 mb-1">{field.label}</label>

      {/* Input Field */}
      <input
        type={field.type}
        name={field.name}
        required={field.required}
        className="w-full px-4 py-2 border rounded-lg bg-gray-50 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition duration-300 ease-in-out hover:bg-gray-100"
        placeholder={`Enter your ${field.label.toLowerCase()}...`}
      />
    </div>
  );
};

export default FormField;

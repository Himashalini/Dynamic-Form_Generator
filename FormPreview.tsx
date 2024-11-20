import React from 'react';
import FormField from './FormField';

interface FormPreviewProps {
  schema: any;
}

const FormPreview: React.FC<FormPreviewProps> = ({ schema }) => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const formData = new FormData(e.target as HTMLFormElement);

    // Manually create the data object
    const data: { [key: string]: string } = {};

    formData.forEach((value, key) => {
      data[key] = value as string;
    });

    // Check if all fields are filled
    const allFieldsFilled = Object.values(data).every(value => value.trim() !== "");

    if (!allFieldsFilled) {
      alert('Please fill all fields before submitting.');
      return; // Stop submission if any field is empty
    }

    console.log(data);
    alert('Form submitted successfully!');
  };

  if (!schema) {
    return (
      <div className="w-full lg:w-1/2 p-6 bg-gradient-to-r from-gray-100 via-gray-200 to-gray-300 rounded-lg shadow-xl">
        <p className="text-center text-gray-500 font-semibold">Form preview will appear here...</p>
      </div>
    );
  }

  return (
    <form className="w-full lg:w-1/2 p-6 bg-gradient-to-r from-green-100 via-blue-200 to-purple-300 rounded-lg shadow-xl space-y-6 transition-all duration-300 hover:shadow-2xl" onSubmit={handleSubmit}>
      {schema.fields?.map((field: any, index: number) => (
        <FormField key={index} field={field} />
      ))}
      <button
        type="submit"
        className="w-full bg-gradient-to-r from-blue-500 to-teal-500 text-white py-3 px-6 rounded-lg shadow-md hover:from-blue-600 hover:to-teal-600 transition duration-300 ease-in-out transform hover:scale-105"
      >
        Submit
      </button>
    </form>
  );
};

export default FormPreview;

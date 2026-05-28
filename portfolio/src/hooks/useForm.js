// src/hooks/useForm.js
// Simple form state management hook — handles input changes, validation, and reset
import { useState } from 'react';

export function useForm(initialValues) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});

  // Update a single field
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors((prev) => ({ ...prev, [name]: '' }));
    }
  };

  // Simple validation — checks required fields and email format
  const validate = () => {
    const newErrors = {};

    if (!values.name?.trim()) {
      newErrors.name = 'Name is required';
    }

    if (!values.email?.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      newErrors.email = 'Please enter a valid email';
    }

    if (!values.message?.trim()) {
      newErrors.message = 'Message is required';
    }

    setErrors(newErrors);
    // Returns true if no errors
    return Object.keys(newErrors).length === 0;
  };

  // Reset form to initial values
  const reset = () => {
    setValues(initialValues);
    setErrors({});
  };

  return { values, errors, handleChange, validate, reset };
}

import { useState } from 'react';

export function useForm(initialValues, validationRules) {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: undefined }));
  };

  const validate = () => {
    if (!validationRules) return true;
    const newErrors = {};
    let valid = true;
    for (const key in validationRules) {
      const msg = validationRules[key](values[key], values);
      if (msg) { newErrors[key] = msg; valid = false; }
    }
    setErrors(newErrors);
    return valid;
  };

  const handleSubmit = (onSubmit) => async (e) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    try { await onSubmit(values); } finally { setIsSubmitting(false); }
  };

  const reset = () => { setValues(initialValues); setErrors({}); setIsSubmitting(false); };

  return { values, errors, isSubmitting, handleChange, handleSubmit, reset, setErrors };
}

export default useForm;

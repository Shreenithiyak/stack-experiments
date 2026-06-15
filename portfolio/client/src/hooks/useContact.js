import { useMutation } from '@tanstack/react-query';
import { apiFetch } from '../utils/api.js';

export function useSubmitContact() {
  return useMutation({
    mutationFn: (data) =>
      apiFetch('/contact', { method: 'POST', body: JSON.stringify(data) }),
  });
}

const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5000/api';

export async function apiFetch(endpoint, options = {}) {
  const { params, headers, ...rest } = options;

  let url = `${API_BASE}${endpoint}`;
  if (params) {
    const q = new URLSearchParams(
      Object.fromEntries(Object.entries(params).filter(([, v]) => v != null))
    );
    if (q.toString()) url += `?${q}`;
  }

  const config = {
    method: rest.body ? 'POST' : 'GET',
    ...rest,
    credentials: 'include',
    headers: {
      'Content-Type': 'application/json',
      ...headers,
    },
  };

  const res = await fetch(url, config);
  if (res.status === 204) return {};
  const data = await res.json();
  if (!res.ok) throw new Error(data.message || 'Request failed');
  return data.data !== undefined ? data.data : data;
}

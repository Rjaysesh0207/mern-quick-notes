const BASE_URL = '/api/users';

export async function signUp(user) {
  // Fetch uses an options object as a second argument to make requests other than GET, include data, set headers
  const res = await fetch(BASE_URL, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(userData)
  })
  // Check if the request was successful
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('Invalid Sign Up')
  }
}
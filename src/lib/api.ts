export async function getAllData() {
  const res = await fetch('https://jsonplaceholder.typicode.com/posts')
 
  if (!res.ok) {
    throw new Error('Failed to fetch data')
  }
 
  return res.json()
}

export async function getDataById(id: any) {
  try {
     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
 
     if (!res.ok) {
       // Include the status code and status text in the error message
       throw new Error(`Failed to fetch data: ${res.status} ${res.statusText}`);
     }
 
     return res.json();
  } catch (error) {
     // Log the error for debugging purposes
     console.error(error);
     // Rethrow the error to be handled by the caller
     throw error;
  }
 }
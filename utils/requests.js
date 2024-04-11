//this fetches data from the database

const apiDomain = process.env.NEXT_PUBLIC_API_DOMAIN || null;

async function fetchProperties() {
    try {

        // Handle the case when the domain is not available yet
    if (!apiDomain) {
        return [];
    }

    const res = await fetch(
        `${apiDomain}/properties`,
        {
          cache: "no-store",
        }
      );
  
      if (!res.ok) {
        throw new Error("Failed to fetch data");
      }
  
      return await res.json();
    } catch (error) {
      console.log('Error fetching Properties',error);
      return []
    }
};

export { fetchProperties };
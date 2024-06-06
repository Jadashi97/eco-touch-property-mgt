import PropertyCard from "@/components/PropertyCard";
import { fetchProperties } from "@/utils/requests";
import PropertyFormSearch from "@/components/PropertyFormSearch";

const PropertiesPage = async () => {
  const properties = await fetchProperties();

  // Sort the properties by create date
  // console.log(properties);
  // properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));

  return (
    <>
      <section className="bg-green-700 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-start">
          <PropertyFormSearch />
        </div>
      </section>
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <h1 className="text-2xl mb-4">Browse Properties</h1>
          {properties.length === 0 ? (
            <p>No properties found</p>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property, index) => (
                <PropertyCard property={property} key={index} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default PropertiesPage;

// import Properties from "@/components/Properties";

// const PropertiesPage = async () => {
//   return (
//     <>
//       <section className="bg-blue-700 py-4">
//         <div className="max-w-7xl mx-auto px-4 flex flex-col items-start sm:px-6 lg:px-8">
//           <PropertyFormSearch />
//         </div>
//       </section>
//       <Properties />
//     </>
//   );
// };
// export default PropertiesPage;

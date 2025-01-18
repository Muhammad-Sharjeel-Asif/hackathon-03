import { client } from "@/sanity/lib/client";

export const fetchChefs = async () => {
  try{
    const chefQuery = `*[_type == "chef"] | order(_createdAt asc) {
      image, name, designation
      }`;

      const chefData = await client.fetch(chefQuery);
      return chefData;
  } catch (error){
    console.error("Error fetching products:", error);
    return [];
  }
      
};

export const fetchProduct = async () => {
  try {
    const productQuery = `*[_type == "food"] | order(_createdAt asc) {
      image, name, description, price, originalPrice, category,
      "slug": slug.current, tags, available
    }`;
    const productData = await client.fetch(productQuery);
    
    if (!productData || !Array.isArray(productData)) {
      console.error("API returned invalid data:", productData);
      return [];
    }

    return productData;
  } catch (error) {
    console.error("Error fetching products:", error);
    return [];
  }
};


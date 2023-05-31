import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId } from "../env";
import { product } from "../types/product";

export async function getProducts(): Promise<product[]> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn:false
  });

  return await client.fetch(groq`
  *[_type=='product']{

    name,
    "slug": slug.current,
    price,
    image
   
   
  }
  `);
}

export async function getproduct(slug: string): Promise<product> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn:false
  });

  return await client.fetch(
    groq`
  *[_type=='product' && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    name,
    price,
    image,
   
   
  }`,
    { slug }
  );
}

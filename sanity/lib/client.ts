import { createClient, groq } from "next-sanity";

import { apiVersion, dataset, projectId, useCdn } from "../env";
import { product } from "../types/product";

export async function getProducts(): Promise<product[]> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });

  return await client.fetch(groq`
  *[_type=='product']{

    name,
    "slug": slug.current,
    price,
    image,
    tags
   
   
  }
  `);
}

export async function getproduct(slug: string): Promise<product> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });

  return await client.fetch(
    groq`
  *[_type=='product' && slug.current == $slug][0]{
    _id,
    "slug": slug.current,
    name,
    price,
    image,
    tags
   
   
  }`,
    { slug }
  );
}

export async function getFemaleProducts(): Promise<product[]> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });
  return await client.fetch(
    groq`
    *[_type=='product' && category=='Female']{
      _id,
      name,
      "slug": slug.current,
      price,
      image,
      tags
     
     
    }`
  );
}

export async function getMaleProducts(): Promise<product[]> {
  const client = createClient({
    apiVersion,
    dataset,
    projectId,
    useCdn,
  });
  return await client.fetch(
    groq`
    *[_type=='product' && category=='Male']{
      _id,
      name,
      "slug": slug.current,
      price,
      image,
      tags
     
     
    }`
  );
}

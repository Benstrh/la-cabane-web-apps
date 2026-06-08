// GET

import { supabase } from "@/lib/supabase";

// All cabins
export const getAllCabins = async function () {
  const { data, error } = await supabase
    .from("cabins")
    .select("id, name, maxCapacity, regularPrice, discount, image")
    .order("name");

  if (error) {
    console.error(error.message);
    // throw new Error("Could not fetch cabins");
  }

  return data;
};

// Cabin by Id
export async function getCabin(id: string) {
  const { data, error } = await supabase
    .from("cabins")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    console.error(error.message);
  }

  return data;
}

"use server";
import { auth } from "@clerk/nextjs/server";
import { createSupabaseClient } from "../supabase";

export const createCompanion = async (formData: CreateCompanion) => {
    const { userId: author } = await auth();
    const supabase = createSupabaseClient();

    const { data, error } = await supabase
        .from("companions")
        .insert({
            ...formData,
            author,
        })
        .select();

    if (error || !data)
        throw new Error(error?.message || "Falha ao criar um companheiro");

    return data[0];
};

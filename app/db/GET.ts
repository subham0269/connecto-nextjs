import { unstable_noStore as noStore } from "next/cache";
import { createClient } from "."

export const getTopArtists = async () => {
    noStore();
    // await new Promise(resolve => setTimeout(resolve, 2000));
    try {
        const supabase = await createClient();
        const {data, error} = await supabase.from('artists').select().limit(5).gt('rating', 4.6);
        // console.log(data);

        if (!data) {
            return [];
        }
        
        return data;
        
    } catch (err) {
        console.log('Error in artists get',err);
        
    }
}
import { CountryDetails } from "@/types"
import axios from "@/utils/axios"

export async function regionFilter(region: string | null) {
    if (region) {
        const res = await axios.get(`/region/${region}`)
        const country = (await res.data) as CountryDetails[]
        return country
    } else {
        return
    }
}

import { CountryDetails } from "@/types"
import axios from "@/utils/axios"

export async function getCountry(name: string) {
    const res = await axios.get(`/name/${name}`)
    const country = (await res.data) as CountryDetails[]
    return country
}

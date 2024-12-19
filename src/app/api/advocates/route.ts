import db from "../../../db";
import { advocates } from "../../../db/schema";
import { advocateData } from "../../../db/seed/advocates";

export async function GET() {
  // Uncomment this line to use a database
  // const data = await db.select().from(advocates);

  const specialtyTypes = extractSpecialties(advocateData);
  const cities = extractCities(advocateData);
  const degreeTypes = extractDegrees(advocateData);

  const data = advocateData;

  return Response.json({ data, cities, degreeTypes, specialtyTypes });
}

// Would convert to Backend DB Queries
function extractCities(data: typeof advocateData) {
  const locations = data.map((advocate) => advocate.city);
  return Array.from(new Set(locations));
}

function extractSpecialties(data: typeof advocateData) {
  const allSpecialties = data.flatMap((advocate) => advocate.specialties);
  return Array.from(new Set(allSpecialties));
}

function extractDegrees(data: typeof advocateData) {
  const allDegrees = data.flatMap((advocate) => advocate.degree);
  return Array.from(new Set(allDegrees));
}

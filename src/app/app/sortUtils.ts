import { Advocate, FilterBy } from "./types";

export const sortAdvocatesByName = (advocates: Advocate[]): Advocate[] =>
  [...advocates].sort((a, b) =>
    `${a.firstName} ${a.lastName}`.localeCompare(`${b.firstName} ${b.lastName}`)
  );

export const sortAdvocatesByDegree = (advocates: Advocate[]): Advocate[] =>
  [...advocates].sort((a, b) => a.degree.localeCompare(b.degree));

export const sortAdvocatesByExperience = (advocates: Advocate[]): Advocate[] =>
  [...advocates].sort((a, b) => b.yearsOfExperience - a.yearsOfExperience);

export const sortAndFilterAdvocates = (
  advocates: Advocate[],
  sortBy: string,
  filterBy?: FilterBy,
  searchTerms?: string
): Advocate[] => {
  let filteredAdvocates: Advocate[] = advocates;

  if (filterBy !== undefined) {
    if (filterBy.city.length > 0) {
      filteredAdvocates = filteredAdvocates.filter((advocate) => {
        return filterBy.city.includes(advocate.city);
      });
    }

    if (filterBy.degree.length > 0) {
      filteredAdvocates = filteredAdvocates.filter((advocate) => {
        return filterBy.degree.includes(advocate.degree);
      });
    }

    if (filterBy.specialties.length > 0) {
      filteredAdvocates = filteredAdvocates.filter((advocate) => {
        return filterBy.specialties.some((specialty) =>
          advocate.specialties.includes(specialty)
        );
      });
    }
  }

  let sortedAdvocates: Advocate[] = [...filteredAdvocates];
  if (sortBy === "az") {
    sortedAdvocates = sortAdvocatesByName(filteredAdvocates);
  } else if (sortBy === "za") {
    sortedAdvocates = sortAdvocatesByName(filteredAdvocates).reverse();
  } else if (sortBy === "degreeAz") {
    sortedAdvocates = sortAdvocatesByDegree(filteredAdvocates);
  } else if (sortBy === "yearsOfExperienceHl") {
    sortedAdvocates = sortAdvocatesByExperience(filteredAdvocates);
  } else if (sortBy === "yearsOfExperienceLh") {
    sortedAdvocates = sortAdvocatesByExperience(filteredAdvocates).reverse();
  } else {
    sortedAdvocates = filteredAdvocates;
  }

  if (searchTerms) {
    sortedAdvocates = sortedAdvocates.filter((advocate) => {
      return (
        advocate.firstName.toLowerCase().includes(searchTerms.toLowerCase()) ||
        advocate.lastName.toLowerCase().includes(searchTerms.toLowerCase()) ||
        advocate.city.toLowerCase().includes(searchTerms.toLowerCase()) ||
        advocate.degree.toLowerCase().includes(searchTerms.toLowerCase()) ||
        advocate.specialties.some((specialty) =>
          specialty.toLowerCase().includes(searchTerms.toLowerCase())
        )
      );
    });
  }

  return sortedAdvocates;
};

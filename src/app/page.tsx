"use client";

import { ChangeEvent, useEffect, useState } from "react";
import AdvocateCard from "./app/components/Advocate/AdvocateCard";
import { Advocate, FilterBy } from "./app/types";
import {
  sortAdvocatesByDegree,
  sortAdvocatesByExperience,
  sortAdvocatesByName,
  sortAndFilterAdvocates,
} from "./app/sortUtils";
import SortComponent from "./app/components/Search/SortComponent";
import FilterComponent from "./app/components/Search/FilterComponent";
import SearchBar from "./app/components/Search/SearchBar";
import FilterSection from "./app/components/Search/FilterSection";

export default function Home() {
  const [advocates, setAdvocates] = useState<Advocate[]>([]);
  const [filteredAdvocates, setFilteredAdvocates] = useState<Advocate[]>([]);

  const [availableCities, setAvailableCities] = useState<string[]>([]);
  const [availableDegrees, setAvailableDegrees] = useState<string[]>([]);
  const [availableSpecialties, setAvailableSpecialties] = useState<string[]>(
    []
  );

  const [searchTerm, setSearchTerm] = useState<string>("");
  const [sortBy, setSortBy] = useState<string>("az");
  const [filterBy, setFilterBy] = useState<FilterBy>({
    city: [],
    degree: [],
    specialties: [],
  });

  const onSearchChange = (newSearchValue: string) => {
    setSearchTerm(newSearchValue);
  };

  const onSortChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setSortBy(e.target.value);
  };

  const onFilterChange = (type: keyof FilterBy, newValues: string[]) => {
    const newFilter = {
      ...filterBy,
      [type]: newValues,
    };
    setFilterBy(newFilter);
  };

  const onSearchAndFilter = () => {
    const newAdvocates = sortAndFilterAdvocates(
      advocates,
      sortBy,
      filterBy,
      searchTerm
    );

    setFilteredAdvocates([...newAdvocates]);
  };

  useEffect(() => {
    fetch("/api/advocates").then((response) => {
      response.json().then((jsonResponse) => {
        setAdvocates(jsonResponse.data);
        setFilteredAdvocates(sortAdvocatesByName(jsonResponse.data));

        setAvailableCities(jsonResponse.cities);
        setAvailableDegrees(jsonResponse.degreeTypes);
        setAvailableSpecialties(jsonResponse.specialtyTypes);
      });
    });
  }, []);

  useEffect(() => {
    onSearchAndFilter();
  }, [advocates, sortBy, filterBy, searchTerm]);

  return (
    <main style={{ margin: "24px" }}>
      <h1 className="text-lg">Solace Advocates</h1>
      <br />
      <br />
      <div>
        <div className="flex flex-col justify-center items-center">
          <p className="text-2xl">Find your advocate today</p>

          <SearchBar onSubmit={onSearchChange} />
        </div>
      </div>
      <br />
      <br />

      <h2 className="text-xl mb-4">
        Advocate Results ({filteredAdvocates.length})
      </h2>
      <div className="flex ">
        <SortComponent onChange={onSortChange} />

        <FilterSection>
          <FilterComponent
            optionTitle="Specialties"
            options={availableSpecialties}
            onSelectionChange={(selectedOptions) => {
              onFilterChange("specialties", selectedOptions);
            }}
          />
          <FilterComponent
            optionTitle="Degree Type"
            options={availableDegrees}
            onSelectionChange={(selectedOptions) => {
              onFilterChange("degree", selectedOptions);
            }}
          />
          <FilterComponent
            optionTitle="City"
            options={availableCities}
            onSelectionChange={(selectedOptions) => {
              onFilterChange("city", selectedOptions);
            }}
          />
        </FilterSection>
      </div>
      <br />
      <br />
      <ol className="grid grid-cols-3 gap-3 justify-items-center">
        {filteredAdvocates.map((advocate) => (
          <AdvocateCard
            key={`${advocate.id}-${advocate.firstName}`}
            {...advocate}
          />
        ))}
      </ol>
    </main>
  );
}

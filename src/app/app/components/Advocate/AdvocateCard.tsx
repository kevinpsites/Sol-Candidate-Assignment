import React, { useState } from "react";
import { Advocate } from "../../types";
import { calcYearsOfExperience, formatPhoneNumber } from "../../utils";
import SpecialityModal from "../Specialities/SpecialityModal";
import SpecialityList from "../Specialities/SpecialityList";
import AdvocateTitle from "./AdvocateTitle";

const AdvocateCard: React.FC<Advocate> = ({
  id,
  firstName,
  lastName,
  degree,
  city,
  phoneNumber,
  specialties,
  yearsOfExperience,
}) => {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <li className="max-w-sm rounded overflow-hidden shadow-lg p-4 bg-white">
      <div className="px-6 py-4 flex flex-col">
        <div className="flex justify-between items-center mb-2">
          <AdvocateTitle>
            {firstName} {lastName} ({degree})
          </AdvocateTitle>
          <span className="text-gray-400 text-xs">
            {calcYearsOfExperience(yearsOfExperience)}
          </span>
        </div>
        <p className="text-gray-700 text-base">
          {formatPhoneNumber(phoneNumber)} • {city}
        </p>

        <SpecialityList
          id={id}
          specialties={specialties}
          toggleModal={() => setModalOpen(true)}
          condensed
        />
      </div>

      <SpecialityModal open={modalOpen} onClose={() => setModalOpen(false)}>
        <AdvocateTitle className="mb-3">
          {firstName} {lastName} ({degree})
        </AdvocateTitle>

        <SpecialityList
          id={id}
          specialties={specialties}
          toggleModal={() => null}
        />
      </SpecialityModal>
    </li>
  );
};

export default AdvocateCard;

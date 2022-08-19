import { useEffect, useState } from "react";
import { BackendProps } from "../context/Backend";
import { School } from "../models/Schools";

type useSchoolReturn = [School[], (schools: School[]) => void];
export const useSchool = (backend: BackendProps): useSchoolReturn => {
  const [schools, setSchools] = useState<School[]>([]);
  useEffect(() => {
    (async () => {
      const schools = await backend.fetchSchools();
      setSchools(schools);
    })();
  }, []);

  const updateSchools = (schools: School[]) => {
    setSchools(schools);
  };

  return [schools, updateSchools];
};

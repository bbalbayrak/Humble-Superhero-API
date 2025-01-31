"use client";

import { useState, useEffect } from "react";

interface SuperHero {
  name: string;
  superpower: string;
  humilityScore: number;
}

const SuperHeroList = () => {
  const [superHeros, setSuperHeros] = useState<SuperHero[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchSuperHeros = async () => {
    const url = "http://localhost:8080/superhero";
    try {
      const response = await fetch(url, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });
      if (!response.ok) {
        throw new Error("SuperHeroes could not be fetched");
      }
      const data = await response.json();
      setSuperHeros(data.data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchSuperHeros();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Super Heroes
        </h2>
        <div className="overflow-x-auto">
          {/* Super Hero Header (column names) */}
          <div className="flex font-semibold text-lg border-b mb-2">
            <div className="w-4/12 p-2">Name</div>
            <div className="w-4/12 p-2">Superpower</div>
            <div className="w-2/12 p-2">Humility Score</div>
          </div>

          {/* Super Hero rows */}
          {superHeros.length === 0 ? (
            <div className="py-4 px-2">SuperHero can not be found!</div>
          ) : (
            superHeros.map((hero, index) => (
              <div
                key={index}
                className="w-full flex items-center border-b h-16 hover:bg-slate-50 px-4 rounded-lg"
              >
                <div className="w-4/12 p-2">{hero.name}</div>
                <div className="w-4/12 p-2">{hero.superpower}</div>
                <div className="w-2/12 p-2">{hero.humilityScore}</div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default SuperHeroList;

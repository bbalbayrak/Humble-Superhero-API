"use client";

import { useState } from "react";

interface SuperHero {
  name: string;
  superpower: string;
  humilityScore: number | string;
}

const CreateSuperHero = () => {
  const [newHero, setNewHero] = useState<SuperHero>({
    name: "",
    superpower: "",
    humilityScore: "",
  });
  const [error, setError] = useState<string | null>(null);

  const handleCreateSuperHero = async () => {
    const url = "http://localhost:8080/superhero";
    if (newHero.humilityScore === "") {
      setError("HumilityScore is required");
      return;
    }

    const humilityScore = Number(newHero.humilityScore);
    if (isNaN(humilityScore) || humilityScore < 1 || humilityScore > 10) {
      setError("HumilityScore must be a number between 1 and 10");
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...newHero,
          humilityScore,
        }),
      });
      if (!response.ok) {
        throw new Error("SuperHero could not be created");
      }

      setNewHero({ name: "", superpower: "", humilityScore: "" });
    } catch (err: any) {
      setError(err.message);
    }
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    field: "name" | "superpower" | "humilityScore"
  ) => {
    setNewHero({
      ...newHero,
      [field]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full md:w-4/5 lg:w-3/4">
        <h2 className="text-2xl font-semibold text-center mb-6">
          Add New SuperHero
        </h2>

        {/* SuperHero Form */}
        <div className="mb-6">
          <input
            type="text"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
            placeholder="SuperHero Name"
            value={newHero.name}
            onChange={(e) => handleInputChange(e, "name")}
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
            placeholder="SuperPower"
            value={newHero.superpower}
            onChange={(e) => handleInputChange(e, "superpower")}
          />
          <input
            type="text"
            className="p-2 border border-gray-300 rounded mb-4 w-full"
            placeholder="Humility Score (1-10)"
            value={newHero.humilityScore}
            onChange={(e) => handleInputChange(e, "humilityScore")}
          />
          <button
            className="bg-green-500 text-white px-4 py-2 rounded"
            onClick={handleCreateSuperHero}
          >
            Create SuperHero
          </button>
          {error && <div className="mt-4 text-red-500">{error}</div>}
        </div>
      </div>
    </div>
  );
};

export default CreateSuperHero;

"use client";
import Link from "next/link";
import React, { useState, ChangeEvent, FormEvent } from "react";

const CalorieCalculator: React.FC = () => {
  const [gender, setGender] = useState<string>("male");
  const [age, setAge] = useState<number>(0);
  const [weight, setWeight] = useState<number>(0);
  const [height, setHeight] = useState<string>("");

  const [calories, setCalories] = useState<number>(0);
  const [messageVisible, setMessageVisible] = useState<boolean>(false);

  const calculateCalories = (e: FormEvent<HTMLButtonElement>) => {
    e.preventDefault();

    if (height !== "" && age > 0) {
      const BMR =
        gender === "male"
          ? calculateMaleCalories(age, parseFloat(height), weight)
          : calculateFemaleCalories(age, parseFloat(height), weight);

      setCalories(BMR);
      setMessageVisible(true);
    }
  };

  const calculateMaleCalories = (
    age: number,
    height: number,
    weight: number
  ): number => {
    const BMR = Math.round(10 * weight + 6.25 * height - 5 * age + 5);
    return BMR;
  };

  const calculateFemaleCalories = (
    age: number,
    height: number,
    weight: number
  ): number => {
    const BMR = Math.round(10 * weight + 6.25 * height - 5 * age - 161);
    return BMR;
  };

  const handleGenderChange = (e: ChangeEvent<HTMLSelectElement>) => {
    setGender(e.target.value);
  };

  const handleAgeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setAge(Number(e.target.value));
  };

  const handleWeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setWeight(Number(e.target.value));
  };

  const handleHeightChange = (e: ChangeEvent<HTMLInputElement>) => {
    setHeight(e.target.value);
  };

  return (
    <div className="calorie-calculator">
      <Link href={'/'}>
        <button>back to home</button>
      </Link>

      <h1 className="text-3xl font-bold mb-4">Calorie Calculator</h1>

      <div className="flex flex-col items-center">
        <label className="mb-2">Gender:</label>
        <select
          className="p-2 rounded border"
          value={gender}
          onChange={handleGenderChange}
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>

        <label className="mb-2 mt-4">Age:</label>
        <input
          type="number"
          className="p-2 rounded border"
          min="10"
          max="100"
          value={age}
          onChange={handleAgeChange}
        />

        <label className="mb-2 mt-4">Weight (kg):</label>
        <input
          type="number"
          className="p-2 rounded border"
          min="10"
          max="100"
          value={weight}
          onChange={handleWeightChange}
        />

        <label className="mb-2 mt-4">Height (cm):</label>
        <input
          type="text"
          className="p-2 rounded border"
          placeholder="Enter height (e.g., 180)"
          value={height}
          onChange={handleHeightChange}
        />

        <button
          className="bg-black text-white rounded p-3 mt-4 hover:opacity-80"
          onClick={calculateCalories}
        >
          Calculate
        </button>
      </div>

      {messageVisible && (
        <div className="border p-4 mt-8">
          You would have to consume: {calories} calories
        </div>
      )}
    </div>
  );
};

export default CalorieCalculator;

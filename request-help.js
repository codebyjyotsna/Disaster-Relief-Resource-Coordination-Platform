// Request Help Form

import React from "react";
import { useForm } from "react-hook-form";

export default function RequestHelp() {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = async (data) => {
    const response = await fetch("/api/help-requests", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Help request submitted successfully!");
      reset();
    } else {
      alert("Error submitting help request");
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-8">
      <h1 className="text-2xl font-bold mb-4">Request Help</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div>
          <label className="block mb-2">Description</label>
          <textarea
            {...register("description", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Describe your situation"
          ></textarea>
        </div>
        <div>
          <label className="block mb-2">Location</label>
          <input
            {...register("location", { required: true })}
            className="w-full p-2 border rounded"
            placeholder="Enter your location"
          />
        </div>
        <div>
          <label className="block mb-2">Category</label>
          <select
            {...register("category", { required: true })}
            className="w-full p-2 border rounded"
          >
            <option value="food">Food</option>
            <option value="shelter">Shelter</option>
            <option value="medical">Medical</option>
          </select>
        </div>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded"
        >
          Submit Request
        </button>
      </form>
    </div>
  );
}

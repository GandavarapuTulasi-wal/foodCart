import React, { useState } from "react";

type SignInForm = {
  email: string;
  password: string;
};

const SignInPage: React.FC = () => {
  const [formData, setFormData] = useState<SignInForm>({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState<Partial<SignInForm>>({});

  const validateField = (name: string, value: string) => {
    let error = "";
    if (name === "email") {
      if (!value) {
        error = "Email is required";
      } else if (!/\S+@\S+\.\S+/.test(value)) {
        error = "Email is invalid";
      }
    } else if (name === "password" && !value) {
      error = "Password is required";
    }
    return error;
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(name, value),
    }));
  };

  const validateForm = () => {
    const newErrors: Partial<SignInForm> = {};
    newErrors.email = validateField("email", formData.email);
    newErrors.password = validateField("password", formData.password);
    return newErrors;
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formErrors = validateForm();
    if (Object.keys(formErrors).length === 0) {
      console.log("Sign-in successful", formData);
    } else {
      setErrors(formErrors);
    }
  };

  return (
    <section className="ml-[120px] mt-[120px] mr-[120px]">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-8">Sign In</h1>

        <form onSubmit={handleSubmit} className="max-w-md mx-auto bg-white p-8 rounded-lg shadow-md">
          <div className="mb-6">
            <label htmlFor="email" className="block text-gray-700 mb-2">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
          </div>

          <div className="mb-6">
            <label htmlFor="password" className="block text-gray-700 mb-2">Password:</label>
            <input
              type="password"
              id="password"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
              className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
            />
            {errors.password && <p className="text-red-500 text-sm mt-1">{errors.password}</p>}
          </div>

          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600"
            >
              Sign In
            </button>

            <a href="#" className="text-sm text-blue-500 hover:underline">
              Forgot password?
            </a>
          </div>
        </form>
      </div>
    </section>
  );
};

export default SignInPage;

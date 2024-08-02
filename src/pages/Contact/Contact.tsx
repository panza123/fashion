
import contact from "../../assets/images/pexels-fauxels-3183190.jpg"; // Importing the image
import { useForm, SubmitHandler } from 'react-hook-form'; // Importing useForm and SubmitHandler from react-hook-form

// Define the interface for form data
interface FormData {
  name: string;
  email: string;
  message: string;
}

function Contact() {
  // Destructure methods and properties from useForm hook
  const {
    register, // Register function to register inputs
    handleSubmit, // Function to handle form submission
    formState: { errors }, // Object to manage form errors
    reset, // Function to reset the form
  } = useForm<FormData>(); // Initialize useForm with FormData type

  // Function to handle form submission
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Log the form data to the console
    // Show popup message
    alert('Message sent successfully!');
    // Reset the form after submission
    reset();
  };

  return (
    <section className="w-full h-full">
      <div className="w-full h-[500px] sm:flex flex-col md:flex-row">
        <div className="sm:full md:w-1/2 bg-blue-200">
          <h4 className="text-xl md:text-3xl lg:text-5xl font-bold text-center pt-10 px-6">
            <span className="text-orange-600">Say hello to us</span> love to hear you
          </h4>
        </div>
        <img src={contact} alt="Contact" className="w-full md:w-1/2 object-cover" />
      </div>

      <div className="w-full sm:flex flex-col md:flex-row mt-4 px-6">
        <h4 className="text-xl md:text-2xl lg:text-4xl font-bold mb-4">
          Let's <span className="text-orange-600">begin</span>
        </h4>
        <form onSubmit={handleSubmit(onSubmit)} className="w-full max-w-lg mx-auto">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Name
            </label>
            <input
              id="name"
              {...register('name', { required: true })} 
  
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.name && <p className="text-red-500 text-xs italic">Name is required.</p>}
             {/* // Display error if name is not provided */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Email
            </label>
            <input
              id="email"
              type="email"
              {...register('email', { required: true })} // Register the email input and set it as required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            />
            {errors.email && <p className="text-red-500 text-xs italic">Email is required.</p>} 
             {/* Display error if email is not provided */}
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Message
            </label>
            <textarea
              id="message"
              {...register('message', { required: true })} // Register the message input and set it as required
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline h-32"
            />
            {errors.message && <p className="text-red-500 text-xs italic">Message is required.</p>} 
            {/* // Display error if message is not provided */}
          </div>
          <div className="flex items-center justify-between">
            <button
              type="submit"
              className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default Contact; // Export the Contact component

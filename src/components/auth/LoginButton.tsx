// src/components/LoginButton.tsx
import React from 'react';
import { useAuth0 } from '@auth0/auth0-react';
import { RiContactsLine } from "react-icons/ri";

const LoginButton: React.FC = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <button
      onClick={() => loginWithRedirect()}
      className="flex items-center justify-center p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors duration-300"
    >
      <RiContactsLine className="text-xl" />
    </button>
  );
};

export default LoginButton;

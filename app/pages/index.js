import React from 'react';
import Image from 'next/image';
import Switch from '@mui/material/Switch';
import DashboardLayout from '../layouts/DashboardLayout';
import { useRouter } from 'next/router'; 
import Link from 'next/link';


const Inter = ({ subsets }) => {
  return {
    className: 'inter-font', 
  };
};

async function fetchData(endpoint) {
  try {
    const response = await fetch(`http://localhost:18000/api/v1/${endpoint}`);
    const data = await response.json();
    console.log(`Resultados de ${endpoint}:`, data);
  } catch (error) {
    console.error('Error al llamar a la API:', error);
  }
}

// Componente Home
export default function Home() {
  const inter = React.useMemo(() => Inter({ subsets: ['latin'] }), []);
  const label = { inputProps: { "aria-label": "Switch demo" } };
  const router = useRouter(); 

  const Users = () => {

    router.push('/dashboard/users');
  };
  const Tasks = () => {
 router.push('/dashboard/task');
  };
  const TaskNew = () => {
    router.push('/dashboard/Create-Task');
     };
     const UserNew = () => {
      router.push('/dashboard/create-user');
       };     

  return (
    <DashboardLayout>
      <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
        <Image
        
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
          
        />
        
        <div className="flex space-x-4 mt-4">
          <button onClick={Users}>Usuarios</button>
          <button onClick={Tasks}>Tareas</button>
          <button onClick={TaskNew}>Tareas Nuevas</button>
          <button onClick={UserNew}>Nuevos Usuarios</button>
        </div>
      </main>
    </DashboardLayout>
  );
}

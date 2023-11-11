import Image from 'next/image';
import { Inter } from 'next/font/google';
import Switch from '@mui/material/Switch';
import DashboardLayout from '../layouts/DashboardLayout'

const inter = Inter({ subsets: ['latin'] });
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function Home() {
  return (
    <DashboardLayout>
    <main
      className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}
    >
      <Image
        src="/vercel.svg"
        alt="Vercel Logo"
        className="dark:invert"
        width={100}
        height={24}
        priority
      />
      <Switch {...label} defaultChecked />
      <Switch {...label} />
      <Switch {...label} disabled defaultChecked />
    </main>
    </DashboardLayout>
  );
}

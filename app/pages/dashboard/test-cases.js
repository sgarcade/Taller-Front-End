import Image from 'next/image';
import { Inter } from 'next/font/google';
import Switch from '@mui/material/Switch';
import DashboardLayout from '../../layouts/DashboardLayout'

const inter = Inter({ subsets: ['latin'] });
const label = { inputProps: { "aria-label": "Switch demo" } };

export default function TestCases() {
  return (
    <DashboardLayout>
    </DashboardLayout>
  );
}

import React from 'react';
import { Navbar, Nav, Button } from 'rsuite';
import DefaultPage from '@/components/Page';
import Home from '@rsuite/icons/legacy/Home';
import Cog from '@rsuite/icons/legacy/Cog';

export default function Page() {
  return <DefaultPage dependencies={{ Navbar, Nav, Button, Home, Cog }} />;
}

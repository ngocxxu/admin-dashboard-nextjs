import { ScriptProps } from 'next/script';
import React from 'react';

const Sidebar: React.FC<ScriptProps> = ({ children }) => {
  return (
    <div>
      <main>{children}</main>
    </div>
  );
};

export default Sidebar;

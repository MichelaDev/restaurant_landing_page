import { MenuItem } from '@/constants/menu';
import React from 'react';


const MenuItem = ({ name, description, price }: MenuItem) => (
  <div className="p-4 mb-4 text-left shadow text-sm xl:text-md">
    <h3>{name}</h3>
    <p className="italic text-[#555]">{description}</p>
    <p className="font-bold text-[#008080]">£{price.toFixed(2)}</p>
  </div>
);

const ListMenu = ({ items }: { items: MenuItem[] }) => (
  <div className="mb-4">
    {items.map((item, index) => (
      <MenuItem key={index} {...item} />
    ))}
  </div>
);

export default ListMenu;

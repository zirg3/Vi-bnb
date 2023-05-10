'use client'

import { usePathname, useSearchParams } from 'next/navigation';
import { TbBeach, TbMountain, TbPool } from 'react-icons/tb';
import { 
  GiBarn, 
  GiBoatFishing, 
  GiCactus, 
  GiCastle, 
  GiCaveEntrance, 
  GiForestCamp, 
  GiIsland,
  GiWindmill
} from 'react-icons/gi';
import { FaSkiing } from 'react-icons/fa';
import { BsSnow } from 'react-icons/bs';
import { IoDiamond } from 'react-icons/io5';
import { MdOutlineVilla } from 'react-icons/md';

import CategoryBox from "../CategoryBox";
import Container from '../Container';


export const categories = [
  {
    label: 'Пляжи',
    icon: TbBeach,
    description: 'Это место близко к пляжу!',
    query: 'Beach'
  },
  {
    label: 'Мельницы',
    icon: GiWindmill,
    description: 'В этом отеле есть ветряные мельницы!',
    query: 'Windmills'
  },
  {
    label: 'Модерн',
    icon: MdOutlineVilla,
    description: 'Это современное здание!',
    query: 'Modern'
  },
  {
    label: 'Деревни',
    icon: TbMountain,
    description: 'Находится в сельской местности!',
    query: 'Countryside'
  },
  {
    label: 'Бассейны',
    icon: TbPool,
    description: 'В этом отеле есть красивый бассейн!',
    query: 'Pools'
  },
  {
    label: 'Острова',
    icon: GiIsland,
    description: 'Это место находится на острове!',
    query: 'Islands'
  },
  {
    label: 'Озеро',
    icon: GiBoatFishing,
    description: 'Это место находится рядом с озером!',
    query: 'Lake'
  },
  {
    label: 'Лыжи',
    icon: FaSkiing,
    description: 'В этом отеле можно заняться лыжным спортом!',
    query: 'Skiing'
  },
  {
    label: 'Замки',
    icon: GiCastle,
    description: 'Это место является древний замок!',
    query: 'Castles'
  },
  {
    label: 'Пещеры',
    icon: GiCaveEntrance,
    description: 'This property is in a spooky cave!',
    query: 'Caves'
  },
  {
    label: 'Природа',
    icon: GiForestCamp,
    description: 'Это место находится в жуткой пещере!',
    query: 'Camping'
  },
  {
    label: 'Арктика',
    icon: BsSnow,
    description: 'Это место находится в арктической среде!',
    query: 'Arctic'
  },
  {
    label: 'Пустыня',
    icon: GiCactus,
    description: 'Это место находится в пустыне!',
    query: 'Desert'
  },
  {
    label: 'Сараи',
    icon: GiBarn,
    description: 'Это место находится в сарае!',
    query: 'Barns'
  },
  {
    label: 'Люкс',
    icon: IoDiamond,
    description: 'Это место является новым и роскошным!',
    query: 'Lux'
  }
]

const Categories = () => {
  const params = useSearchParams();
  const category = params?.get('category');
  const pathname = usePathname();
  const isMainPage = pathname === '/';
  
  if (!isMainPage) {
    return null;
  }

  return (
    <Container>
      <div
        className="
          pt-4
          flex 
          flex-row 
          items-center 
          justify-between
          overflow-x-auto
        "
      >
        {categories.map((item) => (
          <CategoryBox 
            key={item.label}
            label={item.label}
            icon={item.icon}
            query={item.query}
            selected={category === item.query}
          />
        ))}
      </div>
    </Container>
  );
}

export default Categories;
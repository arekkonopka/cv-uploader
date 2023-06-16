'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

import bellIcon from '../../../public/bellIcon.svg'
import settingsIcon from '../../../public/settingsIcon.svg'
import AvatarIcon from '../../../public/Avatar.png'

const tabbs = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'Job Openings',
    path: '/job',
  },
  {
    name: 'Candidates',
    path: '/candidates',
  },
  {
    name: 'Interviews',
    path: '/interviews',
  },
  {
    name: 'Teammeates',
    path: '/teammates',
  },
  {
    name: 'Upload',
    path: '/upload',
  },
]

const Navbar = () => {
  const pathName = usePathname()

  return (
    <div className="h-[73px] border-solid border-b border-gray-200 pr-[80px] pl-[80px]">
      <div className="w-full flex items-center h-full">
        <div>ATS</div>
        <div className="flex pl-[40px]">
          {tabbs.map(({ name, path }) => (
            <Link
              key={name}
              href={path}
              className={`pl-[12px] pr-[12px] pt-[8px] pb-[8px] ${
                path === pathName ? 'bg-blue-100' : 'bg-gray-100'
              } rounded-lg	ml-[16px]`}
            >
              {name}
            </Link>
          ))}
        </div>
        <div className="flex grow justify-end items-center">
          <div className="pr-[28px]">
            <Image src={bellIcon} alt="bell icon" />
          </div>
          <div className="pr-[28px]">
            <Image src={settingsIcon} alt="settings icon" />
          </div>
          <div className="rounded-full">
            <Image src={AvatarIcon} alt="avatar icon" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Navbar

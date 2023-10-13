import React from 'react'
import {
  FaStar,
  FaCodeBranch,
  FaEye,
  FaAccessibleIcon,
  Fa500Px,
  FaAddressCard,
  FaAdjust,
  FaAccusoft,
} from 'react-icons/fa'
import { ImNewspaper } from 'react-icons/im'
import Image from 'next/image'
const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-7xl font-normal mb-5">Introduce</h1>
      <p className="text-6xl font-normal mb-0">
        <FaAddressCard />
      </p>
      <p className="font-bold mb-10">안녕하세요 중부대 20학번 최수민입니다.</p>

      <p className="text-6xl font-normal mb-0">
        <ImNewspaper />
      </p>
      <p className="text-2xl font-bold mb-0">취미</p>
      <p className="font-bold mb-5">운동, 게임등이 취미 입니다.</p>
    </div>
  )
}

export default DashboardPage

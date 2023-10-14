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
import { AiOutlineTeam } from 'react-icons/ai'
const DashboardPage = () => {
  return (
    <div>
      <h1 className="text-9xl font-normal mb-5">Introduce</h1>
      <p className="text-6xl font-normal mb-0">
        <FaAddressCard />
      </p>
      <p className="text-2xl font-bold">정보보호학과</p>
      <p className="font-bold mb-10">안녕하세요 중부대 20학번 최수민입니다.</p>
      <p className="text-6xl font-normal mb-0">
        <ImNewspaper />
      </p>
      <p className="text-2xl font-bold mb-0">취미</p>
      <p className="font-bold mb-5">운동, 게임등이 취미 입니다.</p>
      <p className="font-bold ">(내 정보)</p>
      <p className="font-bold ">e-mail : jbsumin8424@gmail.com</p>
      <p className="font-bold ">생일 : 2001.05.11</p>{' '}
      <p className="font-bold  ">학번 : 92015506</p>
      <p className="font-bold ">MBTI : INTP</p>
      <p className="font-bold mb-10 ">역할 : 조장, 발표, 웹 사이트 만들기</p>
      <p className="text-8xl font-normal mb-0">
        <AiOutlineTeam />
      </p>
      <p className="text-3xl font-bold mb-5 ">팀원 소개</p>
      <p className="font-bold ">이름 : 이태연(92015506)</p>
      <p className="font-bold ">취미 : 유튜브 시청</p>
      <p className="font-bold ">학과 : 정보보호학과</p>
      <p className="font-bold ">e-mail : hahaha2662@naver.com</p>
      <p className="font-bold ">생일 2001.09.04</p>
      <p className="font-bold ">MBTI : ISFJ</p>
      <p className="font-bold mb-20 ">
        역할 : 자료수집, PPT 작성, 웹 사이트 만들기
      </p>
    </div>
  )
}

export default DashboardPage

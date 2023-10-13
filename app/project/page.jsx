import React from 'react'
import { AiFillStar, AiOutlineFundProjectionScreen } from 'react-icons/ai'
const ProjectPage = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold flex-col mb-5 bg-gray-100 p-4 m-1 rounded-lg">
        팀 프로젝트 소개
      </h1>
      <p className="text-7xl justify-between mb-5">
        <AiOutlineFundProjectionScreen />
      </p>
      <p className=" font-bold">팀명 : 이랴이랴 달려라!</p>
      <p className=" mb-7 font-bold">팀원 : 이태연, 최수민</p>
      <p className="bg-green-200 p-4 m-1 rounded-lg mb-7 text-blue-700 flex text-3xl font-bold">
        프로젝트 명 : 찾아라 비밀의 맛집!
      </p>
      <p className="text-2xl mb-5 font-bold">~프로젝트 선정 이유~</p>
      <img src="./img/2.jpg" width={500} height={300}></img>
      <p className="  font-bold">
        현대 시대에는 미슐랭, 미식가, 맛집 등등 음식의 양 뿐만 아니라 음식의
      </p>
      <p className=" mb-7 font-bold">맛 또한 굉장히 중요한 시대이다.</p>
      <p className=" font-bold">그래서 우리는 맛집을 종종 찾을 때가 많다.</p>
      <p className=" mb-7 font-bold">
        그렇기 때문에 맛집 추천 웹 사이트를 만들기로 했다.
      </p>{' '}
      <p className="text-2xl mb-5 font-bold">만들고자 하는 웹 사이트의 특징</p>
      <p className=" text-xl font-bold">
        1. 원하는 음식을 검색하면 관련 음식과 함께 별점이 나온다.
        <img src="./img/3.jpg" width={500} height={200}></img>
        <p className=" mt-1 justify-center flex items-col max-w-lg text-5xl font-bold rounded mb-4 bg-blue-500 text-yellow-300">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </p>
      </p>
      <p className="mt-10 text-xl font-bold">2. 리뷰를 작성하고 볼 수 있다.</p>
      <img src="./img/4.jpg" width={500} height={200}></img>
      <p className=" mt-10 text-xl font-bold">
        3. 관련 음식점에 관한 정보가 나온다.(영업시간, 메뉴, 가격 등등)
      </p>
      <img src="./img/5.jpg" width={500} height={200}></img>
      <p className=" mt-10 text-xl font-bold">
        4. GPS를 이용하여 주변에 맛집이 어디있는지 알려준다.
      </p>
      <img src="./img/6.jpg" width={500} height={200}></img>
      <p className=" mt-10 text-xl font-bold">
        5. 음식을 예약하거나 미리 주문할 수 있다.
      </p>
      <img src="./img/7.jpg" width={500} height={200}></img>
    </div>
  )
}

export default ProjectPage

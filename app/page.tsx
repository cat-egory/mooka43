import React from 'react'
import { demos } from '../lib/demos'

export default function Page() {
  return (
    <div className="space-y-8">
      <div className="font-bold">
        <input placeholder="책 제목 또는 영화 제목을 입력해주세요." />
        <button>입력</button>
      </div>
      <div>귀여운 필터버튼</div>
      {demos.map((demo, i) => (
        <div key={i}>{demo.title}</div>
      ))}
    </div>
  )
}

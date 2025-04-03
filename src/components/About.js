import React from 'react'
import { AiFillBulb } from 'react-icons/ai'

function About() {
  return (
    <section className='w-full h-fit px-[40px] py-10 max-xs:px-[20px] relative bg-white' id='about'>
      <div className='max-w-7xl mx--auto'>
        <div className='inline-block'>
          <p className='bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2'>
            <span className=''>
              <AiFillBulb className='w-4 h-4'/>
            </span>
            自己紹介
          </p>
        </div>
        <div className='mt-7'>
          <p className='mt-6 text-gray-600 text-lg md:text-xl leading-9'>
            私の強みはビジネスサイドでの経験とエンジニアの経験を持っていることです。<br />
            <br />
            ビジネス経験: 1年間の下水道処理施設の維持管理の経験と5年間の営業企画部として事業計画作成、提案書作成、官公庁営業の経験<br />
            フルスタック開発: 要件定義からアーキテクチャ設計、技術選定、実装、インフラ構築、オブザーバビリティまでの一貫対応<br />
            プロダクト開発: 企画から実装、データ分析、運用まで全フェーズの経験<br />
            マネジメント: 3年間のエンジニアリングマネージャー経験（目標/KPI設計、メンバー育成、採用面接など）<br />
            基盤構築: Platform Engineeringチームの立ち上げ、PdM/PM、OKR管理、技術検証の高速化<br />
          </p>
        </div>
        <div className='mt-10'>
          <div className='w-full'>
            <ul className='flex justify-between gap-10 flex-col md:flex-row'>
              <li className='w-full shadow-sm'>
                <div className='w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke'>
                  <h3 className='text-4xl mb-1 text-darkblue font-bold'>
                    30+
                  </h3>
                  <span>GitHub Repository</span>
                </div>
              </li>
              <li className='w-full shadow-sm'>
                <div className='w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke'>
                  <h3 className='text-4xl mb-1 text-darkblue font-bold'>
                    20+
                  </h3>
                  <span>Projects</span>
                </div>
              </li>
              <li className='w-full shadow-sm'>
                <div className='w-full text-center py-[30px] md:py-[60px] rounded-md bg-whitesmoke'>
                  <h3 className='text-4xl mb-1 text-darkblue font-bold'>
                    9+
                  </h3>
                  <span>YEARS</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About

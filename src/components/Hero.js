import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

function Hero() {
  return (
    <section>
      <div>
        <div>
          <div>
            <h1>Leave system</h1>
            <span>Development</span>
            <h2>to Oshin</h2>
            <p>
              プロダクト開発ならOshinにお任せ下さい。インフラからフロントエンド、バックエンドで幅広い技術スタックを駆使し、プロダクト開発のさまざまな側面に取り組んでいます。
              加えて、PdMやPMとしての経験も活かし、企画からマネジメントにも取り組んでいます。
            </p>
          </div>
          <div>
            <Link href={'#projects'}>
              プロダクト開発実績
            </Link>
            <Link href={'#contact'}>
              コンタクト
            </Link>
          </div>
        </div>
        <Image
          src={'/assets/oshin.jpg'}
          width={400}
          height={400}
          alt='heroImage'
        />
      </div>
    </section>
  )
}

export default Hero

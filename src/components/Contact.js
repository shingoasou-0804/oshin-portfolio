import React from 'react'
import { AiFillBulb, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

function Contact() {
  return (
    <section className='w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke' id='contact'>
      <div className='max-w-7xl mx-auto'>
        <div className='inline-block'>
          <p className='bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-10'>
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>
        <div className='grid-cols-1 lg:grid-cols-2 gap-6'>
          <div>
            <p>
              日々新しいプロジェクトを作成しています。
              <br />
              ご相談およびお問い合わせはこちらからお気軽にご連絡ください。
              <br />
              メッセージには可能な限り早く返信させていただきます。
            </p>
            <p className='mt-12'>
              連絡先はこちら
            </p>
            <h4 className='text-lg font-medium text-darkblue'>oshin-drone@hoge.com</h4>
            <div className='mt-12'>
              <div className='flex flex-col gap-2'>
                <h5>SNS</h5>
                <div className='flex gap-5'>
                  <a href="" className='text-3xl text-darkblue'>
                    <AiFillTwitterSquare />
                  </a>
                  <a href="" className='text-3xl text-darkblue'>
                    <AiFillFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <form action=''>

          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact

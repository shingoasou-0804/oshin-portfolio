'use client'
 
import React, { useRef } from 'react'
import {
  AiFillBulb,
  AiFillFacebook,
  AiFillTwitterSquare,
} from 'react-icons/ai'
import emailjs from '@emailjs/browser'
 
function Contact() {
  const form = useRef()
  const sendEmail = (e) => {
    e.preventDefault()
    emailjs
      .sendForm(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
        form.current,
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_ID
      )
      .then(
        (result) => {
          form.current.reset()
          console.log(result.text)
        },
        (error) => {
          console.log(error.text)
        }
      )
  }
 
  return (
    <section
      className="w-full h-fit px-[40px] md:py-20 lg:pb-40 lg:pt-10 py-10 max-xs:px-[20px] relative bg-whitesmoke"
      id="contact"
    >
      <div className="max-w-7xl mx-auto">
        <div className="inline-block">
          <p className="bg-cadetblue text-white text-sm font-medium py-3 px-5 rounded-full flex items-center gap-2 mb-10">
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div>
            <p>
              日々新しいプロジェクトを作成しています。
              <br />
              ご相談問い合わせはこちらからお気軽に連絡ください。
              <br />
              メッセージには可能な限り早く返信させていただきます。
            </p>
            <p className="mt-12">連絡先はこちら</p>
            <h4 className="text-lg font-medium text-darkblue">
              oshin-drone@hoge.com
            </h4>
            <div className="mt-12">
              <div className="flex flex-col gap-2">
                <h5>SNS</h5>
                <div className="flex gap-5">
                  <a href="" className="text-3xl text-darkblue">
                    <AiFillTwitterSquare />
                  </a>
                  <a href="" className="text-3xl text-darkblue">
                    <AiFillFacebook />
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div>
            <form ref={form} onSubmit={sendEmail} className="w-full">
              <input
                type="text"
                id="name"
                name="name"
                placeholder="お名前"
                className="w-full text-gray-700 border border-slate-200 rounded  py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="email"
                id="email"
                name="email"
                placeholder="メールアドレス"
                className="w-full text-gray-700 border border-slate-200 rounded  py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <input
                type="text"
                id="subject"
                name="subject"
                placeholder="タイトル"
                className="w-full text-gray-700 border border-slate-200 rounded  py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <textarea
                name="message"
                id="message"
                rows={'7'}
                placeholder="内容"
                className="w-full text-gray-700 border border-slate-200 rounded  py-3 px-4 mb-4 leading-tight focus:outline-cadetblue"
              />
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-darkblue text-white font-medium py-3 px-6 rounded hover:shadow-lg 
                  hover:bg-darkblue/75"
                >
                  送信
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
 
export default Contact

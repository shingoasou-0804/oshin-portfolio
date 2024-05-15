import React from 'react'
import { AiFillBulb, AiFillFacebook, AiFillTwitterSquare } from 'react-icons/ai'

function Contact() {
  return (
    <section>
      <div>
        <div>
          <p>
            <span>
              <AiFillBulb />
            </span>
            コンタクト
          </p>
        </div>
        <div>
          <div>
            <p>
              日々新しいプロジェクトを作成しています。
              <br />
              ご相談およびお問い合わせはこちらからお気軽にご連絡ください。
              <br />
              メッセージには可能な限り早く返信させていただきます。
            </p>
            <p>
              連絡先はこちら
            </p>
            <h4>oshin-drone@hoge.com</h4>
            <div>
              <div>
                <h5>SNS</h5>
                <div>
                  <a href="">
                    <AiFillTwitterSquare />
                  </a>
                  <a href="">
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

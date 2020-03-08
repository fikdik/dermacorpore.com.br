import React, { useState } from "react"
import { toast } from "react-toastify"

import { Form, Input } from "@rocketseat/unform"
import { phone, email } from "content/general/info.json"
import { trackCustomEvent } from "gatsby-plugin-google-analytics"
import * as Yup from "yup"

// import SmartLink from "~/components/SmartLink"
import SVGIcon from "~/components/SVGIcon"

import styles from "./index.module.css"

const schema = Yup.object().shape({
  "form-name": Yup.string(),
  name: Yup.string().required("O nome é obrigatório"),
  email: Yup.string()
    .email()
    .required("O email é obrigatório"),
  phone: Yup.string().required(
    "O Telefone é obrigatório. Dê preferência ao whatsapp"
  ),
  course: Yup.string().required(
    "O curso ou instituição de ensino é obrigatório"
  ),
  year: Yup.string().required("O ano é obrigatório"),
  message: Yup.string(),
})

function openInNewTab(url, query = {}) {
  var win = window.open(url + encode(query), "_blank")
  win.focus()
}

function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

export default function FormCadastroProfissional() {
  const email = "novoprofissional@dermacorpore.net"
  const [way, setWay] = useState("")

  function handleSubmit(data, { resetForm }) {
    switch (way) {
      case "server": {
        fetch("/", {
          method: "POST",
          headers: { "Content-Type": "application/x-www-form-urlencoded" },
          body: encode(data),
        })
          .then(() => {
            trackCustomEvent({
              category: "server button",
              action: "Click",
              label: "Contato pelo Servidor",
              value: 1,
            })
            toast.success("Mensagem enviada, Obrigado por se registrar")
            resetForm()
          })
          .catch(error => {
            toast.success(
              "Ocorreu um erro no servidor, por favor tente mais tarde"
            )
          })

        break
      }
      case "email": {
        let body = `Sou ${data.name.trim()}. Solicito o cadastro para profissional\n`
        body += `\n Nome: ${data.name.trim()}`
        body += `\n Email: ${data.email.trim()}`
        body += `\n Telefone: ${data.phone.trim()}`
        body += `\n Instituto: ${data.course.trim()}`
        body += `\n Ano: ${data.year.trim()}`
        body += `\n\n Observação: \n\n${data.message.trim()}`
        openInNewTab(`mailto:${email}?`, {
          subject: `contato pela página ${window.location.pathname} `,
          body,
        })
        trackCustomEvent({
          category: "email button",
          action: "Click",
          label: "Contato pelo email",
          value: 1,
        })
        toast.success("Campos validos, complete o envio pelo seu app de email")
        resetForm()
        break
      }
      default: {
        toast.error("Use um dos botoes para enviar")
      }
    }
  }

  return (
    <>
      <Form
        schema={schema}
        name="contact"
        method="post"
        action="/"
        onSubmit={handleSubmit}
        className={styles.simpleForm}
        data-netlify="true"
        data-netlify-honeypot="bot-field"
      >
        <Input type="hidden" name="form-name" value="formProfissional" />
        <div className={styles.input}>
          <Input name="name" type="text" placeholder="Nome Completo" />
        </div>
        <div className={styles.input}>
          <Input name="email" type="text" placeholder="Email" />
        </div>
        <div className={styles.input}>
          <Input name="phone" type="text" placeholder="Telefone / Whatsapp" />
        </div>
        <div className={styles.input}>
          <Input
            name="course"
            type="text"
            placeholder="Instituto em que estudou"
          />
        </div>
        <div className={styles.input}>
          <Input
            name="year"
            type="text"
            placeholder="Ano de conclusão do curso"
          />
        </div>
        <div className={styles.input}>
          <Input multiline name="message" placeholder="Observação" />
        </div>
        <div className="flex w-full text-white">
          <button
            className="btn flex-auto flex items-center justify-center mr-2 text-gray-800"
            type="submit"
            onClick={() => setWay("server")}
          >
            Solicitar
          </button>
          <button
            className="btn flex-auto flex items-center justify-center bg-blue-500 border-green-500"
            type="submit"
            onClick={() => setWay("email")}
          >
            <SVGIcon className="w-8 h-8 mr-2 mb-2" name="envelope" />
            Solicitar por email
          </button>
        </div>
      </Form>
      <p className="p-4 text-gray-600">
        * Ambos os botões realizam a mesma operação, por meios distintos. É
        recomendado usar o botão a direita, pois ele abrirá o seu app de email
        evitando erros ou atrasos na resposta a sua solicitação.
      </p>
    </>
  )
}

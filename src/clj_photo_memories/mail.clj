(ns clj-photo-memories.mail
  (:require [net.cgrand.enlive-html :as html])
  (:import java.util.Date))


(html/deftemplate mail-template "templates/mail.html"
  [date-from date-to photos]
  ; Figure out why the fuck this doesn't work with replace-vars
  [:head :title] (html/content (str "Picture memories from " date-from
                                    " to " date-to))
  [:h1 :#date-from] (html/content date-from)
  [:h1 :#date-to] (html/content date-to)
  [:div.photo] (html/clone-for [photo photos]
                               [:a] (html/set-attr :href (:page-url photo))
                               [:img] (html/set-attr :alt (:title photo)
                                                     :src (:thumbnail-url photo))
                               [:div.description :em] (html/content (:description photo))))


; Stolen from http://nakkaya.com/2009/11/10/using-java-mail-api-from-clojure/
(defn send-mail [recipients subject body & [mail-opts]]
  (let [props (java.util.Properties.)]
    (doto props
      (.put "mail.smtp.host" (:host mail-opts))
      (.put "mail.smtp.port" (:port mail-opts))
      (.put "mail.smtp.user" (:user mail-opts))
      (.put "mail.smtp.socketFactory.port"  (:port mail-opts))
      (.put "mail.smtp.auth" "true"))

    (if (= (:ssl mail-opts) true)
      (doto props
        (.put "mail.smtp.starttls.enable" "true")
        (.put "mail.smtp.socketFactory.fallback" "false")))

    (let [authenticator (proxy [javax.mail.Authenticator] []
                          (getPasswordAuthentication []
                            (javax.mail.PasswordAuthentication.
                             (:user mail-opts) (:password mail-opts))))
          session (javax.mail.Session/getInstance props authenticator)
          msg     (javax.mail.internet.MimeMessage. session)]

      (.setFrom msg (javax.mail.internet.InternetAddress. (:from mail-opts)))

      (.setRecipients msg
                      (javax.mail.Message$RecipientType/TO)
                      (javax.mail.internet.InternetAddress/parse recipients))

      (.setSubject msg subject)
      (.setContent msg body "text/html; charset=\"utf-8\"")
      (.setSentDate msg (Date.))
      (javax.mail.Transport/send msg))))

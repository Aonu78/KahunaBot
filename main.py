from typing import Annotated
from fastapi import FastAPI, Form
from fastapi.middleware.cors import CORSMiddleware
import smtplib, ssl
from email.mime.text import MIMEText
from email.mime.multipart import MIMEMultipart
import uvicorn
import threading
from threading import Thread
from email.message import EmailMessage

class EmailThread(threading.Thread):
    def __init__(self, email_message):
        self.email_message = email_message
        threading.Thread.__init__(self)
    def run(self):
        self.email_message.send()

web_mail = "booking@eaglevillageonline.com"
password = "3onj/44R42(e"
mail_server = "mail.eaglevillageonline.com"
port_no = 465
hr_email = "syedaoonhussain@gmail.com"


app = FastAPI()
origins = ["*"]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)



@app.post("/sendmail/")
async def login(ajax_name: Annotated[str, Form()], ajax_email: Annotated[str, Form()],ajax_phone: Annotated[str, Form()],ajax_appointment: Annotated[str, Form()],ajax_purpose: Annotated[str, Form()]):
    message = MIMEMultipart("alternative")
    message["Subject"] = ajax_appointment +" "+ajax_purpose
    message["From"] = hr_email
    message["To"] = web_mail
    message_to_send = "Name : "+ajax_name+"\n"+"Phone : "+ ajax_phone+"\n"+"Email : "+ajax_email
    part1 = MIMEText(message_to_send, "plain")
    message.attach(part1)
    context = ssl.create_default_context()
    with smtplib.SMTP_SSL(mail_server, port_no, context=context) as server:
        server.login(web_mail, password)
        server.sendmail(
            web_mail, hr_email, message.as_string()
        )
    return {"success": "success"}


if __name__ == "__main__":
    uvicorn.run(app, host="0.0.0.0", port=8000)
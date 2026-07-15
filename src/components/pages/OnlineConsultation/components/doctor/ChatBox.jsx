import React, { useState } from "react";


const ChatBox = () => {

  const [message, setMessage] = useState("");

  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: "patient",
      text: "Hello Doctor, I have chest pain since yesterday."
    },
    {
      id: 2,
      sender: "doctor",
      text: "Please tell me your symptoms in detail."
    }
  ]);



  const sendMessage = () => {

    if(!message.trim()) return;


    setMessages([
      ...messages,
      {
        id: Date.now(),
        sender: "doctor",
        text: message
      }
    ]);


    setMessage("");

  };



  return (

    <div className="bg-white rounded-2xl shadow-sm h-[500px] flex flex-col">


      {/* Header */}

      <div className="p-5 border-b">

        <h3 className="text-xl font-bold text-[#243b5a]">
          Patient Chat
        </h3>

        <p className="text-sm text-green-600">
          ● Online
        </p>

      </div>






      {/* Messages */}

      <div className="flex-1 p-5 space-y-4 overflow-y-auto">


        {
          messages.map((msg)=>(

            <div
              key={msg.id}
              className={`flex ${
                msg.sender === "doctor"
                ? "justify-end"
                : "justify-start"
              }`}
            >


              <div
                className={`
                  max-w-[80%]
                  px-4
                  py-3
                  rounded-2xl
                  text-sm

                  ${
                    msg.sender === "doctor"
                    ?
                    "bg-[#00C2CB] text-white rounded-br-none"
                    :
                    "bg-gray-100 text-gray-700 rounded-bl-none"
                  }
                `}
              >

                {msg.text}

              </div>


            </div>


          ))
        }


      </div>






      {/* Input */}

      <div className="p-4 border-t flex gap-3">


        <input
          type="text"
          value={message}
          onChange={(e)=>setMessage(e.target.value)}
          onKeyDown={(e)=>{
            if(e.key==="Enter"){
              sendMessage();
            }
          }}
          placeholder="Write a message..."
          className="flex-1 border rounded-xl px-4 outline-none focus:ring-2 focus:ring-[#00C2CB]"
        />



        <button
          onClick={sendMessage}
          className="bg-[#00C2CB] text-white px-5 rounded-xl font-semibold"
        >
          Send
        </button>


      </div>



    </div>

  );

};


export default ChatBox;